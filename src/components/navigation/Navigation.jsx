import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { small, phone,  } from '../../helper/breakpoints'

const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 15px;
    flex-direction: row;
    font-size: 2em;
`
const ListItem = styled.li`
    display: inline-block;

    a {
        text-decoration: none;
        color: inherit;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
    }
    a:after {
        content: '';
        width: 0%;
        display: inline-block;
        height: 3px;
        margin-top: 5px;
        background-color: #333;
        transition: all 0.2s ease;
    }
    :hover a:after {
        width: 100%;
    }
`
export default function Navigation() {
    const arr = [
        {
            text: 'home',
            path: '/'
        },
        {
            text: 'movies',
            path: '/movies'
        },
        {
            text: 'watchlist',
            path: '/watchlist'
        }
    ]
    function renderListItems() {
        return [...arr].map((item, i) => (
            <ListItem key={i}>
                <Link to={item.path}>{item.text}</Link>
            </ListItem>
        ))
    }
    return (
        <nav>
            <List>{renderListItems()}</List>
        </nav>
    )
}
