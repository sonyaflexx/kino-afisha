'use client'

import FilmShort from "@/types/FilmShort";
import Link from "next/link";
import { useState } from "react";
import GenresList from "./genresList";
import convertTime from "@/utils/convertTime";

const FilmItem: React.FC<FilmShort> = ({ kinopoiskId, nameRu, posterUrl, duration, genres, year}) => {
    return (
            <Link href={`films/${kinopoiskId}`} className="relative w-52 h-full flex flex-col rounded-3xl border-solid border-2 border-zinc-400 active:scale-95 transition-all">
                    <img src={posterUrl} alt="" height={192} width={128} className="mx-auto h-full w-full rounded-3xl"/>
                    {/* <div className="flex flex-col gap-1">
                        <span className="font-semibold truncate">{nameRu}</span>
                        <span className="text-sm">Описание</span>
                    </div> */}
                        <div className='gap-2 text-sm absolute inset-0 rounded-3xl text-center p-3 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-opacity-60' style={{backgroundColor: 'rgba(0, 0, 0, 0.65)'}}>
                            <div className="flex flex-col">
                                <span className="text-md font-semibold text-wrap">{nameRu}</span>
                                <span className="text-sm">{year}</span>
                            </div>
                            <span>{convertTime(duration).hours} ч. {convertTime(duration).minutes} мин.</span>
                            <GenresList genres={genres} />
                        </div>
            </Link>
    );
};

export default FilmItem;