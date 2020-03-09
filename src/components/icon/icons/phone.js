import React from "react"

const SvgPhone = props => (
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
            strokeLinecap="round"
            d="M23,17.5v3.3c0,1.2-1,2.2-2.2,2.2 c-0.1,0-0.1,0-0.2,0c-3.4-0.4-6.7-1.5-9.5-3.4c-2.7-1.7-4.9-4-6.6-6.6c-1.9-2.9-3-6.2-3.4-9.6C0.9,2.2,1.8,1.1,3,1 c0.1,0,0.1,0,0.2,0h3.3c1.1,0,2.1,0.8,2.2,1.9C8.9,4,9.1,5,9.5,6C9.8,6.8,9.6,7.7,9,8.3L7.6,9.7c1.6,2.8,3.9,5.1,6.6,6.6l1.4-1.4 c0.6-0.6,1.5-0.8,2.3-0.5c1,0.4,2,0.6,3.1,0.8C22.2,15.4,23,16.4,23,17.5z"
        />
    </svg>
)

export default SvgPhone
