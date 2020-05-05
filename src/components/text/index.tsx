/**
 * Text Elements
 * ----------------------------------------------------------------------------
 *
 * Example usage:
 *      import { Copy, H2 } from "components/text"
 *
 *      <Copy variant="secondary">Lorem ipsum dolor</Copy>
 *
 *      <H2 inverted={true}>Lorem Ipsum</H2>
 */
import styled, { css } from "styled-components/macro"

/**
 * Types
 * ----------------------------------------------------------------------------
 */
interface Props {
    readonly variant?: "default" | "secondary" | "disabled" | "link" | "error"
    readonly size?: "small" | "medium" | "large"
    readonly inverted?: boolean
    readonly noWrap?: boolean
}

/**
 * Shared
 * ----------------------------------------------------------------------------
 */
export const Body = css<Props>`
    display: block;
    font-family: ${props => props.theme.typography.fontFamily};
    font-weight: ${props => props.theme.typography.fontWeightRegular};
    font-size: 16px;

    /* Color Variants */
    ${props => {
        const { inverted } = props
        const { colors } = props.theme
        if (props.variant === "secondary") {
            return css`
                color: ${inverted
                    ? "rgba(255,255,255,0.80)"
                    : colors.gray["600"]};
            `
        }
        if (props.variant === "disabled") {
            return css`
                color: ${inverted
                    ? "rgba(255,255,255,0.45)"
                    : colors.gray["500"]};
            `
        }
        if (props.variant === "link") {
            return css`
                color: ${inverted ? colors.blue.medium : colors.purple.main};
            `
        }
        if (props.variant === "error") {
            return css`
                color: ${inverted ? colors.red.medium : colors.red.main};
            `
        }
        return css`
            color: ${inverted ? colors.white : colors.gray["900"]};
        `
    }}

    /* No Wrap */
    ${props =>
        props.noWrap &&
        css`
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        `}
`

/**
 * Basic
 * ----------------------------------------------------------------------------
 */
export const Copy = styled.p<Props>`
    ${Body}
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.06px;

    /* Sizes */
    ${props =>
        props.size === "small" &&
        css`
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0.05px;
        `}
    ${props =>
        props.size === "large" &&
        css`
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.07px;
        `}
`
export const Caption = styled.em<Props>`
    ${Body}
    font-size: 15px;
    font-style: italic;
    letter-spacing: 0.31px;
    line-height: 18px;
`
export const Label = styled.label<Props>`
    ${Body}
    font-size: 12px;
    letter-spacing: 0.75px;
    line-height: 12px;
    text-transform: uppercase;
`

/**
 * Headings
 * ----------------------------------------------------------------------------
 */
export const Title = styled.p<Props>`
    ${Body}
    font-size: 21px;
    line-height: 24px;
    letter-spacing: 0.08px;
`
export const Subtitle = styled.p<Props>`
    ${Body}
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.07px;
`
export const H1 = styled.h1<Props>`
    ${Body}
    font-weight: ${props => props.theme.typography.fontWeightLight};
    font-size: 52px;
    line-height: 62px;
    letter-spacing: 0.19px;
    margin: 0;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 44px;
        line-height: 46px;
        letter-spacing: 0.16px;
    }
`
export const H2 = styled.h2<Props>`
    ${Body}
    font-weight: ${props => props.theme.typography.fontWeightLight};
    font-size: 44px;
    line-height: 52px;
    letter-spacing: 0.16px;
    margin: 0;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 34px;
        line-height: 41px;
        letter-spacing: 0.12px;
    }
`
export const H3 = styled.h3<Props>`
    ${Body}
    font-weight: ${props => props.theme.typography.fontWeightLight};
    font-size: 40px;
    line-height: 47px;
    letter-spacing: 0.16px;
    margin: 0;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.09px;
    }
`
export const H4 = styled.h4<Props>`
    ${Body}
    font-weight: ${props => props.theme.typography.fontWeightLight};
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.15px;
    margin: 0;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 21px;
        line-height: 25px;
        letter-spacing: 0.08px;
    }
`
export const H5 = styled.h5<Props>`
    ${Body}
    font-weight: ${props => props.theme.typography.fontWeightMedium};
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 2.14px;
    text-transform: uppercase;
    margin: 0;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 2px;
    }
`
export const H6 = styled.h6<Props>`
    ${Body}
    font-weight: ${props => props.theme.typography.fontWeightMedium};
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.06px;
    margin: 0;
`
