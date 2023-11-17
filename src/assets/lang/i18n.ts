import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from './EN.json';

export const fallbackLng = 'EN';

export const resources = {
  EN: { translation: EN },
} as const;

export const languages = [resources['EN']['translation']] as const;

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'EN',
});

export default i18n;
