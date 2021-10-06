import React, { useEffect, useState } from 'react'
import './MovieDetail.css'
import play from './assests/icons8-play-100.png'
import bookmark from './assests/icons8-bookmark-512.png'

const imageBaseUrl = "https://image.tmdb.org/t/p/original/"

const MovieDetail = (props) => {
    const [moviedata, setMovieData] = useState("")

    const {movie_id} = (props.location && props.location.state) || {}
    console.log("movie id", movie_id)
    // To get cast info, paste "&append_to_response=credits" at the end of getMovieUrl
    const getMovieUrl = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=c0209a77100c4798afea253d9010d2ee&language=en-US&append_to_response=credits`


    useEffect(() => {
        async function fetchMyUrl(getMovieUrl){
            let res = await fetch(getMovieUrl)
            res = await res.json()
            setMovieData(res)
        }

        fetchMyUrl(getMovieUrl)
    }, [getMovieUrl])
    console.log("movie data:", moviedata)

    function getLength(n){
        if(n == null)
            return null
        let hr = Math.floor(n/60)
        let min = n%60
        if(min > 0){
            return [hr + "hr " + min + "min"]
        }
        else{
            return hr+"hr"
        }
    }

    function getDate(date){
        if(date == null)
            return null
        return date.slice(0, 4)
    }

    function getRating(rating){
        if(rating == null)
            return null
        
        return rating.toFixed(1)
    }

    function playTrailer(){
        console.log("playing trailer")
    }

    function addToWishlist(){
        console.log("added to wishlist")
    }

    console.log("movie cast", moviedata.credits.cast)
    const arr = moviedata.credits.cast  
    return (
        <>
            <div>
                <div className="movie_image">
                    <img id="poster" src={`${imageBaseUrl}${moviedata.backdrop_path}`} alt={moviedata.title}/>
                </div>

                <div className="movie_data">
                    <h1>{moviedata.title}</h1>
                    <p>
                        <span>{getRating(moviedata.vote_average) + "  "}</span> 
                        <span>{getLength(moviedata.runtime) + "  "}</span> 
                        <span>{getDate(moviedata.release_date)}</span>
                        {(moviedata.genres)? (moviedata.genres).map((item) => (
                            <span>{"    " + item.name + ", "}</span>
                        )): null}
                    </p><br/>
                    <h2>Overview</h2>
                    <p style={{wordBreak: "break-all"}}>{moviedata.overview}</p><br/>
                    <img id="button"
                        onClick={playTrailer}
                        src={play} />
                    <img id="button" 
                        onClick={addToWishlist}
                        src={bookmark} />
                </div>
            </div>

            <h1 style={{padding: "30px"}}>Cast</h1>
            <div
            style={{
                display: "flex",
                padding: "0px 20px",
                marginBottom: "20px"
            }}
            >
                {
                    
                    (arr.slice(0, 9)).map((item) => (
                        <div className="cast_card">
                            <img 
                            style={{
                                width: "130px", 
                                height: "200px",
                                borderRadius: "15px"
                            }}
                            src={`${imageBaseUrl}${item.profile_path}`} alt={item.name}/>
                            <div className="cast_container">
                                <h4>{item.name}</h4>
                                <p>{item.character}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </>
    )
}

export default MovieDetail
