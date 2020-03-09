import React from "react"

const SvgChart = props => (
    <svg
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        enableBackground="new 0 0 24 24"
        xmlSpace="preserve"
        height={props.height}
        width={props.height}
        {...props}
    >
        <g id="Chart">
            <circle fill="none" stroke={props.color} strokeWidth={2} strokeMiterlimit={10} cx={12} cy={12} r={11} />
            <polyline
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                points="12,1 12,12 23,12  "
            />
        </g>
    </svg>
)

export default SvgChart
