import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enJSON from './locale/en.json'
import esJSON from './locale/es.json'
// Features
import esCategoriesJSON from 'features/{{cookiecutter.resource_name_plural}}/locale/es.json'
import enCategoriesJSON from 'features/{{cookiecutter.resource_name_plural}}/locale/en.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: { ...esJSON },
      en: { ...enJSON },
    }, // Where we're gonna put translations' files
    fallbackLng: 'es', // Default language

    // have a common namespace used around the full app
    defaultNS: 'common',
    fallbackNS: 'common',

    interpolation: {
      escapeValue: false, // false prevents to html escape for special characters
    },
  })

i18n.services.formatter.add('lowercase', (value) => {
  return value.toLowerCase()
})

i18n.addResourceBundle('en', 'features', {
  Categories: enCategoriesJSON,
})

i18n.addResourceBundle('es', 'features', {
  Categories: esCategoriesJSON,
})

export default i18n
