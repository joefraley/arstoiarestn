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
                name="settings-button"
                variant="secondary"
                icon="settings"
                onPress={() => false}
                className="mr-xxs"
            />
            <Button
                name="logout-button"
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
