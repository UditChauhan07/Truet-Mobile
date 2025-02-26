import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my application",
      description: "This is a multi-language supported app.",
      changeLanguage: "Change Language",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue dans mon application",
      description: "Ceci est une application multilingue.",
      changeLanguage: "Changer de langue",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi aplicación",
      description: "Esta es una aplicación con soporte multilingüe.",
      changeLanguage: "Cambiar idioma",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
