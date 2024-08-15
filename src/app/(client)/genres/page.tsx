import React from 'react';
import {genres, moviesService} from "@/services/api.services";
import {IGenre} from "@/models/genres/IGenre";
import GenresComponent from "@/components/genre/GenresComponent";
import MoviesByGenreComponent from "@/components/moviesByGenre/MoviesByGenreComponent";
import styles from "/src/app/page.module.css";

const Page = async ({searchParams}:any) => {
    let responseGenres:IGenre[] = await genres.getGenres();
    let responseMoviesByGenre = await moviesService.getMoviesByGenreId(searchParams.id ||'28',searchParams.page ||'1');
    return (
        <div  className={styles.boxMoviesByGenre}>
            <GenresComponent genres={responseGenres} page={searchParams.page} movies={responseMoviesByGenre.results}/>
            <MoviesByGenreComponent movies={responseMoviesByGenre.results} currentPage={searchParams.page}/>
        </div>
    );
};

export default Page;