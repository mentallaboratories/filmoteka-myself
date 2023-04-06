import './sass/index.scss';

import { refs } from './js/refs';
import './js/search-input';
import { fetchPopularFilms } from './js/api-fetch';
import './js/loader-spinner';
import { renderFilmGallery} from './js/markup-cards';
import './js/modal-movie';
import './js/pagination';
import './js/smooth-scroll';
import './js/notification';
import './js/queue-local-storage';
import './js/watched-local-storage';
import './js/modal-team';
import './js/refs';
import  './js/buttons';

fetchPopularFilms(1).then(renderFilmGallery);
