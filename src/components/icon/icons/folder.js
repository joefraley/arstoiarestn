import React from "react"

const SvgFolder = props => (
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
        <path
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeMiterlimit={10}
            d="M21,22H3c-1.1,0-2-0.9-2-2V4c0-1.1,0.9-2,2-2h5.46 C8.8,2,9.11,2.17,9.3,2.45l1.4,2.1C10.89,4.83,11.2,5,11.54,5H21c1.1,0,2,0.9,2,2v13C23,21.1,22.1,22,21,22z"
        />
    </svg>
)

export default SvgFolder
