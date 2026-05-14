import {useSearchParams} from "react-router-dom";
import type {FC} from "react";
import type {IMoviesGeneral} from "../../modules/MoviesModules/IMoviesGeneral.ts";
import './paginatorForMovies.css'

type PropsType = {
    meta:IMoviesGeneral | null
}
const PaginationForMovies:FC<PropsType> = ({meta}) => {

    const [query, setQuery] = useSearchParams({pg:'1'});
    const currentPage = Number(query.get('pg')) || 1
    const changePage = (newPage: number) => {
        const params = new URLSearchParams(query);
        params.set('pg',newPage.toString());
        setQuery(params);
    }


    const totalPages = Math.min(Number(meta?.total_pages)|| 1,500)
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