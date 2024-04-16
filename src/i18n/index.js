import i18n from "i18next";

// npm install react-i18next i18next --save
import { initReactI18next } from "react-i18next";

// # if you'd like to detect user language and load translation
// npm install i18next-http-backend i18next-browser-languagedetector --save
import de from './locales/de';
import en from './locales/en';
import fr from './locales/fr';


i18n
// .use(Backend)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    // for all options read: https://www.i18next.com/overview/configuration-options
    resources: {
        de:de,
        en:en,
        fr:fr
    },
    fallbackLng: "de",
    detection: { // languagedetector option
        order: ['querystring', 'htmlTag', 'cookie'],
        lookupQueryString: 'lang', // ?lang=
        lookupCookie: 'i18n_lang' // cookie name
    },
    debug: true,
    saveMissing: true, 
    interpolation: {
        escapeValue: false  
    }
}, function(err) {
    if(err) console.error(err);
});

export default i18n