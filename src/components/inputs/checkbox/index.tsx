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
    readonly className?: string // className
    readonly label?: string // label text
    readonly checked?: boolean // default checkbox checked state
    readonly inverted?: boolean // background white: inverted = false, background purple: inverted = true
    readonly variant?: string // "primary" | "switch"
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
        `journi-checkbox-${variant}`
    ]
    if (className) {
        classNamesArray.push(`journi-checkbox-${className}`)
    }
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
            <label htmlFor={name}>
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
