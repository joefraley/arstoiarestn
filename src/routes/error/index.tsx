import React from "react"
import styled from "styled-components/macro"

const StyledContainer = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.palette.grey[100]};
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(220px, 0.5fr));
    justify-content: center;
    overflow-y: scroll;
    padding: ${({ theme }) => theme.spacing.md};
    text-align: center;
`

const FourOhFour: React.FC = () => {
    return (
        <StyledContainer id="jo-four-oh-four">
            <img src="/img/cat_color.png" alt="Sleepy cat" />
            <h1>404</h1>
            <h5>Oops! Could not find this page</h5>
        </StyledContainer>
    )
}

export default FourOhFour
