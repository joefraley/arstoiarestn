/**
 * Text Elements
 * ----------------------------------------------------------------------------
 */
import styled, { css } from "styled-components/macro"

/**
 * Types
 * ----------------------------------------------------------------------------
 */
interface Props {
    readonly inverted?: boolean
    readonly variant?: "primary" | "secondary" | "disabled" | "link" | "error"
    readonly size?: "small" | "medium" | "large"
    readonly noWrap?: boolean
}

/**
 * Shared
 * ----------------------------------------------------------------------------
 */
export const Body = css<Props>`
    display: block;
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 18px;
    font-weight: ${props => props.theme.typography.fontWeightRegular};
    color: ${props =>
        props.inverted
            ? props.theme.colors.white
            : props.theme.colors.grey["900"]};
    ${props => props.noWrap && "white-space: nowrap"};
    ${props => props.noWrap && "overflow: hidden;"};
    ${props => props.noWrap && "text-overflow: ellipsis;"};
`
export const Heading = css<Props>`
    ${Body}
    margin: 0;
    white-space: ${props => (props.noWrap ? "nowrap" : "pre-wrap")};
    ${props => props.noWrap && "overflow: hidden;"}
    ${props => props.noWrap && "text-overflow: ellipsis;"};
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
    color: ${props =>
        props.inverted
            ? props.theme.colors.white
            : props.theme.colors.grey["600"]};
`

/**
 * Headings
 * ----------------------------------------------------------------------------
 */
export const Title = styled.p<Props>`
    ${Heading}
    font-size: 21px;
    line-height: 24px;
    letter-spacing: 0.08px;
`
export const Subtitle = styled.p<Props>`
    ${Heading}
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.07px;
`
export const H1 = styled.h1<Props>`
    ${Heading}
    font-weight: ${props => props.theme.typography.fontWeightLight};
    font-size: 52px;
    line-height: 62px;
    letter-spacing: 0.19px;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 44px;
        line-height: 46px;
        letter-spacing: 0.16px;
    }
`
export const H2 = styled.h2<Props>`
    ${Heading}
    font-weight: ${props => props.theme.typography.fontWeightLight};
    font-size: 44px;
    line-height: 52px;
    letter-spacing: 0.16px;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 34px;
        line-height: 41px;
        letter-spacing: 0.12px;
    }
`
export const H3 = styled.h3<Props>`
    ${Heading}
    font-weight: ${props => props.theme.typography.fontWeightLight};
    font-size: 40px;
    line-height: 47px;
    letter-spacing: 0.16px;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.09px;
    }
`
export const H4 = styled.h4<Props>`
    ${Heading}
    font-weight: ${props => props.theme.typography.fontWeightLight};
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.15px;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 21px;
        line-height: 25px;
        letter-spacing: 0.08px;
    }
`
export const H5 = styled.h5<Props>`
    ${Heading}
    font-weight: ${props => props.theme.typography.fontWeightMedium};
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 2.14px;
    text-transform: uppercase;
    @media (max-width: ${props => props.theme.breakpoints.sm}px) {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 2px;
    }
`
export const H6 = styled.h6<Props>`
    ${Heading}
    font-weight: ${props => props.theme.typography.fontWeightMedium};
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.06px;
`
