import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

interface RootProps {
  dow: number;
}

const periodSelectDate = (theme: Theme) => css`
  border-radius: 20px;
  background-color: ${theme.color.blue_10};

  > button {
    color: ${theme.color.white};
  }

  ::after {
    border-radius: 20px;
    background-color: ${theme.color.blue_10_10};
  }
`;

const leftCircle = css`
  border-radius: 20px 0 0 20px;
`;

const rightCircle = css`
  border-radius: 0 20px 20px 0;
`;

const fromSunToTue = (theme: Theme) => css`
  display: block;
  left: 0;
  width: calc(${theme.size.TABLE_CELL_HEIGHT} * 3);
  height: calc(${theme.size.TABLE_CELL_HEIGHT});
  border-radius: calc(${theme.size.TABLE_CELL_HEIGHT} / 2);
  background-color: ${theme.color.blue_10_10};
`;

const fromWedToSat = (theme: Theme) => css`
  display: block;
  left: calc(${theme.size.TABLE_CELL_HEIGHT} * 3);
  width: calc(${theme.size.TABLE_CELL_HEIGHT} * 4);
  height: calc(${theme.size.TABLE_CELL_HEIGHT});
  border-radius: calc(${theme.size.TABLE_CELL_HEIGHT} / 2);
  background-color: ${theme.color.blue_10_10};
`;

const mixInSelectHover = (theme: Theme) => css`
  background-color: ${theme.color.blue_10_10};

  > button {
    border-radius: 20px;
    background-color: ${theme.color.blue_10};
  }
`;

const mixInHoverToday = (theme: Theme) => css`
  border: none;
  border-radius: 0;
  background-color: ${theme.color.blue_10_10};

  > button {
    border: 1px solid ${theme.color.black};
    border-radius: 20px;
  }
`;

export const Root = styled.li<RootProps>`
  ${({ theme, dow }) => css`
    width: 44px;
    height: 44px;

    &:not([data-isthismonth='true']) {
      & > button {
        color: ${theme.color.gray_50};
      }
    }

    &[aria-selected='false'] {
      &[aria-current='date'] {
        border: 1px solid ${theme.color.black};
        border-radius: 50%;
      }
    }

    &[data-status='date'] {
      &[aria-selected='true'] {
        border-radius: 50%;
        background-color: ${theme.color.blue_10};

        & > button {
          color: ${theme.color.white};
        }
      }

      &[aria-selected='false'] {
        &:not([disabled]):hover {
          border-radius: 50%;
          background-color: ${theme.color.blue_10_10};

          &[aria-current='date'] {
            background-color: ${theme.color.gray_10};
          }
        }
      }
    }

    &[data-status='week'] {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        content: '';
        position: absolute;
        width: 44px;
        height: 44px;
      }

      &[aria-selected='false'] {
        &:not([disabled]):hover {
          &[data-weekstatus='current'] {
            ~ div:nth-of-type(${dow + 1}) {
              ${fromWedToSat(theme)};
            }

            ~ div:nth-of-type(${dow + 2}) {
              ${fromSunToTue(theme)};
            }
          }

          &[data-weekstatus='prev'] {
            ~ div:nth-of-type(${dow + 1}) {
              ${fromSunToTue(theme)};
            }

            ~ div:nth-of-type(${dow}) {
              ${fromWedToSat(theme)};
            }
          }
        }
      }

      &[aria-selected='true'] {
        background-color: ${theme.color.blue_10_10};

        &[data-weekidx='0'],
        &[data-weekidx='3'] {
          ${leftCircle};
        }

        &[data-weekidx='2'],
        &[data-weekidx='6'] {
          ${rightCircle};
        }

        &[data-isselectedstartdate='true'] {
          ${periodSelectDate(theme)};

          ::after {
            ${leftCircle};
          }
        }

        &[data-isselectedenddate='true'] {
          ${periodSelectDate(theme)};

          ::after {
            ${rightCircle};
          }
        }
      }
    }

    &[data-status='free'] {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &::after {
        content: '';
        position: absolute;
        width: 44px;
        height: 44px;
      }

      &[aria-selected='true'] {
        background-color: ${theme.color.blue_10_10};

        &[data-weekidx='0'] {
          ${leftCircle};
        }

        &[data-weekidx='6'] {
          ${rightCircle};
        }

        &[aria-current='date'] {
          ${mixInHoverToday(theme)};
        }

        &[data-isselectedstartdate='true'] {
          ${periodSelectDate(theme)};

          ::after {
            ${leftCircle};
          }
        }

        &[data-isselectedenddate='true'] {
          ${periodSelectDate(theme)};

          &[data-ishoverafterdate='true'] {
            ${leftCircle};
            ${mixInSelectHover(theme)};
          }

          &[data-ishoverbeforedate='true'] {
            ${rightCircle};
            ${mixInSelectHover(theme)};
          }

          &[data-isselectedstartdate='false'] {
            ::after {
              ${rightCircle};
            }
          }
        }
      }

      &[aria-selected='false'] {
        &:hover {
          border-radius: 20px;
          background-color: ${theme.color.blue_10_10};
        }

        &[data-ishoverbeforedate='true'] {
          background-color: ${theme.color.blue_10_10};

          &[data-weekidx='0'] {
            ${leftCircle};
          }

          &[data-weekidx='6'] {
            ${rightCircle};
          }

          &[aria-current='date'] {
            ${mixInHoverToday(theme)};
          }

          &[data-ishoverdate='true'] {
            ${leftCircle};
          }
        }

        &[data-ishoverafterdate='true'] {
          background-color: ${theme.color.blue_10_10};

          &[data-weekidx='0'] {
            ${leftCircle};
          }

          &[data-weekidx='6'] {
            ${rightCircle};
          }

          &[aria-current='date'] {
            ${mixInHoverToday(theme)};
          }

          &[data-ishoverdate='true'] {
            ${rightCircle};
          }
        }
      }
    }
  `}
`;

export const Btn = styled.button`
  ${({ theme }) => css`
    ${theme.font.regular_14};
    width: 100%;
    height: 100%;
    color: ${theme.color.black};
    z-index: ${theme.zIndex.CALENDAR};

    &[disabled] {
      color: ${theme.color.gray_50};
    }
  `}
`;
