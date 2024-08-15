'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import MovieComponent from "@/components/movies/MovieComponent";
import styles from "/src/components/home/styleHome/HomeStyle.module.css";
import {star} from "@/constants/icons/icons";
type IProps ={
    popularMovies :IMovie[]
}

const PopularMoviesComponent:FC<IProps> = ({popularMovies}) => {
    console.log(popularMovies);
    return (
        <div className={[styles.MoviesBox,styles.body].join(' ')}>
            <div className={styles.title}>
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