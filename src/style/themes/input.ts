import { css } from '@emotion/react';

import { font } from 'style/themes/font';
import { color } from 'style/themes/color';
import { boxShadow } from 'style/themes/boxShadow';

export const mixinInput = css`
  ${font.regular_14};
  width: 100%;
  height: 40px;
  border: 1px solid ${color.gray_30};
  padding: 9px 12px;

  &::placeholder {
    ${font.regular_14};
    color: ${color.gray_40};
  }

  &:not(:disabled):not([aria-invalid='true']):hover {
    border-color: ${color.blue_10};
  }

  &:focus {
    border: 1px solid ${color.blue_10};
  }

  &[aria-invalid='true'] {
    border-color: ${color.red_20};
  }
`;

export const input = {
  default: css`
    ${mixinInput}
    color: ${color.black};
  `,

  icon: css`
    ${mixinInput}
    padding: 9px 48px 9px 12px;

    & + button {
      position: absolute;
      top: 8px;
      right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
    }
  `,

  search48: css`
    ${font.regular_15};
    width: 100%;
    height: 48px;
    border-radius: 100px;
    border: 1px solid ${color.gray_30};
    padding: 0 32px 0 24px;
    background-color: ${color.white};
    box-shadow: ${boxShadow.input};
    transition: 0.3s;

    &::placeholder {
      ${font.regular_14};
      color: ${color.gray_40};
    }

    &:focus {
      border: 2px solid ${color.blue_20};
    }

    @media (hover: hover) {
      &:not(:disabled):hover {
        border-width: 2px;
      }
    }
  `,
  search56: css`
    ${font.regular_16};
    width: 100%;
    height: 56px;
    border-radius: 100px;
    border: 1px solid ${color.gray_30};
    padding: 0 40px 0 28px;
    background-color: ${color.white};
    box-shadow: ${boxShadow.input};
    transition: 0.3s;

    &::placeholder {
      color: ${color.gray_50};
    }

    &:focus {
      border: 2px solid ${color.blue_20};
    }

    @media (hover: hover) {
      &:not(:disabled):hover {
        border-width: 2px;
      }
    }
  `,
  primary: css`
    ${font.regular_15};
    width: 100%;
    height: 52px;
    border: 1px solid ${color.gray_20};
    padding: 9px 12px;
    transition: 0.3s;

    &::placeholder {
      ${font.regular_14};
      color: ${color.gray_40};
    }

    @media (hover: hover) {
      &:not(:disabled):hover {
        border-color: ${color.blue_10};
      }
    }

    &:focus {
      border-color: ${color.blue_20};
    }

    &[aria-invalid='true'] {
      border-color: ${color.red_10};
    }

    &[readonly] {
      background-color: ${color.gray_40};
    }

    &:disabled {
      border-color: ${color.gray_20};
      color: ${color.gray_70};
      background-color: ${color.gray_10};
      cursor: not-allowed;
    }
  `,
} as const;

export type InputType = typeof input;
