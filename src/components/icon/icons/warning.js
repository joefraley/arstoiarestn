import React from "react"

const SvgWarning = props => (
    <svg
        id="Layer_1"
        data-name="Layer 1"
        viewBox="0 0 22.89 20.11"
        height={props.height}
        width={props.height}
        {...props}
    >
        <title>{"warning"}</title>
        <path
            d="M10.3,3.3,1.8,17.4a1.94,1.94,0,0,0,.7,2.7,1.69,1.69,0,0,0,1,.3H20.4a2,2,0,0,0,2-2,1.93,1.93,0,0,0-.3-1L13.7,3.3A1.9,1.9,0,0,0,11,2.6,2.34,2.34,0,0,0,10.3,3.3Z"
            transform="translate(-0.51 -1.29)"
            fill="none"
            stroke={props.color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
        />
        <line
            x1={11.49}
            y1={6.61}
            x2={11.49}
            y2={13.01}
            fill="none"
            stroke={props.color}
            strokeMiterlimit={10}
            strokeWidth={2}
        />
        <line
            x1={11.49}
            y1={14.01}
            x2={11.49}
            y2={15.91}
            fill="none"
            stroke={props.color}
            strokeMiterlimit={10}
            strokeWidth={2}
        />
    </svg>
)

export default SvgWarning
