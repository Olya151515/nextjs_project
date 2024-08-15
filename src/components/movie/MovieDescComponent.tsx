import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import {IGenre} from "@/models/genres/IGenre";
import styles from "/src/app/page.module.css";
import {urlPoster} from "@/constants/urls/urls";
import Link from "next/link";
import {timeIcon} from "@/constants/icons/icons";
import MovieComponent from "@/components/movies/MovieComponent";

type IProps ={
    movie:IMovie,
    genres:IGenre[],
    runtime:number,
    similarMovies:IMovie[]
}
const MovieDescComponent:FC<IProps> = ({movie,genres,runtime,similarMovies}) => {
    return (
        <div className={styles.ContainerInfoMovie}>
            <div className={styles.titleMovie}>
                <h1 >The movie </h1> <h1 className={styles.nameMovie}> {movie.title}</h1>
            </div>
            <div className={styles.movieAllDescWithPoster}>
                <div className={styles.movieDesc}>
                    <div className={styles.blockDescOne}>
                        <h3>Year</h3>
                        <h3>Rating</h3>
                        <h3>Genres</h3>
                        <h3>Time</h3>
                        <h3>Overview</h3>
                    </div>
                    <div className={styles.blockDescTwo}>
                        <h3>{movie.release_date}</h3>
                        <h3>{movie.vote_average}</h3>
                        <h3 className={styles.genreStyleBlock}>{genres.map(genre => <div key={genre.id} className={styles.oneGenre}><Link className={styles.linkGenre} href={'/genres?id='+genre.id}>{genre.name}</Link></div>)}</h3>
                        <h3 className={styles.iconTimeBlock}><img className={styles.imgIcon}  src={timeIcon} alt="timePthoto"/>   { runtime} minutes</h3>
                        <h4>{movie.overview}</h4>
                    </div>
                </div>
                <div className={styles.posterStyle}>
                    <img className={styles.img} src={urlPoster + movie.poster_path} alt="photo"/>
                </div>

            </div>
            <div className={styles.titleMovie}><h2>Similar</h2></div>
            <div className={styles.similarMoviesBlock}>
                {
                    similarMovies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)
                }
            </div>


        </div>
    );
};

export default MovieDescComponent;