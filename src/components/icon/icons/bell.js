import React from "react"

const SvgBell = props => (
    <svg viewBox="0 0 24 24" width={props.height} height={props.height} {...props}>
        <title>{"bell"}</title>
        <g
            className="nc-icon-wrapper"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth={2}
            fill={props.color}
            stroke={props.color}
        >
            <path
                d="M19,11V8A7,7,0,0,0,5,8v3c0,3.3-3,4.1-3,6,0,1.7,3.9,3,10,3s10-1.3,10-3C22,15.1,19,14.3,19,11Z"
                fill="none"
                stroke={props.color}
                strokeMiterlimit={10}
            />
            <path
                data-color="color-2"
                data-stroke="none"
                d="M12,22c-1.011,0-1.961-.034-2.855-.1a2.992,2.992,0,0,0,5.71,0C13.961,21.966,13.011,22,12,22Z"
                stroke="none"
            />
        </g>
    </svg>
)

export default SvgBell
