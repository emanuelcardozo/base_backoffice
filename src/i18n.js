import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import enJSON from './locale/en.json'
import esJSON from './locale/es.json'

import esCategoriesJSON from 'features/Categories/locale/es.json'
import enCategoriesJSON from 'features/Categories/locale/en.json'
// Features
import esHolasJSON from 'features/Holas/locale/es.json'
import enHolasJSON from 'features/Holas/locale/en.json'
import esPokemonesJSON from 'features/Pokemones/locale/es.json'
import enPokemonesJSON from 'features/Pokemones/locale/en.json'
import esRpuebas33JSON from 'features/Rpuebas33/locale/es.json'
import enRpuebas33JSON from 'features/Rpuebas33/locale/en.json'
import esPruebasJSON from 'features/Pruebas/locale/es.json'
import enPruebasJSON from 'features/Pruebas/locale/en.json'

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

// add more resources here
i18n.addResourceBundle('es', 'features', {
  Holas: esHolasJSON,
})

i18n.addResourceBundle('en', 'features', {
  Holas: enHolasJSON,
})

i18n.addResourceBundle('es', 'features', {
  Pokemones: esPokemonesJSON,
})

i18n.addResourceBundle('en', 'features', {
  Pokemones: enPokemonesJSON,
})

i18n.addResourceBundle('es', 'features', {
  Rpuebas33: esRpuebas33JSON,
})

i18n.addResourceBundle('en', 'features', {
  Rpuebas33: enRpuebas33JSON,
})

i18n.addResourceBundle('es', 'features', {
  Pruebas: esPruebasJSON,
})

i18n.addResourceBundle('en', 'features', {
  Pruebas: enPruebasJSON,
})

export default i18n
