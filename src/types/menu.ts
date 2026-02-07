export interface Menu {
  main_title?: string;
  title?: string;
  icon?: string;
  path?: string;
  type?: string;
  active?: boolean;
  badge?: boolean;
  badge_value?: string;
  badge_color?: string;
  level?: number;
  bookmark?: boolean;
  children?: Menu[];
  pined?: boolean;
  id?: string;
}

export interface SearchState {
  flip: boolean;
  text: string;
  menu: Menu[];
  items: Menu[];
  bookmarkItems: Menu[];
  searchResult: boolean;
  searchResultEmpty: boolean;
}

export interface MenuState {
  menuItem: Menu[];
  leftArrow: boolean;
  rightArrow: boolean;
  pinedItem: Menu[];
}
