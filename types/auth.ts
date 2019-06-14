export interface Tokens {
  token: string;
  refresh: string;
}

export interface User {
  id: number;
  name: string;
  nickname: string;
  countryCode: string;
  notificationEmails: number;
  preferredLanguage: string;
  prefersReducedMotion: boolean;
  role: number;
  timezone: string;
  twoFactorEnabled: boolean;
  email: string;
}

export interface RootState {
  isAuthenticated: boolean;
  tokens: Tokens;
  user?: User;
  loading: boolean;
  activeOrganization?: any;
  notifications: any[];
}
