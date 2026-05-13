import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";

const PaginationForMovies = () => {

    const [query, setQuery] = useSearchParams({pg:'1'});
    const currentPage = Number(query.get('pg')) || 1
    const changePage = (newPage: number) => {
        const params = new URLSearchParams(query);
        params.set('pg',newPage.toString());
        setQuery(params);
    }

    const{movieMeta} = useAppSelector(({movieSlice}) => movieSlice)
    const totalPages = Math.min(Number(movieMeta?.total_pages)|| 1,500)
    return (
        <div className="paginationForMovies">
            <button onClick={() => {

                    if(currentPage > 1){
                        changePage(currentPage - 1)
                    }

            }}>prev</button>
            <p>{currentPage} / {totalPages}</p>
            <button onClick={() => {


                if(currentPage < totalPages){
                        changePage(currentPage + 1)
                    }
                }
            }>next</button>
            
        </div>
    );
};

export default PaginationForMovies;