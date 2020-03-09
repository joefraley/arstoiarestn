import React from "react"

const SvgPhotos = props => (
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
                strokeMiterlimit={10}
                d="M5,16.3H3c-1.1,0-2-0.9-2-1.9V5.9C1,4.8,1.9,4,3,4 h14c1.1,0,2,0.9,2,1.9v1.9"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                d="M21,20.1H7c-1.1,0-2-0.9-2-2V9.8c0-1.1,0.9-2,2-2 h14c1.1,0,2,0.9,2,2V18C23,19.1,22.1,20.1,21,20.1z"
            />
        </g>
    </svg>
)

export default SvgPhotos
