import React, {FC} from 'react';
import {IMovie} from "@/models/movies/IMovie";
import PopularMoviesComponent from "@/components/home/PopularMoviesComponent";
import {IPeople} from "@/models/people/IPeople";
import PopularPeopleComponent from "@/components/home/PopularPeopleComponent";
type IProps ={
    popularMovies:IMovie[],
    popularPeople:IPeople[]
}
const HomeComponent:FC<IProps> = ({popularMovies,popularPeople}) => {
    return (
        <div>
            <PopularPeopleComponent people={popularPeople}/>
            <PopularMoviesComponent popularMovies={popularMovies}/>

        </div>
    );
};

export default HomeComponent;