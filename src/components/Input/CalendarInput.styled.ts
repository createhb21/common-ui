import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

export const Root = styled.div`
  position: relative;
  width: 438px;
`;

export const calendarInput = (theme: Theme) => css`
  height: 44px;
  border: 0;
  padding: 0 44px 0 12px;
  background-color: ${theme.color.white};

  &::placeholder {
    color: ${theme.color.gray_50};
  }
`;

export const calendarDialogBtn = css`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-right: 20px;
`;
