import {useDispatch} from "react-redux";
import type {storeMoviesTMDB} from "../storeMoviesTMDB.ts";


export const useAppDispatch = useDispatch.withTypes<typeof storeMoviesTMDB.dispatch>();