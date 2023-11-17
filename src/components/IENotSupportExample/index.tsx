import React from 'react';

import * as S from './IESupport.styled';

import {
  ChromeIcon,
  FirefoxIcon,
  EdgeIcon,
  SafariIcon,
  ErrorIcon,
} from 'assets/icon';

const IESupport = () => {
  const browsers = {
    'Google Chrome': <ChromeIcon />,
    'Mozilla Firefox': <FirefoxIcon />,
    'Microsoft Edge': <EdgeIcon />,
    Safari: <SafariIcon />,
  };

  return (
    <S.IESupport>
      <h1 className="a11y">IE not supported</h1>
      <S.ContentWrapper>
        <ErrorIcon />
        <S.ContentItem>
          <S.Title>Browser not supported</S.Title>
          <S.Desc>
            You&apos;re using a web browser we don&apos;t suppot. <br />
            Please use one of these options to improve your experience.
          </S.Desc>
        </S.ContentItem>
      </S.ContentWrapper>
      <S.BrowserWrapper>
        {Object.entries(browsers).map(([browser, icon]) => (
          <S.BrowserItem key={browser}>
            {icon}
            <span>{browser}</span>
          </S.BrowserItem>
        ))}
      </S.BrowserWrapper>
    </S.IESupport>
  );
};

export default IESupport;
