import '@emotion/react';
import { theme } from 'style/themes/theme';

type CustomTheme = typeof theme;

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
