import React from "react"
import { action } from "@storybook/addon-actions"
import { text, boolean, select, number } from "@storybook/addon-knobs"
import Checkbox from ".."
import { StylesProp } from "../../../layout/types"

export default {
    title: "Inputs/Checkbox"
}
export const withText = () => {
    const mainGroupName = "Main Group"
    const defaultLabelValue =
        "Yes! Send me emails with tools and personalized tips for my health care journey."
    const value = text("Checkbox Label", defaultLabelValue, mainGroupName)

    const inverted = boolean("Inverted", false, mainGroupName)

    const checked = boolean("Checked", false, mainGroupName)

    const types = ["primary", "switch"]
    const variant = select("Checkbox Type", types, "primary", mainGroupName)

    const options = {
        range: true,
        min: 10,
        max: 1000,
        step: 1,
    }
    const width = number("Total Width", 300, options, "Parent Container")
    const style: StylesProp = { padding: "20px", width: width + "px" }
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
                onChange={action("button-click")}
                label={value}
            />
        </div>
    )
}
