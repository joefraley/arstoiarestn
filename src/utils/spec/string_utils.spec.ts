import { formatDate } from "../string_utils"

describe("Format date strings", () => {
    it("should accept string or date input", () => {
        const stringDate = "January 1, 2020"
        const dateDate = new Date("2020-01-01")
        const expected = "January 1, 2020"
        expect(formatDate(stringDate, "LL")).toEqual(expected)
        expect(formatDate(dateDate, "LL")).toEqual(expected)
    })
    it("should support MomentJS formats", () => {
        const date = "2020-01-01"
        expect(formatDate(date, "l")).toEqual("1/1/2020")
        expect(formatDate(date, "L")).toEqual("01/01/2020")
        expect(formatDate(date, "LL")).toEqual("January 1, 2020")
        expect(formatDate(date, "dddd")).toEqual("Wednesday")
        expect(formatDate(date, "MMM Do")).toEqual("Jan 1st")
    })
    it("should format between ISO and string", () => {
        const isoDate = "2020-01-01"
        const stringDate = "January 1, 2020"
        expect(formatDate(isoDate, "LL")).toEqual(stringDate)
        expect(formatDate(stringDate, "ISO")).toEqual(isoDate)
    })
    it("should respect timezone after 5pm", () => {
        const greenwich = "2020-01-01T00:00:00.000Z"
        const portland = "2020-01-01T08:00:00.000Z"
        const expected = "January 1, 2020"
        expect(formatDate(greenwich, "LL")).toEqual(expected)
        expect(formatDate(portland, "LL")).toEqual(expected)
    })
})
