'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import MovieComponent from "@/components/movies/MovieComponent";
import styles from "/src/components/home/styleHome/HomeStyle.module.css";
import {star} from "@/constants/icons/icons";
import {RootState, useAppSelector} from "@/hooks/reduxHooks";
type IProps ={
    popularMovies :IMovie[]
}

const PopularMoviesComponent:FC<IProps> = ({popularMovies}) => {
    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme);
    return (
        <div className={styles.body}>
            <div className={isDarkTheme?styles.title:styles.whiteTitle}>
                <h3 >Top Rated <img className={styles.imgStar} src={star} alt="star"/></h3>
            </div>
            <div className={styles.allMovies}>
                {
                    popularMovies?.map(movie => <MovieComponent key={movie.id} movie={movie}/>)
                }
            </div>

        </div>
    );
};

export default PopularMoviesComponent;