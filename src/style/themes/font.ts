import { css } from "@emotion/react";

export const font = {
  regular_12: css`
    font-size: 1.2rem;
    font-weight: 400;
    font-family: NotoSans;
    line-height: 1.33333;
  `,
  regular_13: css`
    font-size: 1.3rem;
    font-weight: 400;
    font-family: NotoSans;
    line-height: 1.53846;
  `,
  regular_14: css`
    font-size: 1.4rem;
    font-weight: 400;
    font-family: NotoSans;
    line-height: 1.57142;
  `,
  regular_15: css`
    font-size: 1.5rem;
    font-weight: 400;
    font-family: NotoSans;
    line-height: 1.6;
  `,
  regular_16: css`
    font-size: 1.6rem;
    font-weight: 400;
    font-family: NotoSans;
    line-height: 1.75;
  `,
  medium_11: css`
    font-size: 1.1rem;
    font-weight: 500;
    font-family: NotoSans;
    line-height: 1.45455;
  `,
  medium_12: css`
    font-size: 1.2rem;
    font-weight: 500;
    font-family: NotoSans;
    line-height: 1.45455;
  `,
  medium_13: css`
    font-size: 1.3rem;
    font-weight: 500;
    font-family: NotoSans;
    line-height: 1.53846;
  `,
  medium_14: css`
    font-size: 1.4rem;
    font-weight: 500;
    font-family: NotoSans;
    line-height: 1.57142;
  `,
  medium_15: css`
    font-size: 1.5rem;
    font-weight: 500;
    font-family: NotoSans;
    line-height: 1.6;
  `,
  medium_16: css`
    font-size: 1.6rem;
    font-weight: 500;
    font-family: NotoSans;
    line-height: 1.625;
  `,
  medium_18: css`
    font-size: 1.8rem;
    font-weight: 500;
    font-family: NotoSans;
    line-height: 1.66666;
  `,
  bold_15: css`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: NotoSans;
    line-height: 1.6;
  `,
  bold_18: css`
    font-size: 1.8rem;
    font-weight: 700;
    font-family: NotoSans;
    line-height: 1.66666;
  `,
  bold_24: css`
    font-size: 2.4rem;
    font-weight: 700;
    font-family: NotoSans;
    line-height: 1.66666;
  `,
} as const;

export type FontType = typeof font;
