import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Button, Row } from "components"
import { alignment } from "components/layout/types"

const Header: React.FC = props => {
    const { t, i18n } = useTranslation()

    const [language, setLanguage] = React.useState<string>("en-Us")

    const onChangeTranslation = () => {
        // Toggle between English/Spanish
        // TODO: Make this a dropdown - consult UX
        const newLanguage = language === "en-Us" ? "es-Us" : "en-Us"
        setLanguage(newLanguage)
        i18n.changeLanguage(newLanguage)
    }

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

export default styled(Header)`
    padding: ${({ theme }) => theme.spacing.xxs};
    background: ${({ theme }) => theme.palette.common.white};
`
