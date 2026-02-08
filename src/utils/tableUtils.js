import { reactive, ref } from 'vue';
import { useTable } from '@/stores/table';
import { baseUtils } from './index';
export function tableUtils() {
    const tableStore = useTable();
    const { getPager } = tableStore;
    const { formatDate, today, yesterday, last7Days, last30Days, thisMonthStart, thisMonthEnd, lastMonthStart, lastMonthEnd } = baseUtils();
    const tableState = reactive({
        tableRecords: [],
        selected: [],
        selectedOpenRows: [],
        paginate: {},
        pageNo: 1,
        sortableKey: '',
        searchText: '',
        dateDropdownOpen: false,
        selectedDate: '',
        selectedValue: '',
        date: null,
        config: {
            inline: true,
            dateFormat: 'Y-m-d',
            mode: 'range',
            wrap: true,
        },
        filter: {
            search: '',
            sort: '',
            page: 1,
            pageSize: 4,
            date: {
                start_date: '',
                to_date: '',
            },
        },
    });
    const pageSizeOptions = ref([
        { title: 10, value: 10 },
        { title: 15, value: 15 },
        { title: 25, value: 25 },
        { title: 50, value: 50 },
        { title: 100, value: 100 },
    ]);
    function handlePaginationSize() {
        if (!pageSizeOptions.value.some(option => option.value === tableState.filter['pageSize'])) {
            const index = pageSizeOptions.value.findIndex(option => option.value > tableState.filter['pageSize']);
            const newOption = {
                title: tableState.filter['pageSize'],
                value: tableState.filter['pageSize'],
                selected: true,
            };
            if (index === -1) {
                pageSizeOptions.value.push(newOption);
            }
            else {
                pageSizeOptions.value.splice(index, 0, newOption);
            }
        }
    }
    function setPage(data) {
        tableState.filter['page'] = data;
    }
    function searchTerm(value) {
        tableState.filter['page'] = 1;
        tableState.filter['search'] = value;
    }
    function handleSelect(event) {
        const target = event.target;
        const selectedValue = target.value;
        tableState.filter['pageSize'] = +selectedValue;
    }
    function checkUncheckAll(event, props) {
        if (props.tableConfig) {
            const checked = event.target.checked;
            props.tableConfig.data.forEach((item) => {
                setSelectedItem(checked, Number(item.id));
            });
        }
    }
    function onItemChecked(event) {
        setSelectedItem(event.target?.checked, Number(event.target?.value));
    }
    function setSelectedItem(checked, value) {
        const index = tableState.selected.indexOf(Number(value));
        if (checked) {
            if (index == -1)
                tableState.selected.push(Number(value));
        }
        else {
            tableState.selected = tableState.selected.filter(id => id !== Number(value));
        }
    }
    function onSort(field, props) {
        tableState.sortableKey = field;
        tableState.filter['page'] = 1;
        tableState.filter['sort'] == 'asc' ? (tableState.filter['sort'] = 'desc') : tableState.filter['sort'] == 'desc' ? (tableState.filter['sort'] = '') : (tableState.filter['sort'] = 'asc');
        applyFilters(props);
    }
    function handleDateFilter(value) {
        tableState.selectedValue = value;
        const ranges = {
            today: [today, today],
            yesterday: [yesterday, yesterday],
            '7_days': [last7Days, today],
            '30_days': [last30Days, today],
            this_month: [thisMonthStart, thisMonthEnd],
            last_month: [lastMonthStart, lastMonthEnd],
        };
        if (ranges[value]) {
            const [start, end] = ranges[value];
            tableState.filter.date.start_date = formatDate(start);
            tableState.filter.date.to_date = formatDate(end);
        }
        tableState.selectedDate = `${tableState.filter.date.start_date} - ${tableState.filter.date.to_date}`;
        tableState.dateDropdownOpen = false;
    }
    function handleDate(selectedDates, dateStr) {
        const [start, end] = dateStr.split(' to ');
        tableState.filter['date']['start_date'] = start;
        if (end) {
            tableState.filter['date']['to_date'] = end;
        }
        if (start && end) {
            tableState.selectedDate = `${tableState.filter['date']['start_date']} - ${tableState.filter['date']['to_date']}`;
            tableState.selectedValue = '';
            tableState.dateDropdownOpen = false;
        }
    }
    function openRowDetails(id) {
        const index = tableState.selectedOpenRows.indexOf(id);
        if (index === -1) {
            tableState.selectedOpenRows.push(id);
        }
        else {
            tableState.selectedOpenRows = tableState.selectedOpenRows.filter(rowId => rowId !== id);
        }
    }
    function getColSpan(props) {
        const columnLength = (props.tableConfig && props.tableConfig.columns.length) || 0;
        const actionLength = props.tableConfig && props.tableConfig.row_action ? 1 : 0;
        const isCheckbox = props.hasCheckbox ? 1 : 0;
        const isRowDetails = props.rowDetails ? 1 : 0;
        return columnLength + actionLength + isCheckbox + isRowDetails;
    }
    function handleDropdown() {
        tableState.dateDropdownOpen = !tableState.dateDropdownOpen;
    }
    function applyFilters(props) {
        let filteredData;
        if (props.tableConfig) {
            filteredData = [...props.tableConfig.data];
            // Search filter
            if (tableState.filter['search'].trim() !== '') {
                filteredData = filteredData.filter((item) => {
                    return Object.keys(item).some(key => {
                        const value = item[key];
                        if (!value)
                            return false;
                        if (typeof value === 'string') {
                            return value.toLowerCase().includes(tableState.filter['search'].toLowerCase());
                        }
                        if (typeof value === 'number') {
                            return value.toString().includes(tableState.filter['search']);
                        }
                        return false;
                    });
                });
            }
            // Sorting filter
            if (tableState.filter['sort']) {
                filteredData.sort((a, b) => {
                    const key = tableState.sortableKey;
                    const valueA = a[key];
                    const valueB = b[key];
                    const textA = typeof valueA === 'string' ? valueA : '';
                    const textB = typeof valueB === 'string' ? valueB : '';
                    if (typeof valueA === 'string' && typeof valueB === 'string') {
                        return tableState.filter['sort'] === 'asc' ? textA.localeCompare(textB) : textB.localeCompare(textA);
                    }
                    if (typeof valueA === 'number' && typeof valueB === 'number') {
                        return tableState.filter['sort'] === 'asc' ? valueA - valueB : valueB - valueA;
                    }
                    return 0;
                });
            }
            //  Date range filter
            if (tableState.filter['date']['start_date']) {
                filteredData = filteredData.filter((data) => {
                    if ('date' in data && data.date) {
                        const recordDate = new Date(data.date);
                        const fromDate = new Date(tableState.filter['date']['start_date']);
                        const toDate = tableState.filter['date']['to_date'] ? new Date(tableState.filter['date']['to_date']) : null;
                        if (fromDate && toDate) {
                            return recordDate >= fromDate && recordDate <= toDate;
                        }
                        else if (fromDate) {
                            return recordDate >= fromDate;
                        }
                        else if (toDate) {
                            return recordDate <= toDate;
                        }
                    }
                    return true;
                });
            }
            // Pagination
            tableState.paginate = getPager(filteredData.length, tableState.filter['page'], tableState.filter['pageSize']);
            if (tableState.paginate) {
                tableState.tableRecords = filteredData.slice(tableState.paginate.start_index, tableState.paginate.end_index + 1);
            }
        }
    }
    return {
        tableState,
        pageSizeOptions,
        setPage,
        searchTerm,
        handleSelect,
        handlePaginationSize,
        checkUncheckAll,
        onItemChecked,
        onSort,
        handleDateFilter,
        handleDate,
        openRowDetails,
        getColSpan,
        handleDropdown,
        applyFilters,
    };
}
