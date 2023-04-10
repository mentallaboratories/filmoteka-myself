import {refs} from './refs';

export async function renderFilmGallery(results){
   
    try{
           const markup = results.map(result => 
            `<li class="film-item" id="${result.id}">
            <img class="film-poster" src="https://image.tmdb.org/t/p/w500/${result.poster_path}" width="500" height="auto" alt="${result.title}">
            <div class="film-info">
                <h2 class="film-title">${result.title}</h2>
                <p class="film-specs">${result.genre_ids.join(', ')}| ${result.release_date}</p>
            </div>
        </li>`
           ).join("");

        
        // refs.filmList.innerHTML = '';
        refs.filmList.insertAdjacentHTML('beforeend', markup);

        
    }
    catch (error){
        console.log(error);
    }
}
