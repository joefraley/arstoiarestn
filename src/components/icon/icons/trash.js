import React from "react"

const SvgTrash = props => (
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
        <g id="Trashcan">
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                d="M17.5,22h-11C5.7,22,5,21.3,5,20.5V6h14v14.5 C19,21.3,18.3,22,17.5,22z"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                d="M16,6H8V3.5C8,2.7,8.7,2,9.5,2h5 C15.3,2,16,2.7,16,3.5V6z"
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={3}
                y1={6}
                x2={21}
                y2={6}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={10}
                y1={11}
                x2={10}
                y2={17}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={14}
                y1={11}
                x2={14}
                y2={17}
            />
        </g>
    </svg>
)

export default SvgTrash
