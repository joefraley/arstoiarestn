import React from "react"

const SvgTiersThree = props => (
    <svg
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style={{
            enableBackground: "new 0 0 24 24",
        }}
        xmlSpace="preserve"
        height={props.height}
        width={props.height}
        {...props}
    >
        <line
            id="bar1"
            fill="none"
            stroke={props.color}
            strokeOpacity={1}
            strokeWidth={4}
            strokeMiterlimit={10}
            x1={6}
            y1={20}
            x2={6}
            y2={12}
        />
        <line
            id="bar2"
            fill="none"
            stroke={props.color}
            strokeOpacity={1}
            strokeWidth={4}
            strokeMiterlimit={10}
            x1={12}
            y1={20}
            x2={12}
            y2={8}
        />
        <line
            id="bar3"
            fill="none"
            stroke={props.color}
            strokeOpacity={1}
            strokeWidth={4}
            strokeMiterlimit={10}
            x1={18}
            y1={20}
            x2={18}
            y2={4}
        />
    </svg>
)

export default SvgTiersThree
