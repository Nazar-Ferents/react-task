import {MovieListCardComponent} from "../../MovieComponents/MovieListsComponents/MovieListCardComponent/MovieListCardComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {movieSearchSliceActions} from "../../../redux/slices/movieSearchSlice.ts";


const ResultComponent = () => {

    const {movieSearch,movieSearchStatus} = useAppSelector(
        ({movieSearchSlice}) => movieSearchSlice)

    const {genres} = useAppSelector(
        ({genreSlice}) => genreSlice);

    const dispatch = useAppDispatch();

    const [query] = useSearchParams()
    const title = query.get('query') || ''
    const pg = Number(query.get('pg')) || 1

    useEffect(() => {


        if(title) {
                dispatch(movieSearchSliceActions.loadFindingMovies({title:title,page:pg}))
             }

    },[title,pg])



    if (movieSearchStatus === 'success' && movieSearch.length === 0) return <div>No Movies found</div>

    return (
        <div className='moviesGrid'>

            {
                movieSearch.map(movie => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres}/>))
            }



        </div>
    );
};

export default ResultComponent;