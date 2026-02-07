export interface Language {
  id: number;
  name: string;
  code: 'en' | 'ae';
  icon: string;
  country_code?: string;
  active?: boolean;
}

export interface Notification {
  id: number;
  message: string;
  border_color: string;
}
export interface SocialLink {
  id: number;
  icon: string;
  url: string;
}

export interface Profile {
  id: number;
  title: string;
  icon: string;
  path: string;
}
