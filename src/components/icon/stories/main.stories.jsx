import React from "react"
import { storiesOf } from "@storybook/react"
import requireContext from "require-context.macro"
import Icon from ".."

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
                flex: "1 1 auto",
            }}
        >
            {icons.map((name, index) => {
                return (
                    <div
                        style={{
                            display: "flex",
                            flexFlow: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            wordBreak: "break-all",
                        }}
                    >
                        <Icon key={`${name}-${index}`} type={name} />
                        <span style={{ padding: "1rem" }}>{name}</span>
                    </div>
                )
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
