import {MovieListCardComponent} from "../../MovieComponents/MovieListsComponents/MovieListCardComponent/MovieListCardComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {movieSliceActions} from "../../../redux/slices/movieSlice.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";


const ResultComponent = () => {

    const {movieSearch,movieSearchStatus} = useAppSelector(
        ({movieSlice}) => movieSlice)

    const {genres} = useAppSelector(
        ({genreSlice}) => genreSlice);

    const dispatch = useAppDispatch();

    const [query] = useSearchParams()
    const title = query.get('query') || ''
    const pg = Number(query.get('pg')) || 1

    useEffect(() => {


        if(title) {
                dispatch(movieSliceActions.loadFindingMovies({title:title,page:pg}))
             }

    },[title,pg])

    if (movieSearchStatus === 'loading') return <div>Loading...</div>

    if (movieSearchStatus === 'success' && movieSearch.length === 0) return <div>No Movies found</div>

    return (
        <div>

            {
                movieSearch.map(movie => (<MovieListCardComponent key={movie.id} movie={movie} genres={genres}/>))
            }


        </div>
    );
};

export default ResultComponent;