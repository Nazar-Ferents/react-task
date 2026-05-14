import type {FC} from "react";
import type {MovieDetailsPropsType} from "../../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";


const MovieLanguagesComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='gridForInfo'>
            <p>languages:</p>
            <p>
                {movieDetails.spoken_languages.map(
                    (language) => language.english_name).join(", ")}
            </p>

        </div>
    );
};

export default MovieLanguagesComponent;