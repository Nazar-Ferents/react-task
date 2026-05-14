import type {FC} from "react";
import MovieCountriesComponent from "../MovieCountriesComponent/MovieCountriesComponent.tsx";
import MovieLanguagesComponent from "../MovieLanguagesComponent/MovieLanguagesComponent.tsx";
import type {MovieDetailsPropsType} from "../../../../../../modules/MoviesModules/MovieDetailsPropsType.ts";
import MovieCompaniesComponent from "../MovieCompaniesComponent/MovieCompaniesComponent.tsx";
import {GenreBadge} from "../../../../../BadgeComponents/BadgeComponent.tsx";


const MovieMetaComponent:FC<MovieDetailsPropsType> = ({movieDetails}) => {

    const hours = Math.floor(movieDetails.runtime / 60)
    const minutes = movieDetails.runtime % 60

    return (
        <div className='infoContainer'>
            {movieDetails.production_countries.length > 0 && <MovieCountriesComponent movieDetails={movieDetails}/>}
            {movieDetails.spoken_languages.length > 0 && <MovieLanguagesComponent movieDetails={movieDetails}/>}

            <div className='gridForInfo'>
                {movieDetails.runtime > 0 &&<p>runtime:</p>}
                {movieDetails.runtime > 0 && <p> {hours}h {minutes > 0 && `${minutes}m`}</p>}
                {movieDetails.release_date.length > 0 &&<p>release-date: </p>}
                {movieDetails.release_date.length > 0 && <p>
                    {new Date (movieDetails.release_date).toLocaleDateString('en-US',{
                    year:'numeric',month:'long',day:'numeric'
                })}</p>}
                {movieDetails.budget > 0 &&<p>budget: </p>}
                {movieDetails.budget > 0 && <p>{movieDetails.budget.toLocaleString
                ('en-US',{style:"currency",currency:'USD'})}</p>}
                {movieDetails.revenue > 0 &&<p>revenue:</p>}
                {movieDetails.revenue > 0 && <p> {movieDetails.revenue.toLocaleString
                ('en-US',{style:"currency",currency:'USD'})}</p>}
            </div>
            {movieDetails.production_companies.length > 0 && <MovieCompaniesComponent movieDetails={movieDetails}/>}
            {movieDetails.adult && <p>18+</p>}
            {movieDetails.homepage && <a href={movieDetails.homepage} target='_blank'>Home Page</a>}

            <div className='containerForBadges'>
                {movieDetails.genres.map(genre =>
                    (<GenreBadge genreID={genre.id} name={genre.name} key={genre.id}/>))}
            </div>
            <div className='overviewFull'>
                <p>{movieDetails.overview}</p>
            </div>

        </div>
    );
};

export default MovieMetaComponent;