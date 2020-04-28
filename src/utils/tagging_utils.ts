/**
 * Event Tagging Utilities
 * -----------------------------------------------------------------------------
 * Example:
 *      import { useTagging } from "utils/tagging_utils"
 *
 *      const tag = useTagging()
 *
 *      tag({ type: "click", value: "example-button"})
 */
import { useLocation } from "react-router-dom"

/**
 * Types
 * -----------------------------------------------------------------------------
 */
export interface Event {
    readonly type: "click" | "view" | "error"
    readonly value: string
    readonly label?: string
    readonly route?: string
    readonly meta?: string
}

/**
 * React Hook `useTagging`
 * -----------------------------------------------------------------------------
 */
export const useTagging = () => {
    /**
     * Hooks
     */
    const location = useLocation()

    /**
     * Return method
     */
    return (data: Event) => {
        const event = { ...data, route: data.route || location.pathname }
        log(event)
    }
}

/**
 * Display tag detail in console.log
 * -----------------------------------------------------------------------------
 */
const log = (data: Event) => {
    if (process.env.NODE_ENV === "development") {
        const info = Object.keys(data)
            .filter(k => data[k])
            .map((key: string) => {
                return `${key.toUpperCase()}: ${data[key]}`
            })
        const line = "--------------------"
        // tslint:disable-next-line
        console.log(
            `%c${line}\nEVENT\n%c${info.join("\n")}\n${line}`,
            "color: green; font-weight: bold;",
            "color: green;",
        )
    }
}
