import axios from "axios";

const API_KEY = '9539dc337cefe42694c239087409443a';


export async function fetchMovies(){
    
    try{
        axios.get('https://api.themoviedb.org/3/movie/550?api_key=9539dc337cefe42694c239087409443a').then((response)=>console.log(response));
    }
    catch (error){
        console.log(error);
    }
}

fetchMovies();