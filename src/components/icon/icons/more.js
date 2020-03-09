import React from "react"

const SvgMore = props => (
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
        <style type="text/css">{"\n\t.st0{fill:#ebe8e2;}\n\t.st1{fill:#64009e}\n"}</style>
        <g>
            <circle className="st0" cx={12} cy={12} r={12} />
            <circle className="st1" cx={12} cy={12} r={2} />
            <circle className="st1" cx={18} cy={12} r={2} />
            <circle className="st1" cx={6} cy={12} r={2} />
        </g>
    </svg>
)

export default SvgMore
