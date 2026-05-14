import MoviesListComponent from "../components/MovieComponents/MovieListsComponents/MoviesListComponent/MoviesListComponent.tsx";
import PaginationForMovies from "../components/PaginationComponents/paginationForMovies.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";

const MoviesPage = () => {
    const {movieMeta} = useAppSelector(({movieSlice}) => movieSlice)

    return (
        <div className='main-container'>

            <MoviesListComponent/>

            <PaginationForMovies meta={movieMeta}/>
        </div>
    );
};

export default MoviesPage;