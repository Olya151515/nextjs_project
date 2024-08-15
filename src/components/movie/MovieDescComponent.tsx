import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import {IGenre} from "@/models/genres/IGenre";
import styles from "/src/app/page.module.css";
import {urlPoster} from "@/constants/urls/urls";
import Link from "next/link";
import {timeIcon} from "@/constants/icons/icons";
type IProps ={
    movie:IMovie,
    genres:IGenre[],
    runtime:number
}
const MovieDescComponent:FC<IProps> = ({movie,genres,runtime}) => {
    return (
        <div className={styles.ContainerInfoMovie}>
            <div>
                <h1 className={styles.titleMovie}>The movie {movie.title}</h1>
            </div>
            <div className={styles.movieAllDescWithPoster}>
                <div className={styles.movieDesc}>
                    <div className={styles.blockDescOne}>
                        <h2>Year</h2>
                        <h2>Rating</h2>
                        <h2>Genres</h2>
                        <h2>Time</h2>
                    </div>
                    <div className={styles.blockDescTwo}>
                        <h2>{movie.release_date}</h2>
                        <h2>{movie.vote_average}</h2>
                        <h2 className={styles.genreStyleBlock}>{
                            genres.map(genre => <div className={styles.oneGenre}><Link className={styles.linkGenre} href={'/genres?id='+genre.id}>{genre.name}</Link></div>)
                        }</h2>
                        <h2 className={styles.iconTimeBlock}><img className={styles.imgIcon}  src={timeIcon} alt="timePthoto"/>   { runtime} minutes</h2>

                    </div>
                </div>
                <div className={styles.posterStyle}>
                    <img className={styles.img} src={urlPoster + movie.poster_path} alt="photo"/>
                </div>

            </div>

        </div>
    );
};

export default MovieDescComponent;