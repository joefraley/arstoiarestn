import React from "react"
import Modal from ".."
import { Card, Button } from "components"

export default { title: "Surfaces/Modal" }

export const Default = () => {
    const [isOpen, toggle] = React.useState(false)
    const close = () => toggle(false)
    const open = () => toggle(true)

    return (
        <>
            <Button onClick={open}>Open Modal</Button>
            <Modal isOpen={isOpen} onRequestClose={close}>
                <Card>I am a Modal with default configuration</Card>
            </Modal>
        </>
    )
}
