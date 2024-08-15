import React, {FC} from 'react';
import {IGenre} from "@/models/genres/IGenre";
import GenreComponent from "@/components/genre/GenreComponent";
import styles from "/src/components/genre/styleGenre/GenresStyle.module.css";
import {IMovie} from "@/models/movies/IMovie";
type IProps = {
    genres:IGenre[],
    page:string,
    movies:IMovie[]
}

const GenresComponent:FC<IProps> = ({genres,page,movies}) => {
    return (
        <div className={styles.body}>
            {
                genres.map(genre => <GenreComponent genre={genre} page={page} movies={movies}/>)
            }
        </div>
    );
};

export default GenresComponent;