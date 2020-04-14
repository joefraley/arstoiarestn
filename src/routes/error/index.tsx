/**
 * 404'd
 * -----------------------------------------------------------------------------
 */
import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.palette.grey[100]};
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.md};
    text-align: center;
    width: 100%;
`

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const FourOhFour: React.FC = () => {
    return (
        <StyledContainer id="jo-four-oh-four">
            <img src="/img/cat_color.png" alt="Sleepy cat" width="240px" />
            <h1>404</h1>
            <h5>Oops! Could not find this page</h5>
        </StyledContainer>
    )
}

/**
 * Export
 * -----------------------------------------------------------------------------
 */
export default FourOhFour
