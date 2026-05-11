import {posterURL} from "../../../../../../config/constants.ts";
import type {MovieDetailsPropsType} from "../../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";
import type {FC} from "react";

const MovieCompaniesComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='companies-container'>
            <p>production companies:</p>
            <ul>
                {movieDetails.production_companies.map((company) =>
                    (<li key={company.id} className='company'>
                        <p>{company.name}</p>
                        {company.logo_path &&
                            (<img src={`${posterURL}${company.logo_path}`} alt={company.name}/>)}
                    </li>))}
            </ul>

        </div>
    );
};

export default MovieCompaniesComponent;