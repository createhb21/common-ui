export type ClientDetailType = 'Profile' | 'Name' | 'Mobile' | 'Email';

export interface UpdateMobileForm {
  phoneNum: string;
  verifyCode: string;
}
