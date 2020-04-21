/**
 * Header
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { useTranslation } from "react-i18next"
import { Button, Row } from "components"
import { alignment } from "components/layout/types"

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
        <Row as="header" horizontal={alignment.End} {...props}>
            <Button
                name="header-account-button"
                variant="link"
                icon="bell"
                style={{ flexGrow: 0, padding: "0.5rem" }}
                onClick={() => false}
            />
            <Button
                name="header-account-button"
                variant="link"
                icon="globe"
                onClick={onChangeTranslation}
                style={{ flexGrow: 0, padding: "0.5rem" }}
            />
            <Button
                name="header-signout-button"
                variant="secondary"
                label={t("base.signOut")}
                style={{ flexGrow: 0, padding: "0.5rem" }}
                onClick={() => false}
            />
        </Row>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default Header
