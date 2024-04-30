import { useEffect, useState } from "react";
import FilmItem from "../../../../entities/filmBanner/ui/filmItem";
import getPopularFilms from "@/widgets/films/api/getPopularFilms";
import FilmShort from "@/entities/filmBanner/model/types";

const FilmList = ({ title, films }: { title: string, films: FilmShort[] }) => {
    if (!films) {
        return <div >Loading...</div>;
    }

    return (
        <section className="">
            <h2 className="font-semibold text-2xl pb-5">{title}</h2>
            <ul className="flex overflow-auto gap-4">
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