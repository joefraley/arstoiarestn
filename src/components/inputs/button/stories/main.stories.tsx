import React from "react"
import { action } from "@storybook/addon-actions"
import Button from ".."

export default { title: "Inputs.Button" }
export const withText = () => (
    <Button name="button" onPress={action("button-click")}>
        Hello Button
    </Button>
)
