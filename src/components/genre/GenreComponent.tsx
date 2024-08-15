'use client'
import React, {FC} from 'react';
import {IGenre} from "@/models/genres/IGenre";
import styles from "/src/components/genre/styleGenre/GenresStyle.module.css";
import Link from "next/link";

type IProps ={
    genre:IGenre,
    page:string,
    id:number
}

const GenreComponent:FC<IProps> = ({genre,page,id}) => {
    return (
        <div className={styles.oneGenre}>
            <Link className={id.toString() == genre.id? styles.activeGenre : styles.styleLinkGenre} href={{pathname:'/genres', query:{
                id:JSON.stringify(genre.id),
                page:'1'}}
                }>{genre.name}</Link>
        </div>
    );
};

export default GenreComponent;