import {type FC, useEffect} from "react";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSliceActions} from "../../../redux/slices/movieSlice.ts";
import {MovieListCardComponent} from "../../MovieComponents/MovieListCardComponent/MovieListCardComponent.tsx";
import {genreSliceActions} from "../../../redux/slices/genreSlice.ts";

type PropsType = {
    genreID: string,
}
const MoviesByGenreListComponent:FC<PropsType> = ({genreID}) => {

    const {movies,loadState} = useAppSelector(({movieSlice}) => movieSlice );
    const{genres} = useAppSelector(({genreSlice}) => genreSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {

        if(genreID){

            dispatch(movieSliceActions.loadMoviesByGenres(Number(genreID)))
            dispatch(genreSliceActions.loadGenres())
        }
    }, [genreID]);

    return (
        <div>
            {!loadState && <div>Loading...</div>}
            {
                movies.map(movie => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres} />))
            }

        </div>
    );
};

export default MoviesByGenreListComponent;