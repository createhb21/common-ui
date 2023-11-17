export const zIndex = {
  HEADER: 1000,
  NAV: 100,
  CALENDAR: 11,
  MODAL: 10000,
  TOAST: 10000,
  TABLE_SELECT_ROW: 5,
  CHECKBOX: 10,
  TABLE_ROW_BTN: 10,
} as const;

export type ZIndexType = typeof zIndex;
