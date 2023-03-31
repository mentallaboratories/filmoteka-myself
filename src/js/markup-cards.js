import refs from "./refs";
import { genres } from "./genres";

export function renderFilmGallery(data) {
        let markupItem = '';
        let markup = '';
    for(const result of data.results){
      //  const genres_ids = result.genre_ids.join(', ');
        const genreNames = getGenreNamesFromId(result.genre_ids);
       // const genres_names = genres.filter(genre => result.gen_ids.includes(genre.id))
        markupItem = `
         <div class="film-item js-card">
             <div class="card__image">
                 <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}">
             </div>
             <div class="card__content">
                 <div class="card__title">${result.title}</div>
                 <div class="card__genres">
                     <div>${genreNames} | ${result.release_date}</div>
                 </div>
             </div>
         </div>
    `;
    markup += markupItem;
    }
    refs.gallery.innerHTML = markup;
    //refs.gallery.insertAdjacentHTML('beforeend',markup);
}

const getGenreNamesFromId = (id) =>
    genreNames = genres.filter(genre => id.includes(genre.id)).map(genre=>genre.name).join(', ');