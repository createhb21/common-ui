export type AuthLevel = 'super' | 'admin';

export interface LoginQueryModel {
  email?: string;
  password?: string;
}

export interface LoginServerModel {
  accessToken: string;
  level: AuthLevel;
  name: string;
  passwordUpdated: string;
  refreshToken: string;
}
export interface TokensServerModel {
  accessToken: string;
  refreshToken: string;
}
