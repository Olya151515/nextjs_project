'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import {urlPoster} from "@/constants/urls/urls";
import styles1 from "/src/components/moviesByGenre/styleMoviesBygenre/StyleMoviesWithgenre.module.css";
import styles2 from "/src/components/movies/MoviesStyle/MoviesStyle.module.css";
import Link from "next/link";
import RatingComponent from "@/components/rating/RatingComponent";
import styles from "/src/components/movies/MoviesStyle/MoviesStyle.module.css";
type IProps ={
    movie:IMovie
}

const MovieByGenreComponent:FC<IProps> = ({movie}) => {
    return (
        <div className={styles1.oneCard}>
            <div>
                <Link href={{pathname: '/movies/' + movie.id, query: {data: JSON.stringify(movie)}}}><img
                    className={styles2.imgPoster} src={urlPoster + movie.poster_path} alt="poster"/></Link>
            </div>
            <div className={styles1.titleDiv}>
                {movie.title}
            </div>

            <div className={styles.ratingStyle}>
                <RatingComponent rating={movie.vote_average}/>
            </div>

        </div>
    );
};

export default MovieByGenreComponent;