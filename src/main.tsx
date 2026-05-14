import { createRoot } from 'react-dom/client'
import './index.css'
import './responsiveFor(768).css'
import './responsiveFor(768-1279).css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/routes.tsx";
import {Provider} from "react-redux";
import {storeMoviesTMDB} from "./redux/storeMoviesTMDB.ts";

createRoot(document.getElementById('root')!).render(
<Provider store={storeMoviesTMDB}>
    <RouterProvider router={routes}/>

</Provider>
)
