import type {FC} from "react";
import type {IMovie} from "../../../modules/MoviesModules/IMovie.ts";
import type {IGenre} from "../../../modules/GenresModules/IGenres.ts";
import {GenreBadge} from "../../BadgeComponents/BadgeComponent.tsx";
import StarComponent from "../../StarComponents/StarComponent.tsx";

type MovieListCardComponentPropsType ={
    movie: IMovie,
    genres: IGenre[]
}
export const MovieListCardComponent:FC<MovieListCardComponentPropsType> = ({movie,genres}) => {

    const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id))
    return (
        <div>
            <img src={poster} alt="PosterToMovie"/>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <div className='containerForBadges'>
                {movieGenres.map(movieGenre => (<GenreBadge key={movieGenre.id} name={movieGenre.name} genreID={movieGenre.id}/>))}
            </div>
            <StarComponent rating={movie.vote_average}/>

        </div>
    );
};

