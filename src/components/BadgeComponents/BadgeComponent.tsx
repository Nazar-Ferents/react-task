import './GenresBadge.css'
import type {FC} from "react";
import {Link} from "react-router-dom";

type BadgePropsType = {
    genreID:number,
    name: string
}
    export const GenreBadge:FC<BadgePropsType> = ({genreID,name}) => {

    return (
        <Link to={`/movieByGenres/${genreID}`} className='badge'>{name}</Link>
    )
    }


