/**
 * Not authorized
 * -----------------------------------------------------------------------------
 */
import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "components"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const NotAuthorized: React.FC = () => {
    const history = useHistory()
    return (
        <div className="text-center pt-lg">
            <img src="/img/cat_gray.png" alt="Sleepy cat" width="200px" />
            <h2 className="my-xs">Feature not available</h2>
            <Button
                name="not-available-go-back-button"
                label="Go back"
                onPress={() => history.goBack()}
            />
        </div>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default NotAuthorized
