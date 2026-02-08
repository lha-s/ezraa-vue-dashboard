import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common';
export function baseUtils() {
    function getImage(path) {
        return `/images/${path}`;
    }
    // Formats a number with commas (e.g., 12,345)
    const formatNumber = (value) => {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(Number(value));
    };
    // Formats number with decimals only (e.g., 12345.00)
    const formatDecimalOnly = (value, digits = 2) => {
        return Number(value).toFixed(digits);
    };
    function formatDate(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const last7Days = new Date(today);
    last7Days.setDate(today.getDate() - 7);
    const last30Days = new Date(today);
    last30Days.setDate(today.getDate() - 30);
    const thisMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const thisMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
    function getUserText(userName, value = '') {
        let names = userName.split(' ');
        if (value == 'singleText') {
            return names[0][0];
        }
        else {
            return names.map(name => name[0]).join('');
        }
    }
    function getTextColor(name) {
        let firstLetter = name[0];
        if (firstLetter >= 'A' && firstLetter <= 'E') {
            return 'primary';
        }
        else if (firstLetter >= 'F' && firstLetter <= 'J') {
            return 'success';
        }
        else if (firstLetter >= 'K' && firstLetter <= 'O') {
            return 'warning';
        }
        else if (firstLetter >= 'P' && firstLetter <= 'T') {
            return 'danger';
        }
        else {
            return 'secondary';
        }
    }
    // Date Format
    const dateFormat = (days) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });
    };
    // For time difference
    function formatRemainingTime(ms, day) {
        if (ms <= 0)
            return '00h : 00m : 00s';
        const totalSeconds = Math.floor(ms / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        if (day && days > 0) {
            return `${days}d : ${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
        }
        else {
            const totalHours = Math.floor(totalSeconds / 3600); // full hours including days
            return `${String(totalHours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
        }
    }
    function updateRemainingTimes(details, key, day = false) {
        const now = Date.now();
        return details.map(item => {
            const endDate = item[key] instanceof Date ? item[key].getTime() : new Date(item[key]).getTime();
            const diff = endDate - now;
            return {
                ...item,
                remaining_time: formatRemainingTime(diff, day),
            };
        });
    }
    function titleCase(value) {
        return value.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
    }
    function resetForm(form) {
        const newForm = { ...form };
        Object.keys(newForm).forEach(key => {
            const field = newForm[key];
            if ('type' in field) {
                switch (field.type) {
                    case 'dropdown':
                        newForm[key] = initSelectField();
                        break;
                    case 'checkbox':
                        newForm[key] = initCheckboxField();
                        break;
                    default:
                        newForm[key] = initInputField();
                        break;
                }
            }
            else {
                // fallback: if missing type, default to input
                newForm[key] = initInputField();
            }
        });
        return newForm;
    }
    function assignFormFieldValue(form, formValue) {
        const updatedForm = { ...form };
        Object.keys(updatedForm).forEach(key => {
            const field = updatedForm[key];
            if (!field)
                return;
            const value = formValue[key];
            if ('type' in field) {
                switch (field.type) {
                    case 'dropdown':
                        updatedForm[key] = {
                            selected: value ?? null,
                            errorMessage: '',
                            type: 'dropdown',
                        };
                        break;
                    case 'checkbox':
                        updatedForm[key] = {
                            data: Boolean(value),
                            errorMessage: '',
                            type: 'checkbox',
                        };
                        break;
                    default:
                        updatedForm[key] = {
                            ...field,
                            data: value ?? '',
                        };
                        break;
                }
            }
        });
        return updatedForm;
    }
    function initializeCheckboxList(list) {
        list.forEach(item => {
            if (item.checked) {
                item.model.data = true;
            }
        });
    }
    function calculateAge(date) {
        const dob = date;
        if (!dob)
            return;
        const birthDate = new Date(dob);
        const today = new Date();
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
        if (days < 0) {
            months--;
            const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += prevMonth.getDate();
        }
        if (months < 0) {
            years--;
            months += 12;
        }
        let ageString = '';
        if (years > 0) {
            ageString = `${years} year${years > 1 ? 's' : ''}`;
        }
        else if (months > 0) {
            ageString = `${months} month${months > 1 ? 's' : ''}`;
            if (days > 0)
                ageString += ` and ${days} day${days > 1 ? 's' : ''}`;
        }
        else {
            ageString = `${days} day${days > 1 ? 's' : ''}`;
        }
        return ageString;
    }
    function columnValue(details, field_value, decimal) {
        if (field_value in details) {
            return decimal ? formatDecimalOnly(details[field_value]) : details[field_value];
        }
        return undefined;
    }
    return {
        formatNumber,
        getImage,
        formatDecimalOnly,
        formatDate,
        getUserText,
        getTextColor,
        dateFormat,
        updateRemainingTimes,
        titleCase,
        resetForm,
        assignFormFieldValue,
        initializeCheckboxList,
        calculateAge,
        columnValue,
        today,
        yesterday,
        last7Days,
        last30Days,
        thisMonthStart,
        thisMonthEnd,
        lastMonthStart,
        lastMonthEnd,
    };
}
