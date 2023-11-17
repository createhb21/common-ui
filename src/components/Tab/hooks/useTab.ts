import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

const useTab = (tabList: { [key: string]: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultTab = Object.keys(tabList)[0];
  const selectedTab = searchParams.get('tab') ?? defaultTab;

  const handleChangeTab = useCallback(
    (tab: string) => () => {
      setSearchParams({ tab });
    },
    [],
  );

  useEffect(() => {
    if (!selectedTab) return;

    const isExistTab = Object.keys(tabList).includes(selectedTab);
    !isExistTab && setSearchParams({ tab: defaultTab });
  }, [selectedTab]);

  return {
    selectedTab,
    handleChangeTab,
  };
};

export default useTab;
