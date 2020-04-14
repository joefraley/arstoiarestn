import React from "react"

const SvgResources = props => (
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
        <rect x={1.1} y={7.5} fill={props.secondarycolor} width={21.6} height={14} />
        <g>
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M19.5,6.5v-1c0-1.6-1.3-3-3-3H7.5c-1.6,0-3,1.3-3,3v1"
            />
            <g>
                <g>
                    <rect
                        x={1}
                        y={7.5}
                        fill="none"
                        stroke={props.color}
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={10}
                        width={22}
                        height={14}
                    />
                </g>
            </g>
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={15.7}
                y1={14.5}
                x2={22.7}
                y2={14.5}
            />
            <line
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                x1={1.7}
                y1={14.5}
                x2={8.7}
                y2={14.5}
            />
            <rect
                x={9}
                y={11.5}
                fill="none"
                stroke={props.color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                width={6}
                height={7}
            />
        </g>
    </svg>
)

export default SvgResources
