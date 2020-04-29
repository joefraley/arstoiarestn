import styled from "styled-components/macro"
import { Column } from "components/layout"

interface Props {
    level?: number
}

export default styled(Column)<Props>`
    background: ${({ theme }) => theme.palette.common.white};
    box-shadow: ${({ theme, level = 1 }) => theme.shadows[level]};
`
