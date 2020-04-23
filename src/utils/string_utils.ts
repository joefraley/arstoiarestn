/**
 * String Formatting Utilities
 *
 * [ ] Addresses
 * [ ] Phone Numbers
 * [ ] Sentance Cases
 * [ ] Dates
 * [ ] Currency
 * [ ] Credit Cards
 * [ ] Base64 Encoding/Decoding
 * -----------------------------------------------------------------------------
 */
import Moment from "moment"

/**
 * Format dates from string or Date
 *
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
