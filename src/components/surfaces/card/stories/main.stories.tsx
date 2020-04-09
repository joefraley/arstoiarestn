import React from "react"
import { withA11y } from "@storybook/addon-a11y"
import Card from ".."

export default { title: "Surfaces.Card", decorators: [withA11y] }
export const withText = () => <Card>I am a card</Card>
