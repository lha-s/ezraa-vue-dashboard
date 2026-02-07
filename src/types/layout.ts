interface LayoutConfig {
  settings: {
    layout_type: string;
    direction: string;
    layout_version: string;
    sidebar_type: string;
    icon: string;
    layout: string;
    darkMode: boolean;
  };
  color: {
    primary: string;
    secondary: string;
  };
}

export interface LayoutState {
  isLanguage: boolean;
  fullScreen: boolean;
  isSearchOpen: boolean;
  closeSidebar: boolean;
  margin: number;
  scrollMargin: number;
  config: LayoutConfig;
}

export interface Layout {
  id: number;
  title: string;
  image: string;
  slug: string;
}
