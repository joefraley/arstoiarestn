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
    readonly variant?: "primary" | "secondary" | "disabled" | "link"
    readonly noWrap?: boolean
}

/**
 * Shared
 * ----------------------------------------------------------------------------
 */
export const Body = css<Props>`
    display: block;
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: 1rem;
    font-weight: 400;
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
export const P = styled.p<Props>`
    ${Body}
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.07px;
    padding-bottom: 10px;
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
    font-weight: 300;
    font-size: 52px;
    line-height: 62px;
    letter-spacing: 0.19px;
`
export const H2 = styled.h2<Props>`
    ${Heading}
    font-weight: 300;
    font-size: 44px;
    line-height: 52px;
    letter-spacing: 0.16px;
`
export const H3 = styled.h3<Props>`
    ${Heading}
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
    letter-spacing: 0.16px;
`
export const H4 = styled.h4<Props>`
    ${Heading}
    font-weight: 300;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.15px;
`
export const H5 = styled.h5<Props>`
    ${Heading}
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 2.14px;
    text-transform: uppercase;
`
export const H6 = styled.h6<Props>`
    ${Heading}
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.06px;
`
