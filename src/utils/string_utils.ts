/**
 * String Formatting Utilities
 *
 * [ ] Sentance Cases
 * [x] Phone Numbers
 * [x] Dates
 * [ ] Currency
 * [ ] Credit Cards
 * [ ] Base64 Encoding/Decoding
 * -----------------------------------------------------------------------------
 */
import Moment from "moment"

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
