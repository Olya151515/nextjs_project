'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import MovieComponent from "@/components/movies/MovieComponent";
import styles from "/src/components/movies/MoviesStyle/MoviesStyle.module.css";
type IProps ={
    movies:IMovie[]
}
const SearchMoviesComponent:FC<IProps> = ({movies}) => {
    return (
        <div  className={[styles.allMovies,styles.body].join(' ')}>
            {
                movies.map(movie => <MovieComponent movie={movie}/> )
            }

        </div>
    );
};

export default SearchMoviesComponent;