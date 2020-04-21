/**
 * 404'd
 * -----------------------------------------------------------------------------
 */
import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(220px, 0.5fr));
    overflow-y: scroll;
    background: ${({ theme }) => theme.palette.grey[100]};
    padding: ${({ theme }) => theme.spacing.md};
    text-align: center;
    align-items: center;
    justify-content: center;
`

/**
 * Component
 * -----------------------------------------------------------------------------
 */
const FourOhFour: React.FC = () => {
    return (
        <StyledContainer id="jo-four-oh-four">
            <img src="/img/cat_color.png" alt="Sleepy cat" />
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
