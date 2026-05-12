import {Link} from "react-router-dom";
import UserInfoComponent from "../UserComponents/UserInfoComponent/UserInfoComponent.tsx";
import SearchComponent from "../SearchComponents/SearchComponent/SearchComponent.tsx";


const Header = () => {
    return (
        <div>

            <ul>
                <li><Link to={'/'}>Movies</Link></li>
                <li><Link to={'movieByGenres'}>Films By Genres</Link></li>
            </ul>
            <SearchComponent/>
            <UserInfoComponent />

        </div>
    );
};

export default Header;