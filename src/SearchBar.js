import React, { useState } from "react"
import Row from './Row'
import {apikey} from './Requests'
import './SearchBar.css'

function SearchBar() {
    const [search, setSearch] = useState("")
    // Think of a way to call useEffect only when you have given a query for searchMovie
    // Right now, default query value = avengers
    const searchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=${search}&page=1&include_adult=false`
    // Using handleSearch(), I can now search for movies, but, sometimes it gives 
    // unexpected results like 
    // "Unhandled Rejection (TypeError): Cannot read properties of undefined (reading 'slice')"
    // I don't know how to solve this error for now.
    function handleSearch(){
        if(search !== ""){
            return <Row fetchUrl={searchMovie} />
        }
    }
    return (
        <div className="searchbar">
            <input type="text" placeholder="Search Movies" value={search} onChange={(event) => setSearch(event.target.value)} />

            <div className="searchbar__results">
                {handleSearch()}
            </div>
        </div>
    )
}

export default SearchBar
