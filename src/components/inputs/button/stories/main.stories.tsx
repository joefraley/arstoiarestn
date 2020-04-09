import React from "react"
import { action } from "@storybook/addon-actions"
import { withA11y } from "@storybook/addon-a11y"
import Button from ".."

export default { title: "Inputs.Button", decorators: [withA11y] }
export const withText = () => (
    <Button name="button" onPress={action("button-click")}>
        Hello Button
    </Button>
)
