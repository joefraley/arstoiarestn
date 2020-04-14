import React, { Fragment } from "react"
import { withA11y } from "@storybook/addon-a11y"
import theme from ".."
export default { title: "Variables", decorators: [withA11y] }

export const Colors = () => {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gridTemplateRows: "repeat(auto-fit, minmax(150px, 1fr))",
                gridGap: "1rem",
            }}
        >
            {Object.keys(theme.palette)
                .filter(key => key !== "divider")
                .map((key, index) => {
                    return Object.keys(theme.palette[key]).map(
                        (style, index, list) => {
                            const color = theme.palette[key][style]
                            return (
                                <div
                                    key={`${style}-${index}`}
                                    style={{
                                        background: color,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        padding: "1rem",
                                        wordBreak: "break-word",
                                    }}
                                >
                                    <span>
                                        theme-{key}-{style}: {color}
                                    </span>
                                </div>
                            )
                        },
                    )
                })}
            )}
        </div>
    )
}
