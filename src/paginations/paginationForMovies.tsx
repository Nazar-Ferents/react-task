import {useSearchParams} from "react-router-dom";

const PaginationForMovies = () => {

    const [query, setQuery] = useSearchParams({pg:'1'});
    const currentPage = Number(query.get('pg')) || 1
    return (
        <div className="paginationForMovies">
            <button onClick={() => {

                    if(currentPage > 1){
                        setQuery({pg:(currentPage - 1).toString()})
                    }

            }}>prev</button>
            <p>{currentPage}</p>
            <button onClick={() => {

                    if(currentPage < 500){
                        setQuery({pg:(currentPage + 1).toString()})
                    }
                }
            }>next</button>
            
        </div>
    );
};

export default PaginationForMovies;