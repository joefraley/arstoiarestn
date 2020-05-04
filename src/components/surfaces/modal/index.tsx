import ReactModal from "react-modal"
import styled from "styled-components/macro"

export default styled(ReactModal).attrs(() => ({
    style: {
        overlay: {
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    shouldCloseOnOverlayClick: true,
}))``
