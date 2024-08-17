'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import {useSearchParams} from "next/navigation";
import PaginationForMoviesComponent from "@/components/pagination/PaginationForMoviesComponent";
import MovieComponent from "@/components/movies/MovieComponent";
import styles from "/src/components/movies/MoviesStyle/MoviesStyle.module.css";
import styles2 from "/src/app/page.module.css";
import {RootState, useAppSelector} from "@/hooks/reduxHooks";

type IProps = {
    movies: IMovie[],
    total_pages:number
}
const MoviesComponent: FC<IProps> = ({movies,total_pages}) => {
    const searchParams = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1');
    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme);
    return (
        <div className={isDarkTheme? styles.bodyMovie:styles.whiteBody}>
            <div className={isDarkTheme?styles2.body:styles2.whiteBody}><h2 className={styles.h2}>Movies for you</h2></div>

            <div className={[styles.allMovies,isDarkTheme? styles2.body : styles2.whiteBody].join(' ')}>
                {
                    movies?.map(movie => <MovieComponent key={movie.id} movie={movie}/>)
                }
            </div>
            <div className={styles.paginationStyle}>
                <PaginationForMoviesComponent currentPage={currentPage} totalPages={total_pages} typeOfData={'movies'}/>
            </div>

        </div>
    );
};

export default MoviesComponent;