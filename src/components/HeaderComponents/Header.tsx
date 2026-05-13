import {Link} from "react-router-dom";
import UserInfoComponent from "../UserComponents/UserInfoComponent/UserInfoComponent.tsx";
import SearchComponent from "../SearchComponents/SearchComponent/SearchComponent.tsx";


const Header = () => {
    return (
        <header>

            <Link to={'/'}>Movies List</Link>

            <SearchComponent/>
            <UserInfoComponent />

        </header>
    );
};

export default Header;