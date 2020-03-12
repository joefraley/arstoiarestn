/**
 * Header
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { Button } from "components"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Header: React.FC = props => {
    return (
        <div className="bg-white p-xs text-right">
            <Button
                name="header-account-button"
                variant="link"
                icon="user"
                onPress={() => false}
                className="mr-xxs"
            />
            <Button
                name="header-signout-button"
                variant="secondary"
                label="Sign out"
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
