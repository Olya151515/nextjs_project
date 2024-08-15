import React from 'react';
import {moviesService} from "@/services/api.services";
import MoviesComponent from "@/components/movies/MoviesComponent";
import {MovieResponse} from "@/models/movies/MovieResponse";

const Page = async ({searchParams}:any) => {
    let response:MovieResponse = await moviesService.getMovies(searchParams.page);
    return (
        <div>
            <MoviesComponent movies={response.results}/>
        </div>
    );
};

export default Page;