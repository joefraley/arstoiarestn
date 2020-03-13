/**
 * Internationalization
 *
 * Note: i18n init/export at end of file
 *
 * Library Docs:
 * https://www.i18next.com/overview/getting-started
 * https://react.i18next.com/guides/quick-start
 *
 * Google Translate:
 * https://translate.google.com/#view=home&op=translate&sl=en&tl=es
 * -----------------------------------------------------------------------------
 */
import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

/**
 * App Strings
 * -----------------------------------------------------------------------------
 */
const resources = {
    en: {
        translation: {
            base: {
                signOut: "Sign out",
                home: "Home",
                profiles: "Profiles",
                resources: "Resources",
                finances: "Finances",
                connect: "Connect",
                settings: "Settings",
            },
            home: {
                welcome: "Welcome back,\n{{name}}",
                checkNetwork: "Check network",
                researchMedications: "Research medications",
                addToCommunity: "Add to community",
                askANurse: "Ask a nurse",
            },
        },
    },
    es: {
        translation: {
            base: {
                signOut: "Desconectar",
                home: "Hogar",
                profiles: "Perfiles",
                resources: "Recursos",
                finances: "Finanzas",
                connect: "Conectar",
                settings: "Configuraciones",
            },
            home: {
                welcome: "Bienvenido de nuevo,\n{{name}}",
                checkNetwork: "Comprobar red",
                researchMedications: "Medicamentos de investigación",
                addToCommunity: "Agregar a la comunidad",
                askANurse: "Pregúntale a una enfermera",
            },
        },
    },
}

/**
 * Export react-i18n
 * -----------------------------------------------------------------------------
 */
i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: { default: ["en"] },
    })
export default i18n
