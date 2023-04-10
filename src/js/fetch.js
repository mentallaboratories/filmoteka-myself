import {refs} from './refs';
import axios from "axios";

const API_KEY = '9539dc337cefe42694c239087409443a';
const page = 1;

console.log(refs.filmList);

export async function fetchPopularMovies(page){
    const params = {
        api_key: API_KEY,
        page: page,
        language: 'en-US',
    }
//робиться запит "Популярні фільми" на сервер
    try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {params});
// повертається респонс-обєкт-масив результатів
console.log(response.data);
        return response.data.results;
    }
    catch (error){
        console.log(error);
    }
}