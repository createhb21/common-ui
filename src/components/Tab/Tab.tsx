import React from 'react';
import { useTranslation } from 'react-i18next';

import type { Languages } from 'types';
import useTab from './hooks/useTab';
import * as S from './Tab.styled';

interface TabProps {
  className?: string;
  tabList: { [key: string]: string };
  render: { [key: string]: React.ReactNode };
}

const Tab = ({ className, tabList, render }: TabProps) => {
  const { t } = useTranslation();

  const { selectedTab, handleChangeTab } = useTab(tabList);

  return (
    <section>
      <S.TabBtnWrapper role="tablist" className={className}>
        {Object.entries(tabList).map(([key, label]) => (
          <li key={key} role="none">
            <S.TabBtn
              role="tab"
              type="button"
              aria-controls={label}
              aria-selected={selectedTab === key}
              disabled={!render[key]}
              onClick={handleChangeTab(key)}
            >
              {t(label as Languages)}
            </S.TabBtn>
          </li>
        ))}
      </S.TabBtnWrapper>
      <div id={selectedTab} role="tabpanel" aria-labelledby={selectedTab}>
        {render[selectedTab]}
      </div>
    </section>
  );
};

export default Tab;
