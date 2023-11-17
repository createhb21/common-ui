import { css } from "@emotion/react";

import { color } from "./color";

export const scrollbar = css`
  position: relative;
  z-index: 10;
  overflow: hidden;
  @supports not (overflow: overlay) {
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${color.gray_20};
    margin-right: 2px;
    border-radius: 50px;
  }
  @supports not (overflow: overlay) {
    scrollbar-width: thin;
    scrollbar-color: ${color.gray_20} transparent;
  }

  :hover {
    overflow-y: overlay;
  }
`;

export type ScrollTheme = typeof scrollbar;
