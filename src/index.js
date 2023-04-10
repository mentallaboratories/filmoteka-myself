import {refs} from './js/refs';
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

// береться масив результатів з функції та методом map витягуються необхідні дані
export async function renderFilmGallery(results){
    let markup = ''
    try{
            results.map(result => {
            const poster = result.poster_path;
            const genres = result.genre_ids.join(', ');
            const title = result.title;
            const released = result.release_date;
            return `<li class="film-item" id="film-item">
            <img class="film-poster" src="https://www.themoviedb.org/t/p/w550/${poster}" width="500" height="auto" alt="${title}">
            <div class="film-info">
                <h2 class="film-title">${title}</h2>
                <p class="film-specs">${genres}| ${released}</p>
            </div>
        </li>`
        }).join(' ');
        console.log();
        
        // refs.filmList.innerHTML = '';
        // refs.filmList.insertAdjacentHTML('beforeend', markup);

        
    }
    catch (error){
        console.log(error);
    }
}

//розмітка карток
// export async function renderFilmCard(poster,genres,title){
//     try{
//         `<p>this is a poster link ${poster}</p>
//         <p>these are genres ${genres}</p>
//         <p> this is a title ${title}</p>`
//     }
//     catch(error){
//         console.log(error);
//     }
// }


fetchPopularMovies(4).then(renderFilmGallery);