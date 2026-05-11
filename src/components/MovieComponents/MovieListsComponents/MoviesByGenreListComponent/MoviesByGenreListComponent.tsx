import {type FC, useEffect} from "react";
import {useAppSelector} from "../../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../../redux/slices/movieSlice.ts";
import {MovieListCardComponent} from "../MovieListCardComponent/MovieListCardComponent.tsx";
import {genreSliceActions} from "../../../../redux/slices/genreSlice.ts";

type PropsType = {
    genreID: string,

}
const MoviesByGenreListComponent:FC<PropsType> = ({genreID}) => {

    const {moviesByGenres,moviesByGenreStatus} = useAppSelector(({movieSlice}) => movieSlice );
    const{genres} = useAppSelector(({genreSlice}) => genreSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {

        if(genreID){

            dispatch(movieSliceActions.loadMoviesByGenres(Number(genreID)))
            if(genres.length === 0){
                dispatch(genreSliceActions.loadGenres())
            }

        }
    }, [genreID]);

    if(moviesByGenreStatus === 'loading'){
        return  <div>Loading...</div>
    }

    return (
        <div>

            {
                moviesByGenres.map(movie => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres} />))
            }

        </div>
    );
};

export default MoviesByGenreListComponent;