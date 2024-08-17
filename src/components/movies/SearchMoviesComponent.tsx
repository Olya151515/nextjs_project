'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import MovieComponent from "@/components/movies/MovieComponent";
import styles from "/src/components/movies/MoviesStyle/MoviesStyle.module.css";
import {RootState, useAppSelector} from "@/hooks/reduxHooks";

type IProps ={
    movies:IMovie[]
}
const SearchMoviesComponent:FC<IProps> = ({movies}) => {

    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme);
    return (
        <div  className={isDarkTheme?styles.bodyMovie:styles.whiteBody}>
            <div className={styles.allMovies}>
                {
                    movies.map(movie => <MovieComponent key={movie.id} movie={movie}/> )
                }
            </div>
        </div>
    );
};

export default SearchMoviesComponent;