import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

const Form = styled.form`
    display: block;
    margin: 0 auto;
    max-width: 600px;
`
const Label = styled.label`
    border: 1px solid #eee;
    padding: 7px 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
        width: 20px;
        height: 20px;
    }
`
const Input = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    font-size: 2em;
    box-sizing: border-box;
    outline: none;
`
export default function Search(props) {
    const [term, setTerm] = useState('')

    function callGetMovie(e) {
        e.preventDefault()
        props.getMovie(term)
    }
    return (
        <Form onSubmit={callGetMovie}>
            <Label htmlFor="search">
                {/* TO DO: make automated placeholder */}
                <Input
                    type="text"
                    id="search"
                    placeholder="Movie title"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <FaSearch width="20" height="20" />
            </Label>
        </Form>
    )
}
