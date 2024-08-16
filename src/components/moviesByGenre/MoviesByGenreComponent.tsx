'use client'

import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import MovieByGenreComponent from "@/components/moviesByGenre/MovieByGenreComponent";
import styles from "/src/components/moviesByGenre/styleMoviesBygenre/StyleMoviesWithgenre.module.css";
import {useSearchParams} from "next/navigation";
import PaginationForGenresComponent from "@/components/pagination/PaginationForGenresComponent";

type IProps = {
    movies:IMovie[],
    totalPages:number
}
const MoviesByGenreComponent:FC<IProps> = ({movies,totalPages}) => {
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1');
    const currentId = parseInt(searchParams.get('id') || '28');

    return (
        <div >

            <div className={styles.mainDiv}>
                {movies?.map(movie => <MovieByGenreComponent key={movie.id} movie={movie}/>)}
            </div>
           <div className={styles.stylePagination}>
              <PaginationForGenresComponent totalPages={totalPages} typeOfData={'moviesByGenre'} currentPage={currentPage} genreId={currentId}/>
           </div>
        </div>
    );
};

export default MoviesByGenreComponent;