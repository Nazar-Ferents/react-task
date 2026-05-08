import type {FC} from "react";
import type {IMovie} from "../../../modules/MoviesModules/IMovie.ts";

type MovieListCardComponentPropsType ={
    movie: IMovie
}
export const MovieListCard:FC<MovieListCardComponentPropsType> = ({movie}) => {
    return (
        <div>
            <h2>{movie.title}</h2>

        </div>
    );
};

