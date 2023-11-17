import { css } from "@emotion/react";

import { font } from "./font";
import { color } from "./color";

const mixinBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 2px;
  padding: 0 18px;
`;

const mixinBtn2 = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  border-radius: 4px;
  padding: 0 12px;
`;

export const button = {
  primary: css`
    ${mixinBtn};
    ${font.medium_14};
    color: ${color.white};
    background-color: ${color.blue_10};

    &:not(:disabled):hover {
      background-color: ${color.blue_20};
    }

    &:disabled {
      background-color: ${color.blue_10_40};
    }
  `,

  secondary: css`
    ${mixinBtn};
    ${font.medium_14};
    border: 1px solid ${color.gray_20};
    color: ${color.gray_60};
    background-color: ${color.gray_10};

    &:not(:disabled):hover {
      border: 1px solid ${color.gray_30};
      background-color: ${color.gray_20};
    }

    &:disabled {
      opacity: 0.6;
    }
  `,

  third: css`
    ${mixinBtn};
    ${font.medium_14};
    border: 1px solid ${color.gray_20};
    color: ${color.blue_10};
    background-color: ${color.gray_10};

    &:not(:disabled):hover {
      background-color: ${color.gray_20};
      border: 1px solid ${color.gray_30};
    }

    &:disabled {
      opacity: 0.4;
      background-color: ${color.gray_10};
      border: 1px solid ${color.gray_20};
    }
  `,

  outlined: css`
    ${mixinBtn2};
    ${font.medium_13};
    border: 1px solid ${color.gray_30};
    color: ${color.gray_70};
    background-color: ${color.white};

    &:not(:disabled):hover {
      border: 1px solid ${color.gray_30};
      background-color: ${color.gray_20};
    }

    &:disabled {
      opacity: 0.4;
      background-color: ${color.white};
    }
  `,
  error: css`
    ${mixinBtn};
    ${font.medium_14};
    color: ${color.red_20};
    background-color: ${color.gray_10};
    border: 1px solid ${color.gray_20};

    &:not(:disabled):hover {
      background-color: ${color.red_30};
      background-color: ${color.gray_20};
      border: 1px solid ${color.gray_30};
    }

    &:disabled {
      opacity: 0.4;
      background-color: ${color.gray_10};
      border: 1px solid ${color.gray_20};
    }
  `,

  filled_gray_blue: css`
    ${mixinBtn2};
    ${font.medium_13};
    color: ${color.blue_10};
    background-color: ${color.gray_10};

    &:not(:disabled):hover {
      background-color: ${color.gray_20};
    }

    &:disabled {
      opacity: 0.4;
      background-color: ${color.gray_10};
    }
  `,

  ghost: css`
    ${font.regular_14};
    position: relative;
    padding: 0;
    color: ${color.gray_70};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 4px;
      width: 100%;
      height: 0.5px;
      background-color: ${color.gray_70};
    }

    &:not(:disabled):hover {
      color: ${color.gray_80};

      &::before {
        background-color: ${color.gray_80};
      }
    }

    &:disabled {
      opacity: 0.6;
    }
  `,
  ghost_blue: css`
    ${font.regular_14};
    position: relative;
    padding: 0;
    color: ${color.blue_10};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 2px;
      width: 100%;
      height: 1px;
      background-color: ${color.blue_10};
    }

    &:not(:disabled):hover {
      color: ${color.blue_20};

      &::before {
        background-color: ${color.blue_20};
      }
    }

    &:disabled {
      color: ${color.blue_10_10};

      &::before {
        background-color: ${color.blue_10_10};
      }
    }
  `,

  ghost_red: css`
    ${font.regular_14};
    position: relative;
    padding: 0;
    color: ${color.red_20};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 2px;
      width: 100%;
      height: 1px;
      background-color: ${color.red_20};
    }

    &:not(:disabled):hover {
      color: ${color.red_30};

      &::before {
        background-color: ${color.red_30};
      }
    }

    &:disabled {
      color: ${color.red_10};

      &::before {
        background-color: ${color.red_10};
      }
    }
  `,

  alert: css`
    ${font.medium_15};
    position: relative;
    padding: 0;
    color: ${color.gray_50};

    &:not(:disabled):hover {
      color: ${color.gray_70};

      &::before {
        background-color: ${color.gray_70};
      }
    }

    &:disabled {
      opacity: 0.6;
    }
  `,

  alert_blue: css`
    ${font.medium_15};
    position: relative;
    padding: 0;
    color: ${color.blue_10};

    &:not(:disabled):hover {
      color: ${color.blue_20};

      &::before {
        background-color: ${color.blue_20};
      }
    }

    &:disabled {
      color: ${color.blue_10_10};

      &::before {
        background-color: ${color.blue_10_10};
      }
    }
  `,

  alert_red: css`
    ${font.medium_15};
    position: relative;
    padding: 0;
    color: ${color.red_20};

    &:not(:disabled):hover {
      color: ${color.red_30};

      &::before {
        background-color: ${color.red_30};
      }
    }

    &:disabled {
      color: ${color.red_10};

      &::before {
        background-color: ${color.red_10};
      }
    }
  `,
} as const;

export type BtnTheme = typeof button;
