import React from "react"

const SvgSyringe = props => (
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
                d="M14.1,5.4l-8.4,8.4c-0.4,0.4-0.4,1.1,0,1.5l3.1,3.1 c0.4,0.4,1.1,0.4,1.5,0l8.4-8.4L14.1,5.4z"
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                x1={16.5}
                y1={7.5}
                x2={20}
                y2={4}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={18.5}
                y1={2}
                x2={22}
                y2={5.5}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={2}
                y1={22}
                x2={7.2}
                y2={16.8}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={8}
                y1={12.3}
                x2={9.3}
                y2={13.6}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={9.5}
                y1={10.1}
                x2={10.5}
                y2={10.9}
            />
        </g>
    </svg>
)

export default SvgSyringe
