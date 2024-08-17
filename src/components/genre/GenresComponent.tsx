'use client'
import React, {FC} from 'react';
import {IGenre} from "@/models/genres/IGenre";
import GenreComponent from "@/components/genre/GenreComponent";
import styles from "/src/components/genre/styleGenre/GenresStyle.module.css";
import {RootState, useAppSelector} from "@/hooks/reduxHooks";

type IProps = {
    genres:IGenre[],
    page:string,
    id:number
}

const GenresComponent:FC<IProps> = ({genres,page,id}) => {
    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme);
    return (
        <div className={isDarkTheme?styles.body:styles.whiteBody}>
            {
                genres.map(genre => <GenreComponent key={genre.id} genre={genre} page={page} id={id}/>)
            }
        </div>
    );
};

export default GenresComponent;