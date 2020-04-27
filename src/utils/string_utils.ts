/**
 * String Formatting Utilities
 * -----------------------------------------------------------------------------
 */
import Moment from "moment"

/**
 * Format string case
 * -----------------------------------------------------------------------------
 * formatCase("hello there", "uppercase")   => "HELLO THERE"
 * formatCase("hello there", "lowercase")   => "hello there"
 * formatCase("hello there", "capitalize")  => "Hello there"
 * formatCase("hello there", "titlecase")   => "Hello There"
 */
export const formatCase = (
    value: string,
    transform: "uppercase" | "lowercase" | "capitalize" | "titlecase" | "none",
) => {
    switch (transform) {
        case "lowercase":
            return value.toLowerCase()
        case "uppercase":
            return value.toUpperCase()
        case "capitalize": {
            const lowercase = value.toLowerCase()
            return lowercase.charAt(0).toUpperCase() + lowercase.slice(1)
        }
        case "titlecase": {
            const lowercase = value.toLowerCase()
            return lowercase.replace(/\w\S*/g, t => {
                return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
            })
        }
        default:
            return value // input cast to string
    }
}

/**
 * Format phone numbers
 * -----------------------------------------------------------------------------
 * formatPhoneNumber("5035555555")      => "503-555-5555"
 * formatPhoneNumber("15035555555")     => "+1 503-555-5555"
 * formatPhoneNumber("150355555551234") => "+1 503-555-5555 +1234"
 */
export const formatPhoneNumber = (phone: string) => {
    // Remove non-numeric characters
    const numeric = phone.replace(/\D/g, "")

    // Limit to 15 characters
    const sliced = numeric.substr(0, 14)

    // Break apart parts of number
    // Note: US/Canada use +1 country code
    // Note: Mexico uses +52 country code
    // Note: Arizona has a 520 area code
    const parts = sliced.match(
        /^(1|(?!520)52)?(\d{1,3})(\d{0,3})(\d{0,4})(\d{0,4})$/,
    )

    // Format parts as phone number
    if (parts) {
        const country = parts[1] ? `+${parts[1]} ` : ""
        const area = parts[2] ? `${parts[2]}` : ""
        const prefix = parts[3] ? `-${parts[3]}` : ""
        const subscriber = parts[4] ? `-${parts[4]}` : ""
        const extension = parts[5] ? ` +${parts[5]}` : ""
        return `${country}${area}${prefix}${subscriber}${extension}`
    }

    // Return unformatted string
    return phone
}

/**
 * Format dates
 * -----------------------------------------------------------------------------
 * https://momentjs.com/docs/#/parsing/string-format/
 *
 * formatDate("2020-07-01", "LL")                   => "June 1, 2020"
 * formatDate("2020-07-01", "MMM is rad")           => "June is rad"
 * formatDate("June 1, 2020", "ISO")                => "2020-01-01"
 * formatDate("2020-07-01T00:00:00.000Z", "ISO")    => "2020-01-01"
 */
export const formatDate = (value: string | Date, format: string): string => {
    try {
        // Format all input as ISO-8601 date format
        const ISO8601 = "YYYY-MM-DD"
        const date = new Date(value).toISOString()
        const isoValue = date.split("T")[0]

        // Special case for ISO format
        const isISO = !!(format === "ISO")

        // Return formatted date string
        return Moment(isoValue, ISO8601).format(isISO ? ISO8601 : format)
    } catch (e) {
        // Return unformatted initial value
        return value.toString()
    }
}

/**
 * Format currency
 * -----------------------------------------------------------------------------
 * formatCurrency("1234")           => "$1,234.00"
 * formatCurrency("1234", true)     => "$1,234"
 * formatCurrency("1234.10")        => "$1,234.10"
 * formatCurrency("1234.10", true)  => "$1,234"
 */
export const formatCurrency = (value: number | string, simple?: boolean) => {
    // Remove all non-numeric or decimal characters
    const cleaned = value.toString().replace(/[^0-9.]/g, "")
    const amount = parseFloat(cleaned).toFixed(2)

    if (simple) {
        // Return "simplified" (ex: $1,000)
        const parts = (amount || 0).toString().split(".")
        return "$" + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    } else {
        // Return default (ex: $1,000.00)
        const parts = (amount || 0).toString().split(".")
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        parts[1] = parts[1] || "00"
        return "$" + parts.join(".")
    }
}

/**
 * Format Credit Card Expiration Date
 * -----------------------------------------------------------------------------
 * formatExpirationDate("1012")     => "10/12"
 */
export const formatExpirationDate = (expiration: string) => {
    const transform = expiration.replace(/\//g, "")
    if (transform.length > 2) {
        return transform.replace(/^(.{2})/, "$1/")
    }
    return expiration
}

/**
 * Format Credit Card
 * -----------------------------------------------------------------------------
 * formatCreditCard("4242424242424242")     => "4242 4242 4242 4242"
 * formatCreditCard("371212121212121")      => "3712 121212 12121"
 */
export const formatCreditCard = (cardNumber: string | number) => {
    // Enforce as string
    const card = cardNumber.toString().replace(/[^0-9.]/g, "")

    // AMEX cards start with 34 or 37 and have 15 numbers
    if (/^3[47]/.test(card)) {
        return card
            .replace(/\b(\d{4})/, "$1 ")
            .replace(/ (\d{6})/, " $1 ")
            .substring(0, 17)
            .trim()
    }

    // All other cards
    return card
        .replace(/\d{4}(?=.)/g, "$& ")
        .substring(0, 19)
        .trim()
}

/**
 * Encode/Decode Base64
 * -----------------------------------------------------------------------------
 * encodeBase64("Hello")        => "SGVsbG8="
 * decodeBase64("SGVsbG8=")     => "Hello"
 */
export const encodeBase64 = (value: string | object | number) => {
    const stringify = () => {
        switch (typeof value) {
            case "object":
                return JSON.stringify(value)
            case "number":
                return value.toString()
            default:
                return value
        }
    }
    return btoa(stringify())
}
export const decodeBase64 = (value: string) => {
    const decoded = atob(value)
    try {
        return JSON.parse(decoded)
    } catch (e) {
        return decoded
    }
}
