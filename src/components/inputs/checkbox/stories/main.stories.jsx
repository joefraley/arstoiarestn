import React from "react"
import { action } from "@storybook/addon-actions"
// import { withA11y } from "@storybook/addon-a11y"
import { text, boolean, select, number } from "@storybook/addon-knobs"
import Checkbox from ".."

export default {
    title: "Inputs/Checkbox"
}
export const withText = () => {
    const defaultLabelValue =
        "Yes! Send me emails with tools and personalized tips for my health care journey."
    const value = text('Checkbox Label', defaultLabelValue)

    const inverted = boolean('Inverted', false)

    const checked = boolean('Checked', false)

    const types = ['primary', 'switch']
    const variant = select('Checkbox Type', types, 'primary')

    const width = number('Total Width', 254)

    let style = { padding: "20px" }
    if (inverted) {
        style.backgroundColor = "#64009E"
    }
    return (
        <div style={style}>
            <Checkbox
                name="checkbox1"
                checked={checked}
                variant={variant}
                inverted={inverted}
                width={width}
                onPress={action("button-click")}
                label={value}
            ></Checkbox>
        </div>
    )
}
