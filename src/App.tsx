import IENotSupportExample from 'components/IENotSupportExample';
import { browserInfo } from 'utils/browserName';
import { globalStyles, theme } from 'style';
import { Global, ThemeProvider } from '@emotion/react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { deleteConsole } from 'utils/deleteConsole';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

function App() {
  deleteConsole();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {browserInfo() === 'MS IE' ? (
        <IENotSupportExample />
      ) : (
        // <PaginationExample />
        <IENotSupportExample />
      )}
    </ThemeProvider>
  );
}

export default App;
