import React from 'react';
import {IMovie} from "@/models/movies/IMovie";
import {moviesService} from "@/services/api.services";
import MovieDescComponent from "@/components/movie/MovieDescComponent";
import styles from "/src/app/page.module.css";
const Page = async ({searchParams}:any) => {
    let movie:IMovie = JSON.parse(searchParams.data);
    let movieDetails = await moviesService.getDetailsOfMovieById(movie.id);
    let similarMovies = await moviesService.getSimilarMoviesById(movie.id);
    return (
        <div>
            <MovieDescComponent movie={movie} genres={movieDetails.genres} runtime={movieDetails.runtime} similarMovies={similarMovies.results}/>
        </div>
    );
};

export default Page;