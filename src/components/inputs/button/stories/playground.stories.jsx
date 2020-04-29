import React from "react"
import { action } from "@storybook/addon-actions"
import * as Knobs from "@storybook/addon-knobs"
import requireContext from "require-context.macro"
import { labels } from "constants/storybook"
import Button from ".."

export default { title: "Inputs/Button" }

const findIcons = () => {
    let iconNames = []
    const icons = requireContext("../../../icon/icons", true, /\.js$/)
    icons.keys().forEach(path => {
        iconNames.push(path.split("./")[1].match(/.+(?=\.)/gi)[0])
    })

    return iconNames.filter(path => !path.includes("index"))
}

const icons = findIcons()

export const playground = () => {
    const name = Knobs.text(
        "name",
        "analytics identifier",
        labels.COMPONENT_PROPS,
    )
    const label = Knobs.text("label", "button text", labels.COMPONENT_PROPS)
    const title = Knobs.text("title", "a11y identifier", labels.COMPONENT_PROPS)
    const variant = Knobs.select(
        "variant",
        ["primary", "secondary", "link", "content"],
        "primary",
        labels.COMPONENT_PROPS,
    )
    const size = Knobs.select(
        "size",
        ["small", "medium", "large"],
        "medium",
        labels.COMPONENT_PROPS,
    )
    const icon = Knobs.select("icon", icons, icons[0], labels.COMPONENT_PROPS)
    const inverted = Knobs.boolean("inverted", false, labels.COMPONENT_PROPS)
    const showIcon = Knobs.boolean("show icon?", true, labels.STORY_OPTIONS)
    return (
        <Button
            icon={showIcon ? icon : undefined}
            inverted={inverted}
            label={label}
            name={name}
            onClick={action("button-click")}
            size={size}
            title={title}
            variant={variant}
        />
    )
}
