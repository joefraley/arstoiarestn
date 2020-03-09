import React from "react"

const SvgFaceid = props => (
    <svg
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 32 32"
        enableBackground="new 0 0 32 32"
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
                strokeMiterlimit={10}
                d="M23,1h4.2 C29.3,1,31,2.7,31,4.8V9"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M1,9V4.8C1,2.7,2.7,1,4.8,1 H9"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M1,23v4.1 C1,29.3,2.7,31,4.8,31H9"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                d="M31,23v4.1 c0,2.1-1.7,3.8-3.8,3.8H23"
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={9.1}
                y1={12}
                x2={9.1}
                y2={14}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={23}
                y1={12}
                x2={23}
                y2={14}
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M17,12v5.7c0,0.7-0.6,1.3-1.3,1.3H15"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M21,23c-1.3,1.2-3.1,2-5.1,2s-3.8-0.8-5.1-2"
            />
        </g>
    </svg>
)

export default SvgFaceid
