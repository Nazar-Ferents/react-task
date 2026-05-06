import type {FC} from "react";
import type {IMovie} from "../../../modules/MoviesModules/IMovie.ts";
import type {IGenre} from "../../../modules/GenresModules/IGenres.ts";
import {GenreBadge} from "../../Badges/BadgeComponent.tsx";

type MovieListCardComponentPropsType ={
    movie: IMovie,
    genres: IGenre[],
}
export const MovieListCard:FC<MovieListCardComponentPropsType> = ({movie,genres}) => {
    const poster = `https://image.tmdb.org/t/p/original/${movie.poster_path}`

    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id))


    console.log(movieGenres)  // виправити це
    return (
        <div>
            <img src={poster} alt={'posterToMovie'}/>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <div className='containerForBadges'>
                {movieGenres.map(movieGenre => (
                    <GenreBadge key={movieGenre.id} name={movieGenre.name}/>
                ))}</div>

        </div>
    );
};


