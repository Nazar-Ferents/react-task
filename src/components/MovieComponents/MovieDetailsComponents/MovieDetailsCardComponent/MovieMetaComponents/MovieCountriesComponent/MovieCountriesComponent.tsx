import type {FC} from "react";
import type {MovieDetailsPropsType} from "../../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";


const MovieCountriesComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='countries-container'>
            <p>countries: </p>
            <ul>{movieDetails.production_countries.map(
                (country) => (<li key={country.iso_3166_1}>{country.name}</li>))}</ul>

        </div>
    );
};

export default MovieCountriesComponent;