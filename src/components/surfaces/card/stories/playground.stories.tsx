import React from "react"
import * as Knobs from "@storybook/addon-knobs"
import { action } from "@storybook/addon-actions"
import { labels } from "constants/storybook"
import Card from ".."

export default { title: "Surfaces/Card" }

export const playground = () => {
    const text = Knobs.text(
        "text",
        "This is some text in a Card",
        labels.STORY_OPTIONS,
    )
    const size = Knobs.select(
        "size",
        ["small", "medium"],
        "medium",
        labels.COMPONENT_PROPS,
    )
    const onPress = Knobs.boolean("onPress", false, labels.COMPONENT_PROPS)
    const clickHandler = action("props.onPress")
    return (
        <Card size={size} onPress={onPress ? clickHandler : undefined}>
            {text}
        </Card>
    )
}
