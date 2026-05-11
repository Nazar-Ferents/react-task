import {useParams} from "react-router-dom";
import MovieDetailsPageComponent from "../components/MovieComponents/MovieDetailsComponents/MovieDetailsPageComponent/MovieDetailsPageComponent.tsx";

const MovieDetailsPage = () => {

    const {movieID} = useParams();
    return (
        <div>

            {
                movieID && <MovieDetailsPageComponent movieID={movieID}/>
            }

        </div>
    );
};

export default MovieDetailsPage;