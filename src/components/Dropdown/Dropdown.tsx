import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'react-i18next';

import { ArrowIcon } from 'assets/icon';
import type { Languages } from 'types';
import useDropdown from './hooks/useDropdown';
import * as S from './Dropdown.styled';

interface DropdownProps {
  className?: string;
  disabled?: boolean;
  optionArr: { [key: string]: string }[];
  placeholder?: string;
  selectedOption: string;
  type?: 'default' | 'address';
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  handleSelect: (value: string) => void;
}

const Dropdown = ({
  className,
  disabled,
  optionArr,
  placeholder = '',
  selectedOption,
  type = 'default',
  Icon = ArrowIcon,
  handleSelect,
}: DropdownProps) => {
  const { dropdownRef, optionsRef, isOpen, handleOpener, handleClickOption } =
    useDropdown(handleSelect);
  const id = uuidv4();

  const { t } = useTranslation();

  return (
    <S.Dropdown ref={dropdownRef} className={className}>
      <S.DropdownBtn
        aria-controls={id}
        aria-expanded={isOpen}
        disabled={disabled}
        type="button"
        onClick={handleOpener}
      >
        {selectedOption ? (
          <span>{t(selectedOption as Languages)}</span>
        ) : (
          <S.Placeholder>{t(placeholder as Languages)}</S.Placeholder>
        )}

        <Icon />
      </S.DropdownBtn>
      <S.OptionWrapper
        ref={optionsRef}
        aria-hidden={!isOpen}
        id={id}
        isOpen={isOpen}
      >
        {optionArr.map(({ key, option }, i) => (
          <S.Option key={i}>
            <S.OptionBtn
              data-selected={selectedOption === option}
              status={type}
              type="button"
              onClick={handleClickOption(key)}
            >
              {t(option as Languages)}
              <S.CustomCheckboxIcon />
            </S.OptionBtn>
          </S.Option>
        ))}
      </S.OptionWrapper>
    </S.Dropdown>
  );
};

export default Dropdown;
