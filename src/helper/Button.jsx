import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border: 1px solid #eee;
    box-sizing: border-box;
    padding: 7px 15px;
`

export default function Button({ className, onClick, text }) {
    return (
        <Button className={`button ${className}`} onClick={onClick}>
            {text}
        </Button>
    )
}
