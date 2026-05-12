import type {FC} from "react";
import MovieCountriesComponent from "../MovieCountriesComponent/MovieCountriesComponent.tsx";
import MovieLanguagesComponent from "../MovieLanguagesComponent/MovieLanguagesComponent.tsx";
import type {MovieDetailsPropsType} from "../../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";
import MovieCompaniesComponent from "../MovieCompaniesComponent/MovieCompaniesComponent.tsx";


const MovieMetaComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {

    const hours = Math.floor(movieDetails.runtime / 60)
    const minutes = movieDetails.runtime % 60

    return (
        <div className='infoContainer'>
            {movieDetails.production_countries.length > 0 && <MovieCountriesComponent movieDetails={movieDetails}/>}
            {movieDetails.spoken_languages.length > 0 && <MovieLanguagesComponent movieDetails={movieDetails}/>}
            {movieDetails.runtime > 0 && <p>runtime: {hours}h {minutes > 0 && `${minutes}m`}</p>}
            <p>release-date: {new Date (movieDetails.release_date).toLocaleDateString('en-US',{
                year:'numeric',month:'long',day:'numeric'
            })}</p>
            {movieDetails.budget > 0 && <p>budget: {movieDetails.budget.toLocaleString
                                           ('en-US',{style:"currency",currency:'USD'})}</p>}
            {movieDetails.revenue > 0 && <p>revenue: {movieDetails.revenue.toLocaleString
                                            ('en-US',{style:"currency",currency:'USD'})}</p>}

            {movieDetails.production_companies.length > 0 && <MovieCompaniesComponent movieDetails={movieDetails}/>}

            {movieDetails.adult && <p>18+</p>}
            {movieDetails.homepage && <a href={movieDetails.homepage} target='_blank'>Home Page</a>}


        </div>
    );
};

export default MovieMetaComponent;