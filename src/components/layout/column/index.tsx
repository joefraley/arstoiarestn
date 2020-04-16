import styled from "styled-components"
import { FlexProps } from "../types"

const Column = styled.div<FlexProps>`
    align-items: ${({ horizontal = "center" }) => horizontal};
    display: flex;
    flex-basis: ${({ defaultSize = "auto" }) => defaultSize};
    flex-flow: ${({ reverse = false }) =>
        reverse ? "column-reverse" : "column"};
    flex-grow: ${({ grow = 1 }) => grow};
    flex-shrink: ${({ shrink = 1 }) => shrink};
    flex-wrap: ${({ wrap = false }) => (wrap ? "wrap" : "nowrap")};
    justify-content: ${({ vertical = "center" }) => vertical};
    & > * {
        flex: 1 1 auto;
    }
`

Column.displayName = "Column"
export default Column
