import React from "react"

const SvgTranslation = props => (
    <svg viewBox="0 0 24 24" width={props.height} height={props.height} {...props}>
        <title>{"translation"}</title>
        <g
            className="nc-icon-wrapper"
            strokeLinecap="square"
            strokeLinejoin="miter"
            strokeWidth={2}
            fill={props.color}
            stroke={props.color}
        >
            <path
                d="M13,6V2.773A1.773,1.773,0,0,0,11.227,1H2.773A1.773,1.773,0,0,0,1,2.773v7.454A1.773,1.773,0,0,0,2.773,12H3v2l3-2H8"
                fill="none"
                strokeMiterlimit={10}
                data-color="color-2"
            />
            <path
                d="M21.286,9H12.714A1.777,1.777,0,0,0,11,10.833v7.334A1.777,1.777,0,0,0,12.714,20H18l3,2V20h.286A1.777,1.777,0,0,0,23,18.167V10.833A1.777,1.777,0,0,0,21.286,9Z"
                fill="none"
                stroke={props.color}
                strokeMiterlimit={10}
            />
            <path
                d="M10.287,5.113c-.308-.028-.581-.042-1-.042a5.525,5.525,0,0,1-.476,1.352,5.162,5.162,0,0,1-.777,1.134,6.742,6.742,0,0,0,2.4.848,4.493,4.493,0,0,0-.693,1.288A8.641,8.641,0,0,1,7.079,8.418a8.993,8.993,0,0,1-2.787,1.29,4.065,4.065,0,0,0-.673-1.24A7.639,7.639,0,0,0,6.105,7.55a6.126,6.126,0,0,1-.9-1.281,6.185,6.185,0,0,1-.483-1.2c-.413,0-.652.014-1,.042V3.845a8.644,8.644,0,0,0,1.016.049H6.28v-.42a2.056,2.056,0,0,0-.042-.434H7.646a2.155,2.155,0,0,0-.042.427v.427H9.271a8.576,8.576,0,0,0,1.016-.049ZM6.063,5.071a4.006,4.006,0,0,0,.981,1.7,3.96,3.96,0,0,0,.875-1.7Z"
                data-cap="butt"
                data-color="color-2"
                data-stroke="none"
                stroke="none"
                strokeLinecap="butt"
            />
            <path
                d="M18.369,17.451l-.317-1.2H15.965l-.325,1.2H13.733L15.829,11h2.316l2.122,6.451Zm-.677-2.628-.277-1.054q-.1-.352-.235-.91t-.182-.8c-.027.149-.079.4-.156.738s-.25,1.018-.517,2.026Z"
                fill={props.color}
                data-cap="butt"
                data-stroke="none"
                stroke="none"
                strokeLinecap="butt"
            />
        </g>
    </svg>
)

export default SvgTranslation
