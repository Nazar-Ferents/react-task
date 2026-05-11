import type {FC} from "react";
import {posterURL} from "../../../../../config/constants.ts";
import {GenreBadge} from "../../../../BadgeComponents/BadgeComponent.tsx";
import MovieHeaderComponent from "../MovieHeaderComponent/MovieHeaderComponent.tsx";
import MovieMetaComponent from "../MovieMetaComponents/MovieMetaComponent/MovieMetaComponent.tsx";
import type {MovieDetailsPropsType} from "../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";


const MovieDetailsCardComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    const poster = `${posterURL}${movieDetails.poster_path}`
    const backgroundIMG = `${posterURL}${movieDetails.backdrop_path}`


    return (
        <div className='movieInfo'>
            <img src={poster} alt="PosterToMovie" className='poster'/>
            <img src={backgroundIMG} alt="BackgroundToMovie" className='backgroundIMG'/>
            <div className='movieInfoCard'>
                <MovieHeaderComponent movieDetails={movieDetails}/>
                <MovieMetaComponent movieDetails={movieDetails} />
                <div className='containerForBadges'>
                    {movieDetails.genres.map(genre =>
                        (<GenreBadge genreID={genre.id} name={genre.name} key={genre.id}/>))}
                </div>
                <div className='overview'>
                    <p>{movieDetails.overview}</p>
                </div>
            </div>

        </div>
    );
};

export default MovieDetailsCardComponent;