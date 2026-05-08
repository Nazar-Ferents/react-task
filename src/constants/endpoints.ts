
export const endpoints = {
    movies:{
        allMovies: (page:number) =>{
            return `discover/movie?page=${page}`
        },
        allGenres: 'genre/movie/list',

        allMoviesByGenre: (genreID:number) =>{
            return `discover/movie?with_genres=${genreID}`
        }
    }
}
