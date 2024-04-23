'use client'

import { useEffect, useState } from "react";
import FilmItem from "./filmItem";
import getPopularFilms from "@/hooks/getPopularFilms";
import FilmShort from "@/types/FilmShort";

const FilmList = () => {
    const [films, setFilms] = useState<FilmShort[]>([]);

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await getPopularFilms();
                setFilms(response.items);
            } catch (error) {
                console.error("Failed to fetch films:", error);
            }
        };
        fetchFilms();
    }, []);

    return (
        <section className="col-span-4">
            <h1 className="font-semibold text-2xl pb-5">Список фильмов</h1>
            <ul className="flex flex-col gap-4">
                {films.map(film => (
                    <FilmItem 
                        key={film.kinopoiskId} 
                        kinopoiskId={film.kinopoiskId} 
                        nameRu={film.nameRu} 
                        duration={film.duration} 
                        genres={film.genres} 
                        posterUrl={film.posterUrl} 
                        year={film.year}
                    />
                ))}
            </ul>
        </section>
    );
};

export default FilmList;