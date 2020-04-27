import React from "react"
import * as Knobs from "@storybook/addon-knobs"
import { labels } from "constants/storybook"
import Layer from ".."

export default { title: "Surfaces/Layer" }

export const playground = () => {
    const level = Knobs.number(
        "level",
        1,
        { range: true, min: 0, max: 24 },
        labels.COMPONENT_PROPS,
    )
    const text = Knobs.text(
        "text",
        "This is some text in a Layer",
        labels.STORY_OPTIONS,
    )

    return (
        <Layer style={{ flexGrow: 0, padding: "1rem" }} level={level}>
            {text}
        </Layer>
    )
}
