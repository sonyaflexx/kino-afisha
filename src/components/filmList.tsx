'use client'

import { useEffect, useState } from "react";
import FilmItem from "./filmItem";
import getPopularMovies from "@/lib/getPopularMovies";

interface Movie {
    id: number;
    title: string;
}
  
interface MoviesProps {
    movies: Movie[];
}

const FilmList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await getPopularMovies();
                setMovies(response.results);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <section className="col-span-4">
            <h1 className="font-semibold text-2xl pb-5">Список фильмов</h1>
            <ul className="flex flex-col gap-4">
                {movies.map(movie => (
                    <FilmItem id={movie.id} title={movie.title} />
                ))}
            </ul>
        </section>
    );
};

export default FilmList;