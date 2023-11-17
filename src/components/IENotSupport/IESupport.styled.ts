import styled from '@emotion/styled';
import { css } from '@emotion/react';

const flex_mixin = css`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const IESupport = styled.section`
  ${({ theme }) => css`
    ${flex_mixin};

    width: 100%;
    height: 100vh;
    background-color: ${theme.color.white};
  `}
`;

export const ContentWrapper = styled.div`
  ${flex_mixin};
`;

export const ContentItem = styled.dl`
  ${flex_mixin};
  margin: 10px 0 80px;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    ${theme.font.bold_18};

    margin-bottom: 6px;
    color: ${theme.color.black};
  `}
`;

export const Desc = styled.p`
  ${({ theme }) => css`
    ${theme.font.regular_14};

    color: ${theme.color.gray_70};
    text-align: center;
    white-space: pre-line;
  `}
`;

export const BrowserWrapper = styled.div`
  display: -ms-flexbox;
  display: flex;
`;

export const BrowserItem = styled.div`
  ${({ theme }) => css`
    ${flex_mixin}

    :not(:last-of-type) {
      margin-right: 72px;
    }

    & > span {
      ${theme.font.medium_13};

      margin-top: 20px;
      color: ${theme.color.gray_80};
    }
  `}
`;
