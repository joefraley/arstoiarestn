import React from "react"

const SvgGlobe = props => (
    <svg viewBox="0 0 24 24" width={props.height} height={props.height} {...props}>
        <title>{"globe"}</title>
        <g
            className="nc-icon-wrapper"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth={2}
            fill={props.color}
            stroke={props.color}
        >
            <line
                data-cap="butt"
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                x1={12}
                y1={1}
                x2={12}
                y2={23}
                strokeLinecap="butt"
            />
            <line
                data-cap="butt"
                data-color="color-2"
                fill="none"
                strokeMiterlimit={10}
                x1={1}
                y1={12}
                x2={23}
                y2={12}
                strokeLinecap="butt"
            />
            <ellipse data-color="color-2" fill="none" strokeMiterlimit={10} cx={12} cy={12} rx={5.5} ry={11} />
            <circle fill="none" stroke={props.color} strokeMiterlimit={10} cx={12} cy={12} r={11} />
        </g>
    </svg>
)

export default SvgGlobe
