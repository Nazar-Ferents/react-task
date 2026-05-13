import ResultComponent from "../components/SearchComponents/ResultComponent/ResultComponent.tsx";
import PaginationForMovies from "../components/PaginationComponents/paginationForMovies.tsx";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";

const SearchResultPage = () => {
    const {movieSearchMeta} = useAppSelector(({movieSearchSlice}) => movieSearchSlice)

    return (
        <div>
            <PaginationForMovies meta={movieSearchMeta}/>
            <ResultComponent/>

        </div>
    );
};

export default SearchResultPage;