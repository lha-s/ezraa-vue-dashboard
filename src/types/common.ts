export interface CardToggleOption {
  id: number;
  title: string;
}

export interface TableConfigs {
  columns: TableColumn[];
  row_action?: TableRows[];
  data: TableData[];
}

export interface SelectField {
  selected: Select | null;
  data: string;
  selectedItems: Select[];
  errorMessage: string;
  type: string;
}

export interface TableColumn {
  title: string;
  field_value: TableDataKey;
  sortable_key?: string;
  sort?: boolean;
  type?: string;
  template?: string;
  class?: string;
  decimal_number?: boolean;
  text?: string;
  icon_field?: string;
  hide_column?: boolean;
}

export interface TableRows {
  label: string;
  action_to_perform?: string;
  icon?: string;
  path?: string;
  modal?: boolean;
  model_text?: string;
  type?: string;
  class?: string;
}

export interface TableClickedAction {
  action_to_perform?: string;
  data: TableData;
  value?: string;
}

export interface columnColors {
  [key: string]: string;
}

export interface Pagination {
  total_items: number;
  current_page: number;
  page_size: number;
  total_pages: number;
  start_page: number;
  end_page: number;
  start_index: number;
  end_index: number;
  pages: number[];
}

export interface CardToggleOptions {
  id: number;
  title: string;
}

export interface Tabs {
  id: number;
  title: string;
  value: string;
  icon?: string;
  tag?: string | number;
}

export interface PageSizeOptions {
  title: number;
  value: number;
  selected?: boolean;
}

export interface Profile {
  name: string;
  profile?: string;
  url?: string;
}

declare global {
  interface Window {
    navigate?: () => void;
    copyKey?: (key: string) => void;
  }
}

export interface Select {
  value: string | number;
  label: string;
  profile?: string;
  data?: Select[];
}

export interface InputField {
  data: string;
  errorMessage: string;
}

export interface InputProps {
  formSubmitted?: boolean;
  inputId?: string;
  modelValue?: InputField;
  errorMessage?: string;
  class?: string;
  placeholder?: string;
  inputType?: string;
  required?: boolean;
  minLength?: number;
  rows?: number;
  multiple?: boolean;
  helperText?: string;
  disabled?: boolean;
  tooltipValidation?: boolean;
  browserValidation?: boolean;
  animation?: boolean;
  datalist?: Select[];
  maxlength?: number;
  isPlaceholder?: boolean;
  showLengthBadge?: boolean;
  formatValue?: boolean;
  formatFunction?: Function | null;
  minDate?: Date;
  maxDate?: Date;
}

export interface CardProps {
  cardClass?: string;
  cardType?: string;
  headerTitle?: string;
  border?: boolean;
  padding?: boolean;
  header?: string;
  dropdownType?: string;
  options?: CardToggleOptions[];
  rightSideDetails?: boolean;
  headerClass?: string;
  sortDescription?: string;
  buttonText?: string;
  path?: string;
  cardBodyClass?: string;
  dropdownClass?: string;
}

export interface TableProps {
  tableConfig: TableConfigs;
  hasCheckbox?: boolean;
  pageSize?: number;
  paginateDetails?: boolean;
  showPaginate?: boolean;
  tableClass?: string;
  search?: boolean;
  pagination?: boolean;
  selectedRows?: boolean;
  rowDetails?: boolean;
  dateFilter?: boolean;
  downloadReports?: boolean;
  searchPlaceholder?: string;
}

export interface PaginateProps {
  total: number;
  paginate: Pagination;
  paginateDetails: boolean;
  selectedItems: number;
  selectedRows: boolean;
}

export interface ModalProps {
  title?: string;
  modalOpen: boolean;
  sizeClass?: string;
  contentClass?: string;
  modalCentered?: boolean;
  staticBackdrop?: boolean;
  dialogClass?: string;
}

export interface CheckboxField {
  data: boolean;
  errorMessage: string;
  indeterminate?: boolean;
  type: string;
}

export interface Color {
  color: string;
}

// Simplified: use generic Record types instead of massive union types
export type TableData = { id: number } & Record<string, unknown>;

export type TableDataKey = string;

export interface ValidationStatus {
  errorMessage: string;
  valid: boolean;
}

export interface CheckboxProps {
  label?: string;
  formSubmitted?: boolean;
  inputId?: string;
  modelValue?: CheckboxField;
  errorMessage?: string;
  class?: string;
  required?: boolean;
  helperText?: string;
  browserValidation?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  customizeCheckbox?: boolean;
  labelClass?: string;
}

export interface InputFieldProps {
  formSubmitted?: boolean;
  inputId?: string;
  modelValue?: InputField;
  errorMessage?: string;
  class?: string;
  placeholder?: string;
  inputType?: string;
  required?: boolean;
  minLength?: number;
  rows?: number;
  multiple?: boolean;
  helperText?: string;
  disabled?: boolean;
  tooltipValidation?: boolean;
  browserValidation?: boolean;
  animation?: boolean;
  datalist?: Select[];
  maxlength?: number;
  isPlaceholder?: boolean;
  showLengthBadge?: boolean;
  formatValue?: boolean;
  formatFunction?: Function | null;
  minDate?: Date;
  maxDate?: Date;
}

export interface SelectProps {
  modelValue: SelectField;
  options: Select[];
  placeholder?: string;
  displayKey?: keyof Select;
  getValueKey?: keyof Select;
  multiSelect?: boolean;
  required?: boolean;
  formSubmitted?: boolean;
  disableClearButton?: boolean;
  errorMessage?: string;
  tooltipValidation?: boolean;
  class?: string;
  isPlaceholder?: boolean;
  disabled?: boolean;
  showOptions?: boolean;
}

export interface PaginationProps {
  disable?: boolean;
  color: string;
  alignmentClass?: string;
  class?: string;
  type?: string;
  sizeClass?: string;
  totalPages?: number;
  pageSize?: number;
}

export interface DateConfig {
  inline: boolean;
  dateFormat: string;
  mode: string;
  wrap: boolean;
}

export interface FilterDate {
  start_date: string;
  to_date: string;
}

export interface TableFilter {
  search: string;
  sort: string;
  page: number;
  pageSize: number;
  date: FilterDate;
}

export interface TableState {
  tableRecords: TableData[];
  selected: number[];
  selectedOpenRows: number[];
  paginate: Pagination;
  pageNo: number;
  sortableKey: string;
  searchText: string;
  dateDropdownOpen: boolean;
  selectedDate: string;
  selectedValue: string;
  date: Date | null;
  config: DateConfig;
  filter: TableFilter;
}

export interface Breadcrumb {
  text: string;
  subText?: string;
}
