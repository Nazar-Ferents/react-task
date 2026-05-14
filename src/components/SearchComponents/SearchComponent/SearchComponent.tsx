import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import './search.css'


interface ISearch {
    title:string

}

const SearchComponent = () => {

    const {handleSubmit,register} = useForm<ISearch>();
    const navigate = useNavigate();


    const requestForFindingMovie = (formData:ISearch) => {

        const title = formData.title.trim();
        if(!title) return
        navigate(`/findingMovies?query=${encodeURIComponent(title)}&pg=1`)


    }
    return (
        <div>
            <form className='search_form' onSubmit={handleSubmit(requestForFindingMovie)}>
                <input className='search_input' type="text" {...register('title',{
                    required:'Enter movie title'
                })}/>
                <button type='submit' className='search_button'>Search</button>
            </form>


        </div>
    );
};

export default SearchComponent;