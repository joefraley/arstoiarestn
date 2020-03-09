import React from "react"

const SvgFamilytree = props => (
    <svg
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
        <style type="text/css">
            {
                "\n\t.st0{display:none;}\n\t.st1{display:inline;fill:none;stroke:#231F20;stroke-width:2;stroke-miterlimit:10;}\n\t.st2{fill:#231F20;}\n"
            }
        </style>
        <g id="Layer_1" className="st0">
            <circle className="st1" cx={12} cy={4.5} r={3.1} />
            <circle className="st1" cx={4} cy={10.6} r={3} />
            <line className="st1" x1={12} y1={7.6} x2={12} y2={21.6} />
            <line className="st1" x1={9} y1={22.6} x2={15} y2={22.6} />
            <line className="st1" x1={12} y1={14.4} x2={7} y2={11.6} />
            <circle className="st1" cx={20} cy={10.6} r={3} />
            <line className="st1" x1={12} y1={14.4} x2={17} y2={11.6} />
        </g>
        <g id="Layer_2">
            <path
                className="st2"
                d="M20,6.6c-2.2,0-4,1.8-4,4c0,0.1,0,0.3,0,0.4l-3,1.7V8.5c1.8-0.4,3.1-2.1,3.1-4c0-2.3-1.8-4.1-4.1-4.1 S7.9,2.2,7.9,4.5c0,1.9,1.3,3.5,3.1,4v4.2L8,11c0-0.1,0-0.3,0-0.4c0-2.2-1.8-4-4-4s-4,1.8-4,4s1.8,4,4,4c1.4,0,2.5-0.7,3.3-1.7 L11,15v6.6H9v2h6v-2h-2V15l3.7-2.1c0.7,1,1.9,1.7,3.3,1.7c2.2,0,4-1.8,4-4S22.2,6.6,20,6.6z M4,12.6c-1.1,0-2-0.9-2-2 c0-1.1,0.9-2,2-2s2,0.9,2,2C6,11.7,5.1,12.6,4,12.6z M9.9,4.5c0-1.2,0.9-2.1,2.1-2.1s2.1,0.9,2.1,2.1S13.2,6.6,12,6.6 S9.9,5.7,9.9,4.5z M20,12.6c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C22,11.7,21.1,12.6,20,12.6z"
            />
        </g>
    </svg>
)

export default SvgFamilytree
