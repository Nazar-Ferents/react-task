import type {FC} from "react";
import type {MovieDetailsPropsType} from "../../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";


const MovieLanguagesComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='languages-container'>
            <p>languages:</p>
            <ul>
                {movieDetails.spoken_languages.map(
                    (language) => (<li key={language.iso_639_1}>{language.english_name}</li>))}
            </ul>

        </div>
    );
};

export default MovieLanguagesComponent;