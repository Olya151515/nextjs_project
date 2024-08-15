'use server'
import React from 'react';
import HomeComponent from "@/components/home/HomeComponent";
import {moviesService, peopleServices} from "@/services/api.services";

const Page = async () => {
    let popularMovies = await moviesService.getPopularMovies();
    let popularPeople = await peopleServices.getPopularPeople();
    return (
        <div>
            <HomeComponent popularMovies={popularMovies.results} popularPeople={popularPeople.results}/>
        </div>
    );
};

export default Page;