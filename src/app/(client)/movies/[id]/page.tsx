import React from 'react';
import {IMovie} from "@/models/movies/IMovie";
import {moviesService} from "@/services/api.services";
import MovieDescComponent from "@/components/movie/MovieDescComponent";

const Page = async ({searchParams}:any) => {
    let movie:IMovie = JSON.parse(searchParams.data);
    let movieDetails = await moviesService.getDetailsOfMovieById(movie.id);
    return (
        <div>
            <MovieDescComponent movie={movie} genres={movieDetails.genres} runtime={movieDetails.runtime}/>
        </div>
    );
};

export default Page;