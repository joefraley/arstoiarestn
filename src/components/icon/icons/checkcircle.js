import React from "react"

const SvgCheckcircle = props => (
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
            strokeLinejoin="bevel"
            strokeMiterlimit={10}
            d=" M16,3.9C14.8,3.3,13.4,3,12,3c-5,0-9,4-9,9s4,9,9,9s9-4,9-9c0-0.3,0-0.7-0.1-1"
        />
        <polyline
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            points=" 9,11 12,14 21,5 "
        />
    </svg>
)

export default SvgCheckcircle
