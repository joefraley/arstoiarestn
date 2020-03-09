import React from "react"

const SvgAdd = props => (
    <svg viewBox="0 0 24 24" width={props.height} height={props.height} {...props}>
        <title>{"i add"}</title>
        <g className="nc-icon-wrapper" fill={props.color}>
            <polygon
                points="18 11 13 11 13 6 11 6 11 11 6 11 6 13 11 13 11 18 13 18 13 13 18 13 18 11"
                fill={props.color}
            />
        </g>
    </svg>
)

export default SvgAdd
