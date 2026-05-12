import type {FC} from "react";
import type {IMovie} from "../../../../modules/MoviesModules/IMovie.ts";
import type {IGenre} from "../../../../modules/GenresModules/IGenres.ts";
import {GenreBadge} from "../../../BadgeComponents/BadgeComponent.tsx";
import StarComponent from "../../../StarComponents/StarComponent.tsx";
import {useNavigate} from "react-router-dom";
import {posterURL} from "../../../../constants/constants.ts";


type MovieListCardComponentPropsType ={
    movie: IMovie,
    genres: IGenre[]
}

export const MovieListCardComponent:FC<MovieListCardComponentPropsType> = ({movie,genres}) => {

    const poster = `${posterURL}${movie.poster_path}`
    const movieGenres = genres.filter(genre => movie.genre_ids.includes(genre.id))
    const navigate = useNavigate()
    const handleOnClick = () => {

        navigate(`/movie/${movie.id}`)
    }
    return (

        <div className='movieCard'>
            <div onClick={handleOnClick} >
                {movie.poster_path ? (<img src={poster} alt="PosterToMovie"/>) :
                    (<div className='missingPoster'>'Poster to film missing'</div>)}

                <h3>{movie.title}</h3>
            </div>
            <p>{movie.overview}</p>
            <div className='containerForBadges'>
                {movieGenres.map(movieGenre =>
                    (<GenreBadge key={movieGenre.id} name={movieGenre.name} genreID={movieGenre.id}/>))}
            </div>
            <StarComponent rating={movie.vote_average}/>

        </div>
    );
};

