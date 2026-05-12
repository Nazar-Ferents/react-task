import ResultComponent from "../components/SearchComponents/ResultComponent/ResultComponent.tsx";
import PaginationForMovies from "../paginations/paginationForMovies.tsx";

const SearchResultPage = () => {

    return (
        <div>
            <PaginationForMovies/>
            <ResultComponent/>

        </div>
    );
};

export default SearchResultPage;