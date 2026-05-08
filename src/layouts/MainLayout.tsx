import {Outlet} from "react-router-dom";
import Header from "../components/HeaderComponents/Header.tsx";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>

        </div>
    );
};

export default MainLayout;