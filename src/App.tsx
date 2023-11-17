import IENotSupportExample from 'components/IENotSupportExample';
import { browserInfo } from 'utils/browserName';
import { globalStyles, theme } from 'style';
import { Global, ThemeProvider } from '@emotion/react';

function App() {
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
