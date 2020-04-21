import React from "react"
import { action } from "@storybook/addon-actions"
import * as Knobs from "@storybook/addon-knobs"
import requireContext from "require-context.macro"
import Button from ".."

export default { title: "Inputs/Button" }
export const withText = () => (
    <Button name="button" onClick={action("button-click")}>
        Hello Button
    </Button>
)

const findIcons = () => {
    let iconNames = []
    const icons = requireContext("components/icon/icons", true, /\.js$/)
    icons.keys().forEach(path => {
        iconNames.push(path.split("./")[1].match(/.+(?=\.)/gi)[0])
    })

    return iconNames.filter(path => !path.includes("index"))
}

const icons = findIcons()

export const playground = () => {
    const name = Knobs.text("name", "")
    const label = Knobs.text("label", "")
    const title = Knobs.text("title", "")
    const variant = Knobs.select(
        "variant",
        ["primary", "secondary", "link", "content"],
        "primary",
    )
    const size = Knobs.select("size", ["small", "medium", "large"], "medium")
    const icon = Knobs.select("icon", icons, icons[0])
    const inverted = Knobs.boolean("inverted", false)

    return (
        <Button
            icon={icon}
            inverted={inverted}
            label={label}
            name={name}
            size={size}
            title={title}
            variant={variant}
        />
    )
}
