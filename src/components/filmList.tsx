'use client'

import { useEffect, useState } from "react";
import FilmItem from "./filmItem";
import getPopularMovies from "@/lib/getPopularMovies";
import Link from "next/link";

interface Genre {
  genre: string;
}

interface Movie {
    kinopoiskId: number;
    nameRu: string;
    posterUrl: string;
    duration: number;
    genres: Genre[];
    ratingKinopoisk: number;
}

const FilmList = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await getPopularMovies();
                setMovies(response.items);
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
                    <FilmItem key={movie.kinopoiskId} id={movie.kinopoiskId} title={movie.nameRu} duration={movie.duration} genres={movie.genres} posterUrl={movie.posterUrl} />
                ))}
            </ul>
        </section>
    );
};

export default FilmList;