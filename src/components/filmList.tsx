import { useEffect, useState } from "react";
import FilmItem from "./filmItem";
import getPopularFilms from "@/hooks/getPopularFilms";
import FilmShort from "@/types/FilmShort";

const FilmList = ({ films }: { films: FilmShort[] }) => {
    if (!films) {
        return <div >Loading...</div>;
    }

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