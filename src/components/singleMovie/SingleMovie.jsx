import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    /* border: 1px solid #eee; */
    background-color: #eee;
    box-shadow: 0 6px 6px rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    font-size: 1em;
`
const Img = styled.img`
    width: 100%;
    height: 300px;
`
const Description = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: left;
`
const Title = styled.h3`
    font-size: 1.5em;
    text-transform: capitalize;
`
export default function SingleMovie({ data }) {
    return (
        <Div id={data.id}>
            <figure>
                <Img src={data.image} alt={data.title} />
            </figure>
            <Description>
                <Title>{data.title}</Title>
            </Description>
        </Div>
    )
}
