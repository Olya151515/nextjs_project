import React from 'react';
import SearchMoviesComponent from "@/components/movies/SearchMoviesComponent";
import {moviesService} from "@/services/api.services";

const Page =async ({searchParams}:any) => {
    let response  = await moviesService.getSearchedMovies(searchParams.query);
    return (
        <div>
            <SearchMoviesComponent movies={response.results}/>
        </div>
    );
};

export default Page;
