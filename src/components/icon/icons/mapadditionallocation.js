import React from "react"

const SvgMapadditionallocation = props => (
    <svg
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        style={{
            enableBackground: "new 0 0 24 24",
        }}
        xmlSpace="preserve"
        height={props.height}
        width={props.height}
        {...props}
    >
        <g>
            <path
                fill="none"
                stroke={props.color}
                strokeWidth={1.9774}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.1,6.3c3.8,7.6-5.5,15.1-7.6,16.6c-0.3,0.2-0.6,0.2-0.8,0C9.8,21.7,3,16.2,3,10.1c0-4.6,3.4-8.4,7.8-9 C14.8,0.6,18.4,2.8,20.1,6.3z"
            />
        </g>
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            x1={9}
            y1={11}
            x2={15}
            y2={11}
        />
        <line
            fill="none"
            stroke={props.color}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            x1={12}
            y1={8}
            x2={12}
            y2={14}
        />
    </svg>
)

export default SvgMapadditionallocation
