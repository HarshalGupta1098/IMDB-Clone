const apikey = 'c0209a77100c4798afea253d9010d2ee'
const urls = {
    popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`,
    topRated: `
    https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`,
    latest: `https://api.themoviedb.org/3/movie/latest?api_key=${apikey}&language=en-US`
}

export{
    urls,
    apikey
}