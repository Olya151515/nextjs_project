'use client'
import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import PopularMoviesComponent from "@/components/home/PopularMoviesComponent";
import {IPeople} from "@/models/people/IPeople";
import PopularPeopleComponent from "@/components/home/PopularPeopleComponent";
import styles1 from "/src/components/home/styleHome/HomeStyle.module.css";
import styles2 from "/src/app/page.module.css";
import {RootState, useAppSelector} from "@/hooks/reduxHooks";
type IProps ={
    popularMovies:IMovie[],
    popularPeople:IPeople[]
}
const HomeComponent:FC<IProps> = ({popularMovies,popularPeople}) => {
    const isDarkTheme = useAppSelector((state: RootState) => state.theme.isDarkTheme);
    return (
        <div className={isDarkTheme?styles2.body: styles2.whiteBody}>
            <div className={styles1.mainBlockPeople}>
                <PopularPeopleComponent people={popularPeople}/>
            </div>
            <PopularMoviesComponent popularMovies={popularMovies}/>

        </div>
    );
};

export default HomeComponent;