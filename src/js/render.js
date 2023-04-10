import {refs} from './refs';

export async function renderFilmGallery(results){
   
    try{
           const markup = results.map(result => {
            const id = result.id;
            const poster = result.poster_path;
            const genres = result.genre_ids.join(', ');
            const title = result.title;
            const released = result.release_date;
            refs.filmList.insertAdjacentHTML('beforeend', `<li class="film-item" id="${id}">
            <img class="film-poster" src="https://image.tmdb.org/t/p/w500/${poster}" width="500" height="auto" alt="${title}">
            <div class="film-info">
                <h2 class="film-title">${title}</h2>
                <p class="film-specs">${genres}| ${released}</p>
            </div>
        </li>`)
           
        });
        
        // refs.filmList.innerHTML = '';
        // refs.filmList.insertAdjacentHTML('beforeend', markup);

        
    }
    catch (error){
        console.log(error);
    }
}
