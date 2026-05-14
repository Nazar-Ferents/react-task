import type {FC} from "react";
import {posterURL} from "../../../../../constants/constants.ts";
import MovieHeaderComponent from "../MovieHeaderComponent/MovieHeaderComponent.tsx";
import MovieMetaComponent from "../MovieMetaComponents/MovieMetaComponent/MovieMetaComponent.tsx";
import type {MovieDetailsPropsType} from "../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";
import './MovieDetailsCard.css'


const MovieDetailsCardComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    const poster = `${posterURL}${movieDetails.poster_path}`



    return (
        <div className='movieInfo'>
            {movieDetails.poster_path ?
                (<img src={poster} alt={movieDetails.title} className='posterInMovieDetails'/>) :
                (<div className='missingPoster'>'Poster to film missing'</div>)}
            <div className='movieInfoCard'>
                <MovieHeaderComponent movieDetails={movieDetails}/>
                <MovieMetaComponent movieDetails={movieDetails} />
            </div>

        </div>
    );
};

export default MovieDetailsCardComponent;