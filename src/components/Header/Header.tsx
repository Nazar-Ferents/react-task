import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Movies</Link></li>
                <li><Link to={'genres'}>Genres</Link></li>
            </ul>

        </div>
    );
};

export default Header;