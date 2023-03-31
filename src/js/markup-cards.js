import refs from "./refs";
import { genres } from "./genres";

export function renderFilmGallery(data) {
        let markupItem = '';
        let markup = '';
    for(const result of data.results){
        const genres_ids = result.genre_ids.join(', ');
       // const genres_names = genres.filter(genre => result.gen_ids.includes(genre.id))
        markupItem = `
         <div class="film-item">
             <div class="card__image">
                 <img src="https://image.tmdb.org/t/p/w500${result.poster_path}" alt="${result.title}">
             </div>
             <div class="card__content">
                 <div class="card__title">${result.title}</div>
                 <div class="card__genres">
                     <div>${genres_ids} | ${result.release_date}</div>
                 </div>
             </div>
         </div>
    `;
    markup += markupItem;
    console.log(markup);
    }
    refs.gallery.insertAdjacentHTML('beforeend',markup);
}
//Desctop
//gap 32 16
//width 394
//height 634

//height 574

//Tablet
//gap 32
//width 336
//height 494
//radius 5

//height 455

//Mobile
//gap 20
//width 280
//height 443
//radius 5

//height 402

//image жанр рік