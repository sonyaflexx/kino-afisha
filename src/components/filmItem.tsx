'use client'

import FilmShort from "@/types/FilmShort";
import Link from "next/link";
import { useState } from "react";

const FilmItem: React.FC<FilmShort> = ({ kinopoiskId, nameRu, posterUrl, duration, genres, year}) => {
    return (
        <li className="pb-3">
            <Link href={`films/${kinopoiskId}`} className="relative w-52 h-full flex flex-col rounded-3xl border-solid border-2 border-zinc-400 active:scale-95 transition-all">
                    <img src={posterUrl} alt="" height={192} width={128} className="mx-auto h-full w-full rounded-3xl"/>
                    {/* <div className="flex flex-col gap-1">
                        <span className="font-semibold truncate">{nameRu}</span>
                        <span className="text-sm">Описание</span>
                    </div> */}
                        <div className='absolute inset-0 rounded-3xl text-center p-3 flex flex-col items-center justify-center bg-black transition-opacity duration-300 opacity-0 hover:opacity-100 hover:bg-opacity-60'>
                            <span className="font-semibold text-wrap">{nameRu}</span>
                            <span className="text-sm">Описание</span>
                        </div>
            </Link>
        </li>
    );
};

export default FilmItem;