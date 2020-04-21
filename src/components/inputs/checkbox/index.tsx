/**
 * Checkbox
 *
 * -----------------------------------------------------------------------------
 */
import React from "react"
import "./styles.scss"

/**
 * Types
 * -----------------------------------------------------------------------------
 */
interface Props extends React.HTMLAttributes<HTMLCollection> {
    readonly onChange: VoidFunction
    readonly name: string // element name for analytics/testing
    readonly className: string // className
    readonly label?: string // label text
    readonly width?: number // a number for the width of the entire container
    readonly checked?: boolean // default checkbox checked state
    readonly inverted?: boolean // background white: inverted = false, background purple: inverted = true
    readonly variant?: "primary" | "switch"
}

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Checkbox: React.FunctionComponent<Props> = props => {
    /**
     * Destructured default props
     */
    const {
        onChange,
        name,
        className,
        label = "",
        checked = false,
        inverted = false,
        width = 254,
        variant = "primary",
    } = props

    /**
     * Define variant styles, variants are one of the following
     * primary: *default* typical purple checkbox with black text 'primary'
     * inverted: white checkbox with white text
     *
     */
    const classNamesArray: Array<string> = [
        "journi-checkbox",
        `journi-checkbox-${variant}`,
        className,
    ]
    if (inverted) {
        classNamesArray.push("journi-checkbox-inverted")
    }

    const classNames = classNamesArray.join(" ")

    /**
     * Template
     */
    return (
        <div className={classNames}>
            <input
                id={name}
                data-test={name}
                checked={checked}
                type="checkbox"
                onChange={onChange}
            />
            <label htmlFor={name} style={{ width: width + "px" }}>
                {label && label}
            </label>
        </div>
    )
}

/**
 * Export component
 * -----------------------------------------------------------------------------
 */
export default Checkbox
