/**
 * Header
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { useTranslation } from "react-i18next"
import { Button } from "components"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Header: React.FC = props => {
    /**
     * Hooks
     */
    const { t, i18n } = useTranslation()

    /**
     * Component State
     */
    const [language, setLanguage] = React.useState<string>("en-Us")

    /**
     * Methods
     */
    const onChangeTranslation = () => {
        // Toggle between English/Spanish
        // TODO: Make this a dropdown - consult UX
        const newLanguage = language === "en-Us" ? "es-Us" : "en-Us"
        setLanguage(newLanguage)
        i18n.changeLanguage(newLanguage)
    }

    /**
     * Template
     */
    return (
        <div className="bg-white p-xs text-right">
            <Button
                name="header-account-button"
                variant="link"
                icon="bell"
                onPress={() => false}
            />
            <Button
                name="header-account-button"
                variant="link"
                icon="globe"
                onPress={onChangeTranslation}
                className="mr-xxs"
            />
            <Button
                name="header-signout-button"
                variant="secondary"
                label={t("base.signOut")}
                onPress={() => false}
            />
        </div>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Header
