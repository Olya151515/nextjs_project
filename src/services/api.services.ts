import {MovieResponse} from "@/models/movies/MovieResponse";
import {IMovie} from "@/models/movies/IMovie";
import {GenresResponse} from "@/models/genres/GenresResponse";
import {IGenre} from "@/models/genres/IGenre";
import {urlsApi} from "@/constants/urls/urls";

const myHeaders = {
    accept:' application/json',
    Authorization:' Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTUyNmI3ODRmMTU5OWVhOGI5OTg0YzhkNmNkMzY3MCIsIm5iZiI6MTcyMzQ0MzU4NC40MzE4MzIsInN1YiI6IjY2Yjc2M2YzZDlhNjc0MzNhNjAzNmZhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.R0p3RbfMEei-YeLCJYXcuQH9TwOG0o4LfwcJ5TX8XBU'
};
const moviesService ={
    getMovies: async (page:string):Promise<MovieResponse> =>{
      return await fetch( urlsApi.movies.getAllMovies+page,
           {headers:myHeaders})
           .then(value => value.json());
    },
    getMoviesByGenreId: async (genreId:string,currentPage:string):Promise<MovieResponse> =>{
        return await fetch('https://api.themoviedb.org/3/discover/movie?page='+currentPage+'&with_genres='+genreId, {headers:myHeaders})
            .then(value => value.json());
    },
    getDetailsOfMovieById : async (id:number)=>{
        return await fetch(urlsApi.movies.getDetailsOFMovieById+id,
            {headers:myHeaders})
            .then(value => value.json());
    },
    getSearchedMovies: async (query:string):Promise<MovieResponse> =>{
        return await fetch(urlsApi.movies.getSearchedMovies +'?query='+query ,
            {headers:myHeaders})
            .then(value => value.json());
    }
}
const  genres ={
    getGenres : async ():Promise<IGenre[]> =>{
        let response:GenresResponse = await fetch(urlsApi.genre.getAllGenres,
            {headers:myHeaders})
            .then(value => value.json());
        return response.genres
    }

}
export {
    moviesService,
    genres
}