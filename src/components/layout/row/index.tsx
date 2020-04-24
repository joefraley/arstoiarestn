import styled from "styled-components/macro"
import { FlexProps } from "../types"

const Row = styled.div<FlexProps>`
    align-items: ${({ vertical = "center" }) => vertical};
    display: flex;
    flex-basis: ${({ defaultSize = "auto" }) => defaultSize};
    flex-flow: ${({ reverse = false }) => (reverse ? "row-reverse" : "row")};
    flex-grow: ${({ grow = 1 }) => grow};
    flex-shrink: ${({ shrink = 1 }) => shrink};
    flex-wrap: ${({ wrap = false }) => (wrap ? "wrap" : "nowrap")};
    justify-content: ${({ horizontal = "center" }) => horizontal};

    & > * {
        flex: 1 1 auto;
    }
`
Row.displayName = "Row"
export default Row
