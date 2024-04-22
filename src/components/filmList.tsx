import { useEffect } from "react";
import FilmItem from "./filmItem";
import { GetServerSideProps } from 'next';
import getPopularMovies from "@/lib/getPopularMovies";

interface Movie {
    id: number;
    title: string;
  }
  
  interface MoviesProps {
    movies: Movie[];
  }

const FilmList = () => {
    const movies = getPopularMovies();

    return (
        <section className="col-span-4">
          <h1 className="font-semibold text-2xl pb-5">Список фильмов</h1>
          <ul className="flex flex-col gap-4">
            
          </ul>
        </section>
    );
};

export default FilmList;