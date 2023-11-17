interface Color {
  [key: string]: string;
}

export const color: Color = {
  white: '#FFFFFF',
  white_10: 'rgba(255, 255, 255, 0.1)',
  black: '#191F28',
  gray_10: '#F7F8F9',
  gray_20: '#E7EAED',
  gray_30: '#D9DEE2',
  gray_40: '#C1C9Cf',
  gray_50: '#A2ABB0',
  gray_60: '#87929A',
  gray_70: '#6F7A83',
  gray_80: '#4A5761',
  blue_10: '#3389FF',
  blue_10_10: 'rgba(51, 137, 255, 0.1)',
  blue_10_40: 'rgba(51, 137, 255, 0.4)',
  blue_20: '#2E78DE',
  red_10: '#FFDDDD',
  red_10_10: 'rgba(255, 106, 106, 0.1)',
  red_20: '#FF6A6A',
  red_30: '#F34F4F',
  green_10: '#E6F9F2',
  green_20: '#02C57E',
  orange_10: '#fef0dc',
  orange_20: '#f59c15',
} as const;

export type ColorType = typeof color;
