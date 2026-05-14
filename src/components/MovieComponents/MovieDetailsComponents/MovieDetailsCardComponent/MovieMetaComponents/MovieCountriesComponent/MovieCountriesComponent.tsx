import type {FC} from "react";
import type {MovieDetailsPropsType} from "../../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";


const MovieCountriesComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='gridForInfo'>
            <p>countries: </p>
            <p>{movieDetails.production_countries.map(
                (country) => country.name).join(", ")}</p>

        </div>
    );
};

export default MovieCountriesComponent;