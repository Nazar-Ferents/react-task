import {useSelector} from "react-redux";
import type {storeMoviesTMDB} from "../storeMoviesTMDB.ts";


export const useAppSelector = useSelector.withTypes<ReturnType<typeof storeMoviesTMDB.getState>>()