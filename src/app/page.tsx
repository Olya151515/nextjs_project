import HomeComponent from "@/components/home/HomeComponent";
import React from "react";
import {moviesService, peopleServices} from "@/services/api.services";

export default async function Home() {

    let popularMovies = await moviesService.getPopularMovies();
    let popularPeople = await peopleServices.getPopularPeople();
  return (
      <main>
          <div>
              <HomeComponent popularMovies={popularMovies.results} popularPeople={popularPeople.results}/>
          </div>
      </main>
  );
}