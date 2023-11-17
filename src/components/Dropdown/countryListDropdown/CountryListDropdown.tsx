import React, { useState, memo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { isEmpty } from 'lodash-es';

import { ArrowIcon } from 'assets/icon';
import useDropdown from '../hooks/useDropdown';
import * as S from '../Dropdown.styled';

export type CountryListDropdownProps = {
  className?: string;
  disabled?: boolean;
  hasErr?: boolean;
  country: { code: string; name: string; dial: string };
  countryArr?: { code: string; name: string; dial: string }[];
  handleSelectCountryWithCode: (code: string) => void;
};

function CountryListDropdown({
  className,
  disabled,
  hasErr,
  country,
  countryArr,
  handleSelectCountryWithCode,
}: CountryListDropdownProps) {
  const id = uuidv4();
  const [selectedOption, setSelectedOption] = useState('LA');

  const handleSelect = (code: string) => {
    setSelectedOption(code);
    handleSelectCountryWithCode(code);
  };

  const { dropdownRef, optionsRef, isOpen, handleOpener, handleClickOption } =
    useDropdown(handleSelect);

  useEffect(() => {
    if (isEmpty(country)) return;

    setSelectedOption(country.code);
  }, [country]);

  return (
    <S.Dropdown ref={dropdownRef} className={className}>
      <S.CustomDropdownBtn
        aria-controls={id}
        aria-expanded={isOpen}
        data-haserr={hasErr}
        disabled={disabled}
        type="button"
        onClick={handleOpener}
      >
        <span>{selectedOption}</span>
        <ArrowIcon />
      </S.CustomDropdownBtn>
      <S.CustomOptionWrapper
        ref={optionsRef}
        aria-hidden={!isOpen}
        id={id}
        isOpen={isOpen}
      >
        <S.Option>
          <S.CustomOptionBtn
            type="button"
            onClick={handleClickOption(country?.code)}
          >
            <S.CountryCode>{country?.code}</S.CountryCode>
            <S.CountryInfo>{`${country?.name} (${country?.dial})`}</S.CountryInfo>
          </S.CustomOptionBtn>
        </S.Option>
        {countryArr
          ?.filter((item) => item.code !== country?.code)
          ?.map(({ code, name, dial }, i) => {
            return (
              <S.CustomOption key={i}>
                <S.CustomOptionBtn
                  type="button"
                  data-selected={selectedOption === code}
                  onClick={handleClickOption(code)}
                >
                  <S.CountryCode>{code}</S.CountryCode>
                  <S.CountryInfo>{`${name} (${dial})`}</S.CountryInfo>
                </S.CustomOptionBtn>
              </S.CustomOption>
            );
          })}
      </S.CustomOptionWrapper>
    </S.Dropdown>
  );
}

export default memo(CountryListDropdown);
