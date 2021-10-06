import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Row.css'

const imageBaseUrl = "https://image.tmdb.org/t/p/original/"

function Row({title="", fetchUrl}) {
    const [movies, setMovies] = useState([])
    // const [state, setState] = useState("")

    useEffect(() => {
        
        async function fetchMyUrl(fetchUrl){
            let res = await fetch(fetchUrl)
            res = await res.json()
            setMovies(res.results)
        }

        fetchMyUrl(fetchUrl)
    }, [fetchUrl])

    // To remove data when some of the information is unavailable
    // Sometimes work, sometimes not. Don't know why!
    function handleData(){
        for(let i = 0; i < movies.length; i++){
            if((!movies[i].poster_path) || (!movies[i].vote_average)){
                movies.pop(i);
            }
        }
    }
    handleData();
    console.log(movies)

    return (
        <div>
            <h4 id="title">{title}</h4>
            {/* <hr /> */}
            <div className="row">
                {
                    movies.map((item) => (
                        <div className="card">

                            
                            <Link to={{
                                pathname: "/movie-detail", 
                                state:{
                                    movie_id: item.id
                                }
                            }}>
                                <img src={`${imageBaseUrl}${item.poster_path}`} alt={item.title} />
                            </Link>

                            <div className="container">
                                <h4>{item.title} ({item.release_date.slice(0, 4)})</h4>
                                <p>⭐{item.vote_average.toFixed(1)}</p>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Row
