import React from "react"

const SvgPaperclip = props => (
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
            strokeMiterlimit={10}
            d="M12,20.1L12,20.1l-1.1,1.1 c-2.2,2.2-5.9,2.2-8.1,0l0,0c-2.2-2.2-2.2-5.9,0-8.1L13.1,2.8c2.2-2.2,5.9-2.2,8.1,0l0,0c2.1,2.1,2.2,5.5,0.4,7.7 c-0.1,0.1-0.2,0.3-0.4,0.4L20.1,12l-3.7,3.7c-1.2,1.2-3.2,1.2-4.4,0l0,0c-1.2-1.2-1.2-3.2,0-4.4l3.7-3.7"
        />
    </svg>
)

export default SvgPaperclip
