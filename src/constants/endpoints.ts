
export const endpoints = {
    movies:{
        allMovies: (page:number) =>{
            return `discover/movie?page=${page}`
        },
    }
}
