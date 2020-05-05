import React from "react"
// import { action } from "@storybook/addon-actions"
import Input from ".."

export default { title: "Input Field" }
export const Default = () => {
    const [value, setValue] = React.useState("Input")
    return (
        <Input
            name="example-input"
            label="Input Label"
            value={value}
            onChange={event => setValue(event.currentTarget.value)}
        />
    )
}
