import type {FC} from "react";
import type {MovieDetailsPropsType} from "../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";
import './MovieHeader.css'

const MovieHeaderComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='movieTitle'>
            <p>{movieDetails.status}</p>
            <h1>{movieDetails.title}</h1>
            {movieDetails.tagline && <p className='quote'>"{movieDetails.tagline}"</p>}
            {movieDetails.vote_average > 0 && <p className='rate'>{movieDetails.vote_average.toFixed(1)}</p>}

        </div>
    );
};

export default MovieHeaderComponent;