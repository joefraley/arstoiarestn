/**
 * Input Field
 * -----------------------------------------------------------------------------
 * [ ] Error state w/show prop
 * [ ] Valid state w/show prop
 * [ ] Animated label/placeholder
 * [ ] Button on right
 * [ ] Icon on left
 * [ ] Inverted
 * [ ] Support onFocus, onBlur methods
 * [ ] Auto-format on keypress
 */
import React from "react"
import styled from "styled-components/macro"

/**
 * Types
 * -----------------------------------------------------------------------------
 */
interface HTMLInput extends React.HTMLAttributes<HTMLInputElement> {}
interface Props extends HTMLInput {
    /** Unique name for the element */
    readonly name: string

    /** Input value */
    readonly value: string

    /** Label to display above input, and default placeholder */
    readonly label: string

    /** Event when input changes */
    readonly onChange: HTMLInput["onChange"]

    /** Optional placeholder value instead of `label` */
    readonly placeholder?: string
}

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const Input: React.FunctionComponent<Props> = props => {
    /**
     * Component state
     */

    /**
     * Methods
     */

    /**
     * Define values
     */
    const { name, value, label, onChange, placeholder, ...inputProps } = props

    /**
     * Template
     */
    return (
        <div>
            {value && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
            <StyledInput
                type="text"
                value={value}
                onChange={onChange}
                id={name}
                name={name}
                {...inputProps}
                spellCheck={props.spellCheck || false}
                autoCorrect={props.autoCorrect || "off"}
                autoCapitalize={props.autoCapitalize || "off"}
            />
        </div>
    )
}

/**
 * Styles
 * -----------------------------------------------------------------------------
 */
export const StyledLabel = styled.label`
    font-family: ${props => props.theme.typography.fontFamily};
    color: blue;
`
export const StyledInput = styled.input`
    color: ${props => props.theme.colors.purple.main};
    font-family: "Times New Roman";
    border-bottom: 1px solid;
    border-bottom-color: ${props => (props.value ? "red" : "blue")};
`

/**
 * Export component
 * -----------------------------------------------------------------------------
 */
export default Input
