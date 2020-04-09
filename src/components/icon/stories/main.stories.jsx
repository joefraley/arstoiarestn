import React from "react"
import { storiesOf } from "@storybook/react"
import Icon from ".."

export default { title: "Icons" }

const findIcons = () => {
    let iconNames = []
    const icons = require.context("../icons", true, /\.js$/)
    icons.keys().forEach(path => {
        iconNames.push(path.split("./")[1].match(/.+(?=\.)/gi)[0])
    })

    return iconNames.filter(path => !path.includes("index"))
}

const icons = findIcons()

storiesOf("Icons", module).add("all", () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gridGap: "1rem",
            }}
        >
            {icons.map(name => {
                return <Icon type={name} />
            })}
        </div>
    )
})
icons.map(name =>
    storiesOf("Icons", module).add(name, () => <Icon type={name} />),
)
