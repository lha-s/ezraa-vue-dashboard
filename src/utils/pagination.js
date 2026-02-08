import { ref } from 'vue';
import { useTable } from '@/stores/table';
export function handlePagination() {
    const { getPager } = useTable();
    let pagination = ref();
    let totalPages = ref();
    let currentPage = ref(1);
    let pageSize = ref(1);
    function paginate() {
        if (totalPages.value) {
            pagination.value = getPager(totalPages.value, currentPage.value, pageSize.value);
        }
    }
    function handlePage(value) {
        if (totalPages.value) {
            const nextPage = currentPage.value + value;
            if (nextPage >= 1 && nextPage <= totalPages.value) {
                currentPage.value = nextPage;
                paginate();
            }
        }
    }
    function setPage(page) {
        currentPage.value = page;
        paginate();
    }
    function setTotalPages(pages, pageItems) {
        totalPages.value = pages;
        pageSize.value = pageItems;
        paginate(); // optional: paginate immediately
    }
    return {
        paginate,
        handlePage,
        setPage,
        setTotalPages,
        pagination,
        currentPage,
        totalPages,
    };
}
