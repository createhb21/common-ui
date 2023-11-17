import { css } from "@emotion/react";

import { color } from "./color";

export const layout = {
  auth: css`
    display: flex;
    flex-direction: column;
    min-width: 528px;
    padding: 64px;
    border: 1px solid ${color.gray_20};
    background-color: ${color.white};
  `,
} as const;

export type LayoutType = typeof layout;
