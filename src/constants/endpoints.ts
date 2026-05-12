
export const endpoints = {
    movies:{
        allMovies: (page:number) =>{
            return `discover/movie?page=${page}`
        },
        allGenres: 'genre/movie/list',

        allMoviesByGenre: (genreID:number) =>{
            return `discover/movie?with_genres=${genreID}`
        },
        movieByID: (movieID:number) =>{
            return `movie/${movieID}`
        },
        searchMovie: ({title,page}:{title:string,page:number})=> {
            return `search/movie?query=${title}&include_adult=false&page=${page}`
        }
    }
}
