import type { CardToggleOptions, Color } from '@/types/common';

export const dayFilterOptions: CardToggleOptions[] = [
  {
    id: 1,
    title: 'Today',
  },
  {
    id: 2,
    title: 'Tomorrow',
  },
  {
    id: 3,
    title: 'Yesterday',
  },
];

export const timeFilterOptions: CardToggleOptions[] = [
  {
    id: 1,
    title: 'Day',
  },
  {
    id: 2,
    title: 'Month',
  },
  {
    id: 3,
    title: 'Year',
  },
];

export const monthFilterOptions: CardToggleOptions[] = [
  {
    id: 1,
    title: 'This Month',
  },
  {
    id: 2,
    title: 'Previous Month',
  },
  {
    id: 3,
    title: 'Last 3 Months',
  },
  {
    id: 4,
    title: 'Last 6 Months',
  },
];

export const dateRangeFilter: CardToggleOptions[] = [
  {
    id: 1,
    title: 'Today',
  },
  {
    id: 2,
    title: 'Yesterday',
  },
  {
    id: 3,
    title: 'This Week',
  },
  {
    id: 4,
    title: 'This Month',
  },
  {
    id: 5,
    title: 'Previous Month',
  },
];

export const periodFilterOptions: CardToggleOptions[] = [
  {
    id: 1,
    title: 'Today',
  },
  {
    id: 2,
    title: 'Yesterday',
  },
  {
    id: 3,
    title: 'This Week',
  },
];

export const timeRangeFilterOptions: CardToggleOptions[] = [
  {
    id: 1,
    title: '1H',
  },
  {
    id: 2,
    title: '1D',
  },
  {
    id: 3,
    title: '1W',
  },
  {
    id: 4,
    title: '1M',
  },
  {
    id: 5,
    title: '1Y',
  },
];

export const frequencyFilterOptions: CardToggleOptions[] = [
  {
    id: 1,
    title: 'Weekly',
  },
  {
    id: 2,
    title: 'Monthly',
  },
  {
    id: 3,
    title: 'Yearly',
  },
];

export const simpleDateFilterOptions: CardToggleOptions[] = [
  {
    id: 1,
    title: 'Today',
  },
  {
    id: 2,
    title: 'Yesterday',
  },
  {
    id: 3,
    title: 'Last Month',
  },
];

export const classLevelFilterOptions: CardToggleOptions[] = [
  {
    id: 1,
    title: 'Class 9',
  },
  {
    id: 2,
    title: 'Class 10',
  },
  {
    id: 3,
    title: 'Class 11',
  },
  {
    id: 4,
    title: 'Class 12',
  },
];

export const primaryColor: string = localStorage.getItem('--theme-default') || '#7366FF';
export const secondaryColor: string = localStorage.getItem('--theme-secondary') || '#838383';
export const successColor: string = localStorage.getItem('success') || '#65c15c';

export function initInputField() {
  return {
    data: '',
    errorMessage: '',
  };
}

export function initSelectField() {
  return {
    selected: null,
    data: '',
    selectedItems: [],
    errorMessage: '',
    type: 'dropdown',
  };
}

export function initCheckboxField() {
  return {
    data: false,
    errorMessage: '',
    type: 'checkbox',
  };
}

export const colors: Color[] = [{ color: 'primary' }, { color: 'secondary' }, { color: 'success' }, { color: 'danger' }, { color: 'warning' }, { color: 'info' }, { color: 'dark' }];
