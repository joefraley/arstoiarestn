import React from "react"
import {
    select,
    boolean,
    number,
    text,
    color,
    object,
} from "@storybook/addon-knobs"
import { Row, Column } from "components"
import { alignment } from "../types"

export default {
    title: "Layout/Rows and Columns",
}

export const playground = () => {
    const alignments: ReadonlyArray<alignment> = [
        alignment.Center,
        alignment.End,
        alignment.SpaceAround,
        alignment.SpaceBetween,
        alignment.SpaceEvenly,
        alignment.Start,
        alignment.Stretch,
    ]

    const layouts: ReadonlyArray<string> = [
        "row parent with columns",
        "column parent with rows",
    ]
    const parentProps = "parent properties"
    const parentDirection = select(
        "layout direction",
        layouts,
        layouts[0],
        parentProps,
    )

    const horizontal = select(
        "horizontal",
        alignments,
        alignment.Center,
        parentProps,
    )
    const vertical = select(
        "vertical",
        alignments,
        alignment.Center,
        parentProps,
    )
    const reverse = boolean("reverse", false, parentProps)
    const wrap = boolean("wrap", false, parentProps)
    const count = number("number of children", 5, {}, parentProps)

    const childProps = "child properties"
    const grow = number("grow", 1, {}, childProps)
    const shrink = number("shrink", 1, {}, childProps)
    const defaultSize = text("default size", "auto", childProps)
    const colors: ReadonlyArray<string> = [
        "tomato",
        "hotpink",
        "teal",
        "indigo",
        "rebeccapurple",
        "skyblue",
        "yellow",
        "lime",
    ]

    const Parent = parentDirection === layouts[0] ? Row : Column
    const Child = parentDirection === layouts[0] ? Column : Row
    return (
        <Parent
            horizontal={horizontal}
            vertical={vertical}
            reverse={reverse}
            wrap={wrap}
            style={{
                background: color("main background", "purple", parentProps),
            }}
        >
            {new Array(count).fill(" ").map((_, index) => {
                const styles = object(
                    `styles-${index + 1}`,
                    {
                        background: colors[index],
                        color: "white",
                        padding: "1rem",
                    },
                    childProps,
                )

                return (
                    <Child
                        key={`${colors[index]}-${index}`}
                        grow={grow}
                        shrink={shrink}
                        defaultSize={defaultSize}
                        style={styles}
                    >
                        {Child.displayName} {index + 1}
                        <code style={{ wordBreak: "break-word" }}>
                            {JSON.stringify(styles)}
                        </code>
                    </Child>
                )
            })}
        </Parent>
    )
}
