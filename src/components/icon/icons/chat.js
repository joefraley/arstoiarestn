import React from "react"

const SvgChat = props => (
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
                fill={props.secondaryColor}
                d="M4.2,18.6c-1.8,0-3.2-1.4-3.2-3V5c0-1.7,1.5-3,3.2-3h15.5C21.5,2,23,3.3,23,5v10.6c0,1.7-1.5,3-3.2,3h-2.5 L16.9,22l-6-3.4H4.2z"
            />
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={1.998}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d=" M4.2,18.6c-1.8,0-3.2-1.4-3.2-3V5c0-1.7,1.5-3,3.2-3h15.5C21.5,2,23,3.3,23,5v10.6c0,1.7-1.5,3-3.2,3h-2.5L16.9,22l-6-3.4H4.2z"
            />
            <g>
                <path
                    fill={props.color}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5,10.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5S6.2,8.8,7,8.8 S8.5,9.4,8.5,10.2"
                />
                <path
                    fill={props.color}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.5,10.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5 S13.5,9.4,13.5,10.2"
                />
                <path
                    fill={props.color}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5,10.2c0,0.8-0.7,1.5-1.5,1.5s-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5 S18.5,9.4,18.5,10.2"
                />
            </g>
        </g>
    </svg>
)

export default SvgChat
