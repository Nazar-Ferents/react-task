import {type FC, useEffect} from "react";
import {useAppSelector} from "../../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../../redux/slices/movieSlice.ts";
import MovieDetailsCardComponent from "../MovieDetailsCardComponent/MovieDetailsCardComponent/MovieDetailsCardComponent.tsx";
import {backgroundURL, posterURL} from "../../../../constants/constants.ts";
import './MovieDetailsPage.css'

type PropsType = {
    movieID: string
}
const MovieDetailsPageComponent:FC<PropsType> = ({movieID}) => {

    const {movieDetails} = useAppSelector(
       ({movieSlice}) => movieSlice)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(movieID){
            dispatch(movieSliceActions.loadMoviesByID(Number(movieID)))

        }
    }, [movieID]);


   if (!movieDetails) return null

    const backgroundIMG = movieDetails.backdrop_path ? `${posterURL}${movieDetails.backdrop_path}` : backgroundURL

    return (

        <div className='detailMovie-page' style={{backgroundImage: `url(${backgroundIMG})`}}>
            {
                movieDetails && <MovieDetailsCardComponent movieDetails={movieDetails} />
            }

        </div>
    );
};

export default MovieDetailsPageComponent;