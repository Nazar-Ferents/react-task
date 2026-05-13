import {useSearchParams} from "react-router-dom";

const PaginationForMovies = () => {

    const [query, setQuery] = useSearchParams({pg:'1'});
    const currentPage = Number(query.get('pg')) || 1
    const changePage = (newPage: number) => {
        const params = new URLSearchParams(query);
        params.set('pg',newPage.toString());
        setQuery(params);
    }
    return (
        <div className="paginationForMovies">
            <button onClick={() => {

                    if(currentPage > 1){
                        changePage(currentPage - 1)
                    }

            }}>prev</button>
            <p>{currentPage}</p>
            <button onClick={() => {

                    if(currentPage < 500){
                        changePage(currentPage + 1)
                    }
                }
            }>next</button>
            
        </div>
    );
};

export default PaginationForMovies;