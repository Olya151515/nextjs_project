import React, {FC} from 'react';
import {IGenre} from "@/models/genres/IGenre";
import styles from "/src/components/genre/styleGenre/GenresStyle.module.css";
import Link from "next/link";
type IProps ={
    genre:IGenre,
    page:string
}

const GenreComponent:FC<IProps> = ({genre,page}) => {
    return (
        <div className={styles.oneGenre}>
            <Link className={styles.styleLinkGenre} href={{pathname:'/genres', query:{
                id:JSON.stringify(genre.id),
                page:'1'}}
                }>{genre.name}</Link>
        </div>
    );
};

export default GenreComponent;