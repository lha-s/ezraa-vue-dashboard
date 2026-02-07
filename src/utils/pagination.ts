import { ref } from 'vue';

import { useTable } from '@/stores/table';
import type { Pagination } from '@/types/common';

export function handlePagination() {
  const { getPager } = useTable();

  let pagination = ref<Pagination>();
  let totalPages = ref<number>();
  let currentPage = ref<number>(1);
  let pageSize = ref<number>(1);

  function paginate() {
    if (totalPages.value) {
      pagination.value = getPager(totalPages.value, currentPage.value, pageSize.value);
    }
  }

  function handlePage(value: number) {
    if (totalPages.value) {
      const nextPage = currentPage.value + value;

      if (nextPage >= 1 && nextPage <= totalPages.value) {
        currentPage.value = nextPage;
        paginate();
      }
    }
  }

  function setPage(page: number) {
    currentPage.value = page;
    paginate();
  }

  function setTotalPages(pages: number, pageItems: number) {
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
