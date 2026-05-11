import MoviesListComponent from "../components/MovieComponents/MovieListsComponents/MoviesListComponent/MoviesListComponent.tsx";
import PaginationForMovies from "../paginations/paginationForMovies.tsx";

const MoviesPage = () => {
    return (
        <div>
            <PaginationForMovies/>

            <MoviesListComponent/>

        </div>
    );
};

export default MoviesPage;