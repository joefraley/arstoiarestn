/**
 * 404'd
 * -----------------------------------------------------------------------------
 */
import React from "react"
import "./base.scss"

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const FourOhFour: React.FC = () => {
    return (
        <div id="jo-four-oh-four">
            <img src="/img/cat_color.png" alt="Sleepy cat" width="240px" />
            <h1 className="my-xs">404</h1>
            <h5 className="mt-xs">Oops! Could not find this page</h5>
        </div>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default FourOhFour
