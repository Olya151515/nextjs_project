'use client'
import React, {FC} from 'react';
import {IGenre} from "@/models/genres/IGenre";
import styles from "/src/components/genre/styleGenre/GenresStyle.module.css";
import Link from "next/link";
import {RootState, useAppSelector} from "@/hooks/reduxHooks";

type IProps ={
    genre:IGenre,
    page:string,
    id:number
}

const GenreComponent:FC<IProps> = ({genre,page,id}) => {
    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme);
    return (
        <div className={styles.oneGenre}>
            <Link className={id.toString() == genre.id? styles.activeGenre : isDarkTheme? styles.styleLinkGenre:styles.whiteThemeLink} href={{pathname:'/genres', query:{
                id:JSON.stringify(genre.id),
                page:'1'}}
                }>{genre.name}</Link>
        </div>
    );
};

export default GenreComponent;