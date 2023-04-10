import {refs} from './js/refs';
import {fetchPopularMovies} from './js/fetch';
import {renderFilmGallery} from './js/render';



// export async function fetchPopularMovies(page){
//     const params = {
//         api_key: API_KEY,
//         page: page,
//         language: 'en-US',
//     }
// //робиться запит "Популярні фільми" на сервер
//     try{
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {params});
// // повертається респонс-обєкт-масив результатів
// console.log(response.data);
//         return response.data.results;
//     }
//     catch (error){
//         console.log(error);
//     }
// }

// береться масив результатів з функції та методом map витягуються необхідні дані
// export async function renderFilmGallery(results){
   
//     try{
//            const markup = results.map(result => {
//             const id = result.id;
//             const poster = result.poster_path;
//             const genres = result.genre_ids.join(', ');
//             const title = result.title;
//             const released = result.release_date;
//             refs.filmList.insertAdjacentHTML('beforeend', `<li class="film-item" id="${id}">
//             <img class="film-poster" src="https://image.tmdb.org/t/p/w500/${poster}" width="500" height="auto" alt="${title}">
//             <div class="film-info">
//                 <h2 class="film-title">${title}</h2>
//                 <p class="film-specs">${genres}| ${released}</p>
//             </div>
//         </li>`)
           
//         });
        
//         // refs.filmList.innerHTML = '';
//         // refs.filmList.insertAdjacentHTML('beforeend', markup);

        
//     }
//     catch (error){
//         console.log(error);
//     }
// }



fetchPopularMovies(1).then(renderFilmGallery);

export function onFilmCardClick(e){
    if(e.target===e.currentTarget){
        return}
        else{
            console.log('click!! Remove "visually-hidden" class from modal');
            console.log(e.target.closest('li'));
            const cardEl = e.target.closest('li');
            console.log(cardEl.getAttribute('id'));
        }
     
}

refs.filmList.addEventListener('click', onFilmCardClick)