/* tslint:disable */
// @ts-nocheck
import { css, createGlobalStyle } from "styled-components/macro"
import { modularScale, rgba } from "polished"

export const Reset = createGlobalStyle`
    body, #root {
        align-items: stretch;
        display: flex;
        flex-flow: column;
        height: 100vh;
        justify-content: stretch;
        overflow: hidden;
        width: 100vw;
    }

    body, #root, * {
        border: none;
        box-sizing: border-box;
        margin: 0;
        outline: none;
        padding: 0;
    }

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

const family = `"effra", "Helvetica Neue", "Arial", sans-serif`

const colors = {
    black: "#000",
    white: "#fff",
    blue: {
        main: "#0fa2e6",
        medium: "#60b7f1",
        light: "#e5f1f4",
        vivid: "#0e71c0",
        green: "#007c91",
    },
    green: {
        main: "#009d71",
        light: "#e7f4e9",
        vivid: "#71d239",
    },
    purple: {
        main: "#64009e",
        medium: "#9553d0",
        vivid: "#a010c9",
    },
    red: {
        main: "#cc1533",
        medium: "#f55151",
        light: "#feeded",
    },
    yellow: {
        main: "#ffab00",
        light: "#fff4df",
    },
    grey: {
        100: "#f5f5f5",
        200: "#e9e9ea",
        300: "#d4d4d5",
        400: "#a9a9ac",
        500: "#939398",
        600: "#69696e",
        700: "#53535a",
        800: "#3e3e45",
        900: "#282831",
    },
}

const theme = {
    breakpoints: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        between: (smallest = 0, largest = 1920) => {
            return css`@media only screen and (min-width: ${smallest}px, max-width: ${largest}px);`
        },
        smallerThan: (largest = 1920) => {
            return css`
                @media only screen and (max-width: ${largest}px);
            `
        },
        largerThan: (smallest = 0) => {
            return css`
                @media only screen and (min-width: ${smallest}px);
            `
        },
    },
    direction: "left-to-right->",
    palette: {
        common: {
            black: colors.black,
            white: colors.white,
        },
        primary: {
            contrastText: colors.white,
            dark: colors.purple.vivid,
            light: colors.purple.medium,
            main: colors.purple.main,
        },
        secondary: {
            contrastText: colors.purple.medium,
            dark: colors.grey[900],
            light: colors.grey[200],
            main: colors.grey[600],
        },
        error: {
            contrastText: colors.white,
            dark: colors.red.medium,
            light: colors.red.light,
            main: colors.red.main,
        },
        warning: {
            contrastText: colors.white,
            light: colors.yellow.light,
            main: colors.yellow.main,
        },
        info: {
            contrastText: colors.white,
            dark: colors.blue.vivid,
            light: colors.blue.light,
            main: colors.blue.main,
        },
        success: {
            contrastText: colors.white,
            dark: colors.green.vivid,
            light: colors.green.light,
            main: colors.green.main,
        },
        grey: colors.grey,
        text: {
            disabled: rgba(colors.grey[900], 0.38),
            hint: rgba(colors.grey[900], 0.38),
            primary: rgba(colors.grey[900], 0.87),
            secondary: rgba(colors.grey[900], 0.54),
        },
        divider: rgba(colors.grey[900], 0.12),
        background: {
            paper: colors.white,
            default: colors.grey[100],
        },
        action: {
            active: 0.54,
            disabled: 0.26,
            disabledBackground: 0.12,
            focus: 0.88,
            hover: 0.96,
            selected: 0.92,
        },
    },
    shadows: [
        "none",

        `0px 2px 1px -1px ${rgba(colors.grey[900], 0.2)},0px 1px 1px 0px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 1px 3px 0px ${rgba(colors.grey[900], 0.12)}`,

        `0px 3px 1px -2px ${rgba(colors.grey[900], 0.2)},0px 2px 2px 0px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 1px 5px 0px ${rgba(colors.grey[900], 0.12)}`,

        `0px 3px 3px -2px ${rgba(colors.grey[900], 0.2)},0px 3px 4px 0px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 1px 8px 0px ${rgba(colors.grey[900], 0.12)}`,

        `0px 2px 4px -1px ${rgba(colors.grey[900], 0.2)},0px 4px 5px 0px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 1px 10px 0px ${rgba(colors.grey[900], 0.12)}`,

        `0px 3px 5px -1px ${rgba(colors.grey[900], 0.2)},0px 5px 8px 0px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 1px 14px 0px ${rgba(colors.grey[900], 0.12)}`,

        `0px 3px 5px -1px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 6px 10px 0px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 1px 18px 0px ${rgba(colors.grey[900], 0.12)}`,

        `0px 4px 5px -2px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 7px 10px 1px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 2px 16px 1px ${rgba(colors.grey[900], 0.12)}`,

        `0px 5px 5px -3px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 8px 10px 1px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 3px 14px 2px ${rgba(colors.grey[900], 0.12)}`,

        `0px 5px 6px -3px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 9px 12px 1px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 3px 16px 2px ${rgba(colors.grey[900], 0.12)}`,

        `0px 6px 6px -3px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 10px 14px 1px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 4px 18px 3px ${rgba(colors.grey[900], 0.12)}`,

        `0px 6px 7px -4px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 11px 15px 1px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 4px 20px 3px ${rgba(colors.grey[900], 0.12)}`,

        `0px 7px 8px -4px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 12px 17px 2px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 5px 22px 4px ${rgba(colors.grey[900], 0.12)}`,

        `0px 7px 8px -4px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 13px 19px 2px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 5px 24px 4px ${rgba(colors.grey[900], 0.12)}`,

        `0px 7px 9px -4px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 14px 21px 2px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 5px 26px 4px ${rgba(colors.grey[900], 0.12)}`,

        `0px 8px 9px -5px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 15px 22px 2px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 6px 28px 5px ${rgba(colors.grey[900], 0.12)}`,

        `0px 8px 10px -5px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 16px 24px 2px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 6px 30px 5px ${rgba(colors.grey[900], 0.12)}`,

        `0px 8px 11px -5px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 17px 26px 2px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 6px 32px 5px ${rgba(colors.grey[900], 0.12)}`,

        `0px 9px 11px -5px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 18px 28px 2px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 7px 34px 6px ${rgba(colors.grey[900], 0.12)}`,

        `0px 9px 12px -6px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 19px 29px 2px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 7px 36px 6px ${rgba(colors.grey[900], 0.12)}`,

        `0px 10px 13px -6px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 20px 31px 3px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 8px 38px 7px ${rgba(colors.grey[900], 0.12)}`,

        `0px 10px 13px -6px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 21px 33px 3px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 8px 40px 7px ${rgba(colors.grey[900], 0.12)}`,

        `0px 10px 14px -6px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 22px 35px 3px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 8px 42px 7px ${rgba(colors.grey[900], 0.12)}`,

        `0px 11px 14px -7px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 23px 36px 3px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 9px 44px 8px ${rgba(colors.grey[900], 0.12)}`,

        `0px 11px 15px -7px ${rgba(
            colors.grey[900],
            0.2,
        )},0px 24px 38px 3px ${rgba(
            colors.grey[900],
            0.14,
        )},0px 9px 46px 8px ${rgba(colors.grey[900], 0.12)}`,
    ],
    typography: {
        htmlFontSize: 16,
        fontFamily: `"effra", "Helvetica Neue", "Arial", sans-serif`,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: family,
            fontWeight: 300,
            fontSize: modularScale(5, "1rem", "perfectFourth"),
            lineHeight: modularScale(5, 1, "minorSecond"),
            letterSpacing: "0.079rem",
        },
        h2: {
            fontFamily: family,
            fontWeight: 300,
            fontSize: modularScale(4, "1rem", "perfectFourth"),
            lineHeight: modularScale(4, 1, "minorSecond"),
            letterSpacing: "-0.061rem}",
        },
        h3: {
            fontFamily: family,
            fontWeight: 300,
            fontSize: modularScale(4, "1rem", "perfectFourth"),
            lineHeight: modularScale(4, 1, "minorSecond"),
            letterSpacing: "-0.014rem",
        },
        h4: {
            fontFamily: family,
            fontWeight: 400,
            fontSize: modularScale(3, "1rem", "perfectFourth"),
            lineHeight: modularScale(3, 1, "minorSecond"),
            letterSpacing: "0.018rem",
        },
        h5: {
            fontFamily: family,
            fontWeight: 700,
            fontSize: modularScale(-1, "1rem", "perfectFourth"),
            lineHeight: modularScale(2, 1, "minorSecond"),
            letterSpacing: "0.128rem",
            textTransform: "uppercase",
        },
        h6: {
            fontFamily: family,
            fontWeight: 700,
            fontSize: modularScale(1, "1rem", "perfectFourth"),
            lineHeight: modularScale(1, 1, "minorSecond"),
            letterSpacing: "0.022rem",
        },
        subtitle1: {
            fontFamily: family,
            fontWeight: 400,
            fontSize: modularScale(0, "1rem", "perfectFourth"),
            lineHeight: modularScale(2, 1, "minorSecond"),
            letterSpacing: "0.00938rem",
        },
        subtitle2: {
            fontFamily: family,
            fontWeight: 400,
            fontSize: modularScale(-1, "1rem", "perfectFourth"),
            lineHeight: modularScale(1, 1, "minorSecond"),
            letterSpacing: "0.00938rem",
        },
        body1: {
            fontFamily: family,
            fontWeight: 400,
            fontSize: modularScale(0, "1rem", "perfectFourth"),
            lineHeight: modularScale(0, 1, "minorSecond"),
            letterSpacing: "0.00938rem",
        },
        body2: {
            fontFamily: family,
            fontWeight: 400,
            fontSize: modularScale(-1, "1rem", "perfectFourth"),
            lineHeight: modularScale(-1, 1, "minorSecond"),
            letterSpacing: "0.0107rem",
        },
        button: {
            fontFamily: family,
            fontWeight: 500,
            fontSize: modularScale(0, "1rem", "perfectFourth"),
            lineHeight: modularScale(1, 1, "minorSecond"),
            letterSpacing: "0.02857rem",
            textTransform: "uppercase",
        },
        caption: {
            fontFamily: family,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: modularScale(-1, "1rem", "perfectFourth"),
            lineHeight: modularScale(1, 1, "minorSecond"),
            letterSpacing: "0.03333rem",
        },
    },
    spacing: {
        xxs: modularScale(-3, "2rem", "minorThird"),
        xs: modularScale(-2, "2rem", "minorThird"),
        sm: modularScale(-1, "2rem", "minorThird"),
        md: modularScale(0, "2rem", "minorThird"),
        lg: modularScale(1, "2rem", "minorThird"),
        xl: modularScale(2, "2rem", "minorThird"),
        xxl: modularScale(3, "2rem", "minorThird"),
    },
    shape: {
        borderRadius: {
            sm: "0.75rem",
            md: "1rem",
            lg: "1.5rem",
        },
    },
    transitions: {
        easing: {},
        durations: {},
    },
    zIndex: {},
}

export const TypeSettings = createGlobalStyle`
    html {
        ${props => `
            font-size: ${props.theme.typography.htmlFontSIze}
        `}
    }
    body {
        ${props => css`
            ${props.theme.typography.body1}
        `}
    }
    h1 {
        ${props => css`
            ${props.theme.typography.h1}
        `}
    }
    h2 {
        ${props => css`
            ${props.theme.typography.h2}
        `}
    }
    h3 {
        ${props => css`
            ${props.theme.typography.h3}
        `}
    }
    h4 {
        ${props => css`
            ${props.theme.typography.h4}
        `}
    }
    h5 {
        ${props => css`
            ${props.theme.typography.h5}
        `}
    }
    h6 {
        ${props => css`
            ${props.theme.typography.h6}
        `}
    }

`

export default theme
