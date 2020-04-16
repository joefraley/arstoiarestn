export enum alignment {
    Center = "center",
    End = "flex-end",
    SpaceAround = "space-around",
    SpaceBetween = "space-between",
    SpaceEvenly = "space-evenly",
    Start = "flex-start",
    Stretch = "stretch",
}

export interface FlexProps {
    readonly defaultSize?: string
    readonly grow?: number
    readonly horizontal?: alignment
    readonly reverse?: boolean
    readonly shrink?: number
    readonly vertical?: alignment
    readonly wrap?: boolean
}
