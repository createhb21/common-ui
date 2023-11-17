import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import type { Languages } from 'types';
import * as S from './CheckboxBtn.styled';

interface CheckboxBtn {
  disabled?: boolean;
  label?: string;
  isChecked?: boolean;
  handleCheck?: () => void;
}

const CheckboxBtn = ({
  disabled,
  label,
  isChecked,
  handleCheck,
}: CheckboxBtn) => {
  const uuid = uuidv4();
  const { t } = useTranslation();

  return (
    <S.Checkbox>
      <S.CheckboxBtn
        disabled={disabled}
        checked={isChecked}
        type="checkbox"
        readOnly
        id={uuid}
        onChange={handleCheck}
      />
      <S.CustomCheckbox className="label" htmlFor={uuid} />
      {label && <S.Label htmlFor={uuid}>{t(label as Languages)}</S.Label>}
    </S.Checkbox>
  );
};

export default CheckboxBtn;
