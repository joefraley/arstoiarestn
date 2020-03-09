import React from "react"

const SvgEllipsis = props => (
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
        <g>
            <circle fill={props.color} cx={12} cy={12} r={2} />
            <circle fill={props.color} cx={18} cy={12} r={2} />
            <circle fill={props.color} cx={6} cy={12} r={2} />
        </g>
    </svg>
)

export default SvgEllipsis
