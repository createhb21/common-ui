import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Checkbox = styled.div`
  ${({ theme }) => css`
    ${theme.font.medium_13};

    display: flex;
    align-items: center;
    column-gap: 4px;
    height: 100%;
  `}
`;

export const CheckboxBtn = styled.input`
  ${({ theme }) => css`
    &[type='checkbox'] {
      display: none;
    }

    &[type='checkbox']:checked + .label {
      border: 0;
      background: ${theme.color.blue_10} no-repeat center;
      background-image: url("data:image/svg+xml,%3Csvg width='13' height='8' viewBox='0 0 13 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.83845 6.23353L10.8844 0.192079C11.1407 -0.0640263 11.5548 -0.0640263 11.8111 0.192079C12.0674 0.448184 12.0674 0.861892 11.8111 1.118L5.77163 7.15945L4.98959 7.9409C4.91073 8.0197 4.77273 8.0197 4.69387 7.9409L3.91183 7.15945L0.192223 3.44264C-0.0640745 3.18654 -0.0640745 2.77283 0.192223 2.51672C0.448521 2.26062 0.862541 2.26062 1.11884 2.51672L4.83845 6.23353Z' fill='white'/%3E%3C/svg%3E%0A");
    }

    &[type='checkbox']:disabled + .label {
      background-color: ${theme.color.gray_10};

      :hover {
        border: 1px solid ${theme.color.gray_30};
        cursor: not-allowed;
      }
    }

    &[type='checkbox']:checked:disabled + .label {
      background-color: ${theme.color.gray_10} no-repeat center;
      background-image: url("data:image/svg+xml,%3Csvg width='17' height='16' viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg'%0A%3E%3Crect width='16' height='16' rx='2' fill='%23C1C9CF' /%3E%3Cpath d='M6.83845 10.2335L12.8844 4.19208C13.1407 3.93597 13.5548 3.93597 13.8111 4.19208C14.0674 4.44818 14.0674 4.86189 13.8111 5.118L7.77163 11.1594L6.98959 11.9409C6.91073 12.0197 6.77273 12.0197 6.69387 11.9409L5.91183 11.1594L2.19222 7.44264C1.93593 7.18654 1.93593 6.77283 2.19222 6.51672C2.44852 6.26062 2.86254 6.26062 3.11884 6.51672L6.83845 10.2335Z' fill='white' /%3E%3C/svg%3E%0A");

      :hover {
        border: 1px solid ${theme.color.gray_30};
        cursor: not-allowed;
      }
    }
  `}
`;

export const CustomCheckbox = styled.label`
  ${({ theme }) => css`
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid ${theme.color.gray_30};
    border-radius: 2px;
    z-index: ${theme.zIndex.CHECKBOX};

    :hover {
      border: 1px solid ${theme.color.blue_10};
      cursor: pointer;
    }
  `}
`;

export const Label = styled.label``;
