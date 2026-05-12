import type {FC} from "react";
import {backgroundURL, posterURL} from "../../../../../constants/constants.ts";
import {GenreBadge} from "../../../../BadgeComponents/BadgeComponent.tsx";
import MovieHeaderComponent from "../MovieHeaderComponent/MovieHeaderComponent.tsx";
import MovieMetaComponent from "../MovieMetaComponents/MovieMetaComponent/MovieMetaComponent.tsx";
import type {MovieDetailsPropsType} from "../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";


const MovieDetailsCardComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    const poster = `${posterURL}${movieDetails.poster_path}`
    const backgroundIMG = movieDetails.backdrop_path ? `${posterURL}${movieDetails.backdrop_path}` : backgroundURL


    return (
        <div className='movieInfo'>
            {movieDetails.poster_path ?
                (<img src={poster} alt={movieDetails.title} className='poster'/>) :
                (<div className='missingPoster'>'Poster to film missing'</div>)}

            <img src={backgroundIMG} alt="BackgroundToMovie" className='BackgroundIMG'/>
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