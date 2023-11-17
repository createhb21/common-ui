export const size = {
  HEADER_HEIGHT: "56px",
  NAV_WIDTH: "64px",
  MAIN_WIDTH_PADDING: "40px",
  SECTION_MIN_WIDTH: "1296px",
  SECTION_MAX_WIDTH: "1660px",
  TABLE_CELL_HEIGHT: "40px",
} as const;

export type SizeType = typeof size;
