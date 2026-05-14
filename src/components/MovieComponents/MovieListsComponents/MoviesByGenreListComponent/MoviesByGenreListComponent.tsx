import {type FC, useEffect} from "react";
import {useAppSelector} from "../../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../../redux/hooks/useAppDispatch.tsx";
import {MovieListCardComponent} from "../MovieListCardComponent/MovieListCardComponent.tsx";
import {genreSliceActions} from "../../../../redux/slices/genreSlice.ts";
import {useSearchParams} from "react-router-dom";
import {movieByGenresSliceActions} from "../../../../redux/slices/movieByGenresSlice.ts";

type PropsType = {
    genreID: string,

}
const MoviesByGenreListComponent:FC<PropsType> = ({genreID}) => {

    const {moviesByGenres} = useAppSelector(({movieByGenresSlice}) => movieByGenresSlice );
    const{genres} = useAppSelector(({genreSlice}) => genreSlice)
    const dispatch = useAppDispatch()
    const [query] = useSearchParams()
    const pg = Number(query.get('pg')) || 1

    useEffect(() => {

        if(genreID){

            dispatch(movieByGenresSliceActions.loadMoviesByGenres({genreID:Number(genreID),page:pg}))
            if(genres.length === 0){
                dispatch(genreSliceActions.loadGenres())
            }

        }
    }, [genreID,pg]);


    return (
        <div className='moviesGrid'>

            {
                moviesByGenres.map(movie => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres} />))
            }


        </div>
    );
};

export default MoviesByGenreListComponent;