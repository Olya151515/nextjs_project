'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import MovieComponent from "@/components/movies/MovieComponent";
import styles from "/src/components/movies/MoviesStyle/MoviesStyle.module.css";
import {useSearchParams} from "next/navigation";
import PaginationForMoviesComponent from "@/components/pagination/PaginationForMoviesComponent";
type IProps ={
    movies:IMovie[]
}
const SearchMoviesComponent:FC<IProps> = ({movies}) => {
    return (
        <div  className={[styles.body].join(' ')}>
            <div className={styles.allMovies}>
                {
                    movies.map(movie => <MovieComponent key={movie.id} movie={movie}/> )
                }
            </div>
        </div>
    );
};

export default SearchMoviesComponent;