import React from "react"
import { action } from "@storybook/addon-actions"
import Button from ".."

export default { title: "Inputs/Button" }
export const Default = () => (
    <Button name="button" onClick={action("button-click")}>
        Hello Button
    </Button>
)
