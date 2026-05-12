import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";


interface ISearch {
    title:string

}

const SearchComponent = () => {

    const {handleSubmit,register,reset} = useForm<ISearch>();
    const navigate = useNavigate();


    const requestForFindingMovie = (formData:ISearch) => {

        const title = formData.title.trim();
        if(!title) return
        navigate(`/findingMovies?query=${encodeURIComponent(title)}&pg=1`)
        reset()

    }
    return (
        <div>
            <form onSubmit={handleSubmit(requestForFindingMovie)}>
                <input type="text" {...register('title',{
                    required:'Enter movie title'
                })}/>
                <button type='submit'>Search</button>
            </form>


        </div>
    );
};

export default SearchComponent;