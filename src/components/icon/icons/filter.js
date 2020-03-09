import React from "react"

const SvgFilter = props => (
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
        <line fill="none" stroke={props.color} strokeWidth={2} strokeMiterlimit={10} x1={12} y1={10} x2={12} y2={23} />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeMiterlimit={10}
            x1={10}
            y1={8}
            x2={14}
            y2={8}
        />
        <g>
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                x1={20}
                y1={1}
                x2={20}
                y2={14}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={18}
                y1={16}
                x2={22}
                y2={16}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                x1={20}
                y1={18}
                x2={20}
                y2={23}
            />
        </g>
        <g>
            <line fill="none" stroke={props.color} strokeWidth={2} strokeMiterlimit={10} x1={4} y1={1} x2={4} y2={14} />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                x1={2}
                y1={16}
                x2={6}
                y2={16}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeMiterlimit={10}
                x1={4}
                y1={18}
                x2={4}
                y2={23}
            />
        </g>
        <line fill="none" stroke={props.color} strokeWidth={2} strokeMiterlimit={10} x1={12} y1={1} x2={12} y2={6} />
    </svg>
)

export default SvgFilter
