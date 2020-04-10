import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import { storiesOf } from "@storybook/react"
import requireContext from "require-context.macro"
import Icon from ".."

export default { title: "Icons", decorators: [withA11y] }

const findIcons = () => {
    let iconNames = []
    const icons = requireContext("../icons", true, /\.js$/)
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
    storiesOf("Icons", module)
        .addParameters({
            storyshots: { disable: true },
        })
        .add(name, () => <Icon type={name} />),
)
