import { formatPhoneNumber, formatDate } from "../string_utils"

describe("Format phone numbers", () => {
    it("should add hyphens", () => {
        expect(formatPhoneNumber("5035555555")).toEqual("503-555-5555")
    })
    it("should ignore non-numeric characters", () => {
        const expected = "503-555-5555"
        expect(formatPhoneNumber("503-555-5555")).toEqual(expected)
        expect(formatPhoneNumber("Saul: 5035555555")).toEqual(expected)
        expect(formatPhoneNumber("🚀5035555555")).toEqual(expected)
        expect(formatPhoneNumber("(503) 555 5555")).toEqual(expected)
    })
    it("should support US/CAN/MEX country codes", () => {
        expect(formatPhoneNumber("15035555555")).toEqual("+1 503-555-5555")
        expect(formatPhoneNumber("525035555555")).toEqual("+52 503-555-5555")
        expect(formatPhoneNumber("5205555555")).toEqual("520-555-5555")
    })
})

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
