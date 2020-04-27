import {
    formatCase,
    formatPhoneNumber,
    formatDate,
    formatCurrency,
    formatCreditCard,
    formatExpirationDate,
    encodeBase64,
    decodeBase64,
} from "../string_utils"

describe("Format string case", () => {
    it("should format as lowercase", () => {
        const expected = "hello there"
        expect(formatCase("hello there", "lowercase")).toEqual(expected)
        expect(formatCase("HeLlo THEre", "lowercase")).toEqual(expected)
    })
    it("should format as uppercase", () => {
        const expected = "HELLO THERE"
        expect(formatCase("hello there", "uppercase")).toEqual(expected)
        expect(formatCase("HeLlo THEre", "uppercase")).toEqual(expected)
    })
    it("should format as capitalized", () => {
        const expected = "Hello there"
        expect(formatCase("hello there", "capitalize")).toEqual(expected)
        expect(formatCase("hELLO THERE", "capitalize")).toEqual(expected)
    })
    it("should format as titlecase", () => {
        const expected = "Hello There"
        expect(formatCase("hello there", "titlecase")).toEqual(expected)
        expect(formatCase("hELLO tHERE", "titlecase")).toEqual(expected)
    })
})

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

describe("Format currency", () => {
    it("should format currency from a number", () => {
        const asNumber = 1234
        const asFloat = 1234.0
        const expected = "$1,234.00"
        expect(formatCurrency(asNumber)).toEqual(expected)
        expect(formatCurrency(asFloat)).toEqual(expected)
    })
    it("should format currency from a string", () => {
        const asString = "1234"
        const expected = "$1,234.00"
        expect(formatCurrency(asString)).toEqual(expected)
    })
    it("should format currency with decimals", () => {
        const asNumber = 1234.1
        const asString = "$1234.10"
        const expected = "$1,234.10"
        expect(formatCurrency(asNumber)).toEqual(expected)
        expect(formatCurrency(asString)).toEqual(expected)
    })
    it("should format currency without decimals", () => {
        const asFloat = 1234.0
        const asString = "1234.00"
        const expected = "$1,234"
        expect(formatCurrency(asFloat, true)).toEqual(expected)
        expect(formatCurrency(asString, true)).toEqual(expected)
    })
})

describe("Format credit cards", () => {
    it("should format credit card", () => {
        expect(formatCreditCard("4242")).toEqual("4242")
        expect(formatCreditCard("42424")).toEqual("4242 4")
        expect(formatCreditCard("424242424")).toEqual("4242 4242 4")
        expect(formatCreditCard("4242424242424")).toEqual("4242 4242 4242 4")
        expect(formatCreditCard("4242424242424242")).toEqual(
            "4242 4242 4242 4242",
        )
    })
    it("should format AMEX credit card", () => {
        expect(formatCreditCard("3712")).toEqual("3712")
        expect(formatCreditCard("37121")).toEqual("3712 1")
        expect(formatCreditCard("37121212121")).toEqual("3712 121212 1")
        expect(formatCreditCard("371212121212121")).toEqual("3712 121212 12121")
    })
    it("should remove special or extra characters", () => {
        expect(formatCreditCard("hello4242")).toEqual("4242")
        expect(formatCreditCard("4242 4242")).toEqual("4242 4242")
        expect(formatCreditCard("42424242424242424242")).toEqual(
            "4242 4242 4242 4242",
        )
        expect(formatCreditCard("37121212121212121")).toEqual(
            "3712 121212 12121",
        )
    })
    it("should format expiration date", () => {
        expect(formatExpirationDate("1")).toEqual("1")
        expect(formatExpirationDate("10")).toEqual("10")
        expect(formatExpirationDate("101")).toEqual("10/1")
        expect(formatExpirationDate("1010")).toEqual("10/10")
    })
})

describe("Encode/Decode Base64", () => {
    it("should encode/decode strings", () => {
        const decoded = "Hello"
        const encoded = "SGVsbG8="
        expect(encodeBase64(decoded)).toEqual(encoded)
        expect(decodeBase64(encoded)).toEqual(decoded)
    })
    it("should encode/decode objects", () => {
        const decoded = { value: "hello" }
        const encoded = "eyJ2YWx1ZSI6ImhlbGxvIn0="
        expect(encodeBase64(decoded)).toEqual(encoded)
        expect(decodeBase64(encoded)).toEqual(decoded)
    })
    it("should encode/decode numbers", () => {
        const decoded = 12345
        const encoded = "MTIzNDU="
        expect(encodeBase64(decoded)).toEqual(encoded)
        expect(decodeBase64(encoded)).toEqual(decoded)
    })
    it("should encode/decode date strings", () => {
        const decoded = "2020-01-01T00:00:00.000Z"
        const encoded = "MjAyMC0wMS0wMVQwMDowMDowMC4wMDBa"
        expect(encodeBase64(decoded)).toEqual(encoded)
        expect(decodeBase64(encoded)).toEqual(decoded)
    })
})
