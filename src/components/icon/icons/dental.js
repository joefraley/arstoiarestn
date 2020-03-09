import React from "react"

const SvgDental = props => (
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
            d="M14.8,18.8c-0.2,1.8,0.2,2.7,1,2.4 c0.8-0.3,3.2-8.1,3.5-9.3c1.8-2.1,1.7-5.7,0.5-7.7C19,3,18,2.3,16.5,3.1c-0.3,0.2-3,1.7-4.5,1.7h0c-1.5,0-4.2-1.5-4.5-1.7 C6.1,2.3,5.1,3,4.2,4.2c-1.2,2-1.3,5.6,0.5,7.7c0.2,1.2,2.7,9,3.5,9.3c0.8,0.3,1.3-0.6,1-2.4c-0.2-1.7,0.9-4,2.8-4 S15,17.1,14.8,18.8z"
        />
    </svg>
)

export default SvgDental
