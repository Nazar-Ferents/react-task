import {posterURL} from "../../../../../../constants/constants.ts";
import type {MovieDetailsPropsType} from "../../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";
import type {FC} from "react";
import './MovieCompanies.css'

const MovieCompaniesComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {
    return (
        <div className='gridForInfo'>
            <p>production companies:</p>
            <div>
                {movieDetails.production_companies.map((company) =>
                    (<div key={company.id} className='company'>
                        <p>{company.name} {company.origin_country && `(${company.origin_country})`}</p>
                        {company.logo_path &&
                            (<img src={`${posterURL}${company.logo_path}`} alt={company.name} className='logoForCompanies'/>)}
                    </div>))}
            </div>

        </div>
    );
};

export default MovieCompaniesComponent;