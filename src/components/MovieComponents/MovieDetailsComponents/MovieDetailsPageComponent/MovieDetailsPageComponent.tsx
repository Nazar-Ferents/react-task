import {type FC, useEffect} from "react";
import {useAppSelector} from "../../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../../redux/slices/movieSlice.ts";
import MovieDetailsCardComponent from "../MovieDetailsCardComponent/MovieDetailsCardComponent.tsx";

type PropsType = {
    movieID: string
}
const MovieDetailsPageComponent:FC<PropsType> = ({movieID}) => {

    const {movieDetails, movieDetailsStatus} = useAppSelector(
       ({movieSlice}) => movieSlice)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if(movieID){
            dispatch(movieSliceActions.loadMoviesByID(Number(movieID)))

        }
    }, [movieID]);

   if (movieDetailsStatus === 'loading'){
    return <div>Loading...</div>
    }
   if (!movieDetails) return null

    return (

        <div>
            {
                movieDetails && <MovieDetailsCardComponent movieDetails={movieDetails} />
            }
        </div>
    );
};

export default MovieDetailsPageComponent;