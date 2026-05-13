
export const endpoints = {
    movies:{
        allMovies: (page:number) =>{
            return `discover/movie?page=${page}`
        },
        allGenres: 'genre/movie/list',

        allMoviesByGenre: ({genreID,page}:{genreID:number,page:number}) =>{
            return `discover/movie?with_genres=${genreID}&page=${page}`
        },
        movieByID: (movieID:number) =>{
            return `movie/${movieID}`
        },
        searchMovie: ({title,page}:{title:string,page:number})=> {
            return `search/movie?query=${title}&include_adult=false&page=${page}`
        }
    }
}
