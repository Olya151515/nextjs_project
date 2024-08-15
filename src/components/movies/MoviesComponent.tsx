'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import {useSearchParams} from "next/navigation";
import PaginationForMoviesComponent from "@/components/pagination/PaginationForMoviesComponent";
import MovieComponent from "@/components/movies/MovieComponent";
import styles from "/src/components/movies/MoviesStyle/MoviesStyle.module.css";

type IProps = {
    movies: IMovie[]
}
const MoviesComponent: FC<IProps> = ({movies}) => {
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1');
    return (
        <div >
            <div className={[styles.allMovies,styles.body].join(' ')}>
                {
                    movies?.map(movie => <MovieComponent key={movie.id} movie={movie}/>)
                }
            </div>
            <div className={styles.paginationStyle}>
                <PaginationForMoviesComponent currentPage={currentPage} totalPages={10202}/>
            </div>

        </div>
    );
};

export default MoviesComponent;