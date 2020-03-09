import React from "react"

const SvgPills = props => (
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
            <g>
                <path
                    fill="none"
                    stroke={props.color}
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    d="M2.6,15L2.6,15c-1.2-1.2-1.2-3.1,0-4.3L11,2.3 c1.2-1.2,3.1-1.2,4.3,0s1.2,3.1,0,4.3L6.9,15C5.7,16.2,3.8,16.2,2.6,15z"
                />
                <line
                    fill="none"
                    stroke={props.color}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    x1={13}
                    y1={17}
                    x2={21}
                    y2={17}
                />
                <path
                    fill="none"
                    stroke={props.color}
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    d="M12,17c0,2.8,2.2,5,5,5s5-2.2,5-5s-2.2-5-5-5 S12,14.2,12,17z"
                />
                <line
                    fill="none"
                    stroke={props.color}
                    strokeWidth={2}
                    strokeMiterlimit={10}
                    x1={6.8}
                    y1={6.5}
                    x2={11.1}
                    y2={10.8}
                />
            </g>
        </g>
    </svg>
)

export default SvgPills
