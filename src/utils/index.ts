import { initCheckboxField, initInputField, initSelectField } from '@/core/data/common';
import type { TableData, TableDataKey } from '@/types/common';

export function baseUtils() {
  function getImage(path: string) {
    return `/images/${path}`;
  }
  // Formats a number with commas (e.g., 12,345)
  const formatNumber = (value: number | string): string => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number(value));
  };

  // Formats number with decimals only (e.g., 12345.00)
  const formatDecimalOnly = (value: number | string, digits = 2): string => {
    return Number(value).toFixed(digits);
  };

  function formatDate(date: Date): string {
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

  function getUserText(userName: string, value: string = ''): string {
    let names = userName.split(' ');
    if (value == 'singleText') {
      return names[0][0];
    } else {
      return names.map(name => name[0]).join('');
    }
  }

  function getTextColor(name: string) {
    let firstLetter = name[0];

    if (firstLetter >= 'A' && firstLetter <= 'E') {
      return 'primary';
    } else if (firstLetter >= 'F' && firstLetter <= 'J') {
      return 'success';
    } else if (firstLetter >= 'K' && firstLetter <= 'O') {
      return 'warning';
    } else if (firstLetter >= 'P' && firstLetter <= 'T') {
      return 'danger';
    } else {
      return 'secondary';
    }
  }

  // Date Format
  const dateFormat = (days: number) => {
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
  function formatRemainingTime(ms: number, day: boolean): string {
    if (ms <= 0) return '00h : 00m : 00s';

    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (day && days > 0) {
      return `${days}d : ${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
    } else {
      const totalHours = Math.floor(totalSeconds / 3600); // full hours including days
      return `${String(totalHours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
    }
  }

  function updateRemainingTimes<T extends Record<K, string | Date>, K extends keyof T>(details: T[], key: K, day: boolean = false): (T & { remaining_time: string })[] {
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

  function titleCase(value: string) {
    return value.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  }
  function resetForm<T extends Record<string, unknown>>(form: T): T {
    const newForm = { ...form };

    (Object.keys(newForm) as Array<keyof T>).forEach(key => {
      const field = newForm[key] as Record<string, unknown>;

      if ('type' in field) {
        switch (field.type) {
          case 'dropdown':
            newForm[key] = initSelectField() as T[keyof T];
            break;
          case 'checkbox':
            newForm[key] = initCheckboxField() as T[keyof T];
            break;
          default:
            newForm[key] = initInputField() as T[keyof T];
            break;
        }
      } else {
        // fallback: if missing type, default to input
        newForm[key] = initInputField() as T[keyof T];
      }
    });

    return newForm;
  }
  function assignFormFieldValue<T extends Record<string, unknown>>(form: T, formValue: Record<string, unknown>): T {
    const updatedForm = { ...form };

    (Object.keys(updatedForm) as Array<keyof T>).forEach(key => {
      const field = updatedForm[key] as Record<string, unknown> | undefined;
      if (!field) return;

      const value = formValue[key as string];

      if ('type' in field) {
        switch (field.type) {
          case 'dropdown':
            updatedForm[key] = {
              selected: value ?? null,
              errorMessage: '',
              type: 'dropdown',
            } as T[keyof T];
            break;

          case 'checkbox':
            updatedForm[key] = {
              data: Boolean(value),
              errorMessage: '',
              type: 'checkbox',
            } as T[keyof T];
            break;

          default:
            updatedForm[key] = {
              ...field,
              data: value ?? '',
            } as T[keyof T];
            break;
        }
      }
    });

    return updatedForm;
  }

  function initializeCheckboxList<T extends { checked: boolean; model: { data: boolean } }>(list: T[]) {
    list.forEach(item => {
      if (item.checked) {
        item.model.data = true;
      }
    });
  }

  function calculateAge(date: string) {
    const dob = date;
    if (!dob) return;

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
    } else if (months > 0) {
      ageString = `${months} month${months > 1 ? 's' : ''}`;
      if (days > 0) ageString += ` and ${days} day${days > 1 ? 's' : ''}`;
    } else {
      ageString = `${days} day${days > 1 ? 's' : ''}`;
    }

    return ageString;
  }
  function columnValue(details: TableData, field_value: TableDataKey, decimal?: boolean) {
    if (field_value in details) {
      return decimal ? formatDecimalOnly(details[field_value as keyof typeof details]) : details[field_value as keyof typeof details];
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
