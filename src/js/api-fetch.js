import axios from "axios";
import { renderFilmGallery } from "./markup-cards";


export async function fetchPopularFilms(pageNum) {
     const API_URL = 'https://api.themoviedb.org/3/discover/movie';
  
    // // параметри запиту на бекенд
    const options = {
      params: {
         api_key: '169863a84bc27c731fc45c45dd4a4a7e', 
    //     q: searchQuery,
         language: 'en-US',
         sort_by: 'popularity.desc',
         include_adult: 'false',
         include_video: 'false',
         page: pageNum,
         with_watch_monetization_types: 'flatrate',
       }
    };
  
    try {       
        const response = await axios.get(API_URL, options);
        return response.data;
        //   console.log(response.data);
    //   renderFilmGallery(response.data);
        //render(response.data); 
    //   notification(
    //   response.data.hits.length,
    //   response.data.total);

    } catch (error) {
      console.log(error);
    }
  }

