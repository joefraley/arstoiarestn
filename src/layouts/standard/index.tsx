import React from "react"
import styled from "styled-components"
import Sidebar from "./components/sidebar"
import Header from "./components/header"
import { Row } from "components"

const StyledContainer = styled(Row)`
    background: ${({ theme }) => theme.palette.background.default};
    display: grid;
    height: 100%;
    grid-template-areas:
        "nav header"
        "nav main";
    grid-template-columns: minmax(190px, 200px) 1fr;
    grid-template-rows: min-content 1fr;

    ${Sidebar} {
        grid-area: nav;
    }

    ${Header} {
        grid-area: header;
    }

    main {
        grid-area: main;
        overflow-y: scroll;
        height: 100%;
    }
`

const Layout: React.FC = ({ children }) => {
    return (
        <StyledContainer>
            <Sidebar />
            <Header />
            <main>{children}</main>
        </StyledContainer>
    )
}

export default Layout
