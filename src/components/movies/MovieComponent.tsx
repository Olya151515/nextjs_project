import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import styles from "/src/components/movies/MoviesStyle/MoviesStyle.module.css";
import {urlPoster} from "@/constants/urls/urls";
import Link from "next/link";
type IProps ={
    movie:IMovie
}
const MovieComponent:FC<IProps> = ({movie}) => {
    return (
        <div className={styles.oneMovie}>
            <div key={movie.id}>
                <Link href={{pathname:'/movies/'+movie.id , query:{data: JSON.stringify((movie))}}}><img className={styles.imgPoster} src={urlPoster + movie.poster_path}
                                     alt="not found"/></Link>
            </div>
            <div className={styles.titleMovie}>
                {movie.title}
            </div>
        </div>
    );
};

export default MovieComponent;