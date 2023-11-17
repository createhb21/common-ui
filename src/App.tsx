import IENotSupportExample from 'components/IENotSupport';
import { browserInfo } from 'utils/browserName';
import { globalStyles, theme } from 'style';
import { Global, ThemeProvider } from '@emotion/react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { deleteConsole } from 'utils/deleteConsole';
import { RecoilRoot } from 'recoil';
import { Toast } from 'components';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function App() {
  deleteConsole();

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Toast />
        {browserInfo() === 'MS IE' ? (
          <IENotSupportExample />
        ) : (
          // <PaginationExample />
          <IENotSupportExample />
        )}
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
