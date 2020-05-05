import React from "react"
import styled from "styled-components/macro"
import { Copy, Caption, Label } from "./index"
import { Title, Subtitle } from "./index"
import { H1, H2, H3, H4, H5, H6 } from "./index"

export default { title: "Text" }

const sample = "The quick brown fox jumps over the lazy dog"
const Wrap = styled.div`
    display: flex;
    width: 100%;
`
const LightWrap = styled.div`
    width: 50%;
    background: ${props => props.theme.colors.white};
    padding: 30px;
`
const DarkWrap = styled.div`
    width: 50%;
    background: ${props => props.theme.colors.purple.main};
    padding: 30px;
`
const Example = styled.div`
    margin: 15px 0px;
`

export const Default = () => {
    return (
        <Wrap>
            <LightWrap>
                <Example>
                    <Label>Copy</Label>
                    <Copy noWrap={true}>{sample}</Copy>
                </Example>
                <Example>
                    <Label>Copy (large)</Label>
                    <Copy noWrap={true} size="large">
                        {sample}
                    </Copy>
                </Example>
                <Example>
                    <Label>Copy (small)</Label>
                    <Copy noWrap={true} size="small">
                        {sample}
                    </Copy>
                </Example>
                <Example>
                    <Label>Caption</Label>
                    <Caption noWrap={true}>{sample}</Caption>
                </Example>
                <Example>
                    <Label>Label</Label>
                    <Label noWrap={true}>{sample}</Label>
                </Example>
                <Example>
                    <Label>Title</Label>
                    <Title noWrap={true}>{sample}</Title>
                </Example>
                <Example>
                    <Label>Subtitle</Label>
                    <Subtitle noWrap={true}>{sample}</Subtitle>
                </Example>
                <Example>
                    <Label>H1</Label>
                    <H1 noWrap={true}>{sample}</H1>
                </Example>
                <Example>
                    <Label>H2</Label>
                    <H2 noWrap={true}>{sample}</H2>
                </Example>
                <Example>
                    <Label>H3</Label>
                    <H3 noWrap={true}>{sample}</H3>
                </Example>
                <Example>
                    <Label>H4</Label>
                    <H4 noWrap={true}>{sample}</H4>
                </Example>
                <Example>
                    <Label>H5</Label>
                    <H5 noWrap={true}>{sample}</H5>
                </Example>
                <Example>
                    <Label>H6</Label>
                    <H6 noWrap={true}>{sample}</H6>
                </Example>
            </LightWrap>
            <DarkWrap>
                <Example>
                    <Label inverted={true}>Copy</Label>
                    <Copy inverted={true} noWrap={true}>
                        {sample}
                    </Copy>
                </Example>
                <Example>
                    <Label inverted={true}>Copy (large)</Label>
                    <Copy inverted={true} noWrap={true} size="large">
                        {sample}
                    </Copy>
                </Example>
                <Example>
                    <Label inverted={true}>Copy (small)</Label>
                    <Copy inverted={true} noWrap={true} size="small">
                        {sample}
                    </Copy>
                </Example>
                <Example>
                    <Label inverted={true}>Caption</Label>
                    <Caption inverted={true} noWrap={true}>
                        {sample}
                    </Caption>
                </Example>
                <Example>
                    <Label inverted={true}>Label</Label>
                    <Label inverted={true} noWrap={true}>
                        {sample}
                    </Label>
                </Example>
                <Example>
                    <Label inverted={true}>Title</Label>
                    <Title inverted={true} noWrap={true}>
                        {sample}
                    </Title>
                </Example>
                <Example>
                    <Label inverted={true}>Subtitle</Label>
                    <Subtitle inverted={true} noWrap={true}>
                        {sample}
                    </Subtitle>
                </Example>
                <Example>
                    <Label inverted={true}>H1</Label>
                    <H1 inverted={true} noWrap={true}>
                        {sample}
                    </H1>
                </Example>
                <Example>
                    <Label inverted={true}>H2</Label>
                    <H2 inverted={true} noWrap={true}>
                        {sample}
                    </H2>
                </Example>
                <Example>
                    <Label inverted={true}>H3</Label>
                    <H3 inverted={true} noWrap={true}>
                        {sample}
                    </H3>
                </Example>
                <Example>
                    <Label inverted={true}>H4</Label>
                    <H4 inverted={true} noWrap={true}>
                        {sample}
                    </H4>
                </Example>
                <Example>
                    <Label inverted={true}>H5</Label>
                    <H5 inverted={true} noWrap={true}>
                        {sample}
                    </H5>
                </Example>
                <Example>
                    <Label inverted={true}>H6</Label>
                    <H6 inverted={true} noWrap={true}>
                        {sample}
                    </H6>
                </Example>
            </DarkWrap>
        </Wrap>
    )
}
