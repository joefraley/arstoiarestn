import React from "react"

const SvgNote2 = props => (
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
        <g>
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M14.6,20.9H5.2c-1.2,0-2.1-0.9-2.1-2.1V5.2C3.1,4,4,3.1,5.2,3.1h13.7C20.1,3.1,21,4,21,5.2v9.5L14.6,20.9z"
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={4}
                y1={8.1}
                x2={20}
                y2={8.1}
            />
            <polyline
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                points=" 14.1,20.5 14.1,14.2 20.4,14.2  "
            />
        </g>
    </svg>
)

export default SvgNote2
