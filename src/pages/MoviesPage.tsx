import MoviesListComponent from "../components/MovieComponents/MoviesList/MoviesListComponent.tsx";
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