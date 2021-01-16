import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Search from '../components/search/Search'
import SingleMovie from '../components/singleMovie/SingleMovie'
import API from '../helper/API'

const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 50px;
    justify-content: center;
`
export default function Movies() {
    const [movies, setMovies] = useState([])
    function getMovie(term) {
        API.get(`/search/${term}`).then((result) => setMovies(result.titles))
    }
    function renderMovies() {
        if (movies.length > 0) {
            return movies.map((item) => <SingleMovie key={item.id} data={item} />)
        }
    }
    return (
        <div>
            <Search getMovie={getMovie} />
            <MoviesGrid>{renderMovies()}</MoviesGrid>
        </div>
    )
}
