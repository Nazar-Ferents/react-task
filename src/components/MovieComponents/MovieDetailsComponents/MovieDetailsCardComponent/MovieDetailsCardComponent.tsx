import type {IMovieDetails} from "../../../../modules/MoviesModules/IMovieDetails.ts";
import type {FC} from "react";
import {posterURL} from "../../../../config/constants.ts";

type MovieDetailsCardType = {
    movieDetails: IMovieDetails,

}
const MovieDetailsCardComponent:FC<MovieDetailsCardType> = ({movieDetails}) => {
    const poster = `${posterURL}${movieDetails.poster_path}`

    return (
        <div>
            <img src={poster} alt="PosterToMovie"/>
            <h1>{movieDetails.title}</h1>

        </div>
    );
};

export default MovieDetailsCardComponent;