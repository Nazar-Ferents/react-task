import type {FC} from "react";
import type {IMovie} from "../../../../modules/MoviesModules/IMovie.ts";
import type {IGenre} from "../../../../modules/GenresModules/IGenres.ts";
import {GenreBadge} from "../../../BadgeComponents/BadgeComponent.tsx";
import StarComponent from "../../../StarComponents/StarComponent.tsx";
import {Link} from "react-router-dom";
import {posterURL} from "../../../../constants/constants.ts";


type MovieListCardComponentPropsType ={
    movie: IMovie,
    genres: IGenre[]
}

export const MovieListCardComponent:FC<MovieListCardComponentPropsType> = ({movie,genres}) => {

    const poster = `${posterURL}${movie.poster_path}`
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id))


    return (

        <div className='movieCard' >
            <Link to={`/movie/${movie.id}`} className='click-container'>

                    {movie.poster_path ? (<img className='movieCardPoster' src={poster} alt="PosterToMovie"/>) :
                        (<div className='missingPoster'>'Poster to film missing'</div>)}

                    <h3 className='movieCardTitle' >{movie.title}</h3>
                    <p className='movieCardOverview'>{movie.overview}</p>

         <div className='bottom-block'>
             <div className='containerForBadges'>
                 {movieGenres.map(movieGenre =>
                     (<GenreBadge key={movieGenre.id} name={movieGenre.name} genreID={movieGenre.id}/>))}
             </div>
             <StarComponent rating={movie.vote_average}/>
         </div>

            </Link>


        </div>
    );
};

