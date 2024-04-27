import FilmList from "@/components/filmList";
import Filters from "@/components/filters";
import getFilm from "@/hooks/getFilm";
import { useEffect, useState } from "react";
import Film from "@/types/Film";
import Rating from "@/components/rating";

const FilmPage = async ({ params }: { params: any }) => {
  const { id } = params;
  const film = await getFilm(id)

  return (
      <main className="">
          <section className="flex gap-8 flex-wrap justify-center">
            <div className="flex flex-col w-full max-w-52">
              <img src={film.posterUrl} width={300} height={500} alt="" className="w-full" />
              123
            </div>
            <div className="flex flex-1 min-w-96 flex-col gap-2">
              <div className="flex gap-5 items-center">
                <h1 className="text-2xl font-semibold">{film.nameRu}</h1>
                <Rating value={film.ratingKinopoisk} />
              </div>
                <span className="text-md text-gray-400">{film.year}</span>
                <p className="text-zinc-200">{film.description}</p>
            </div>
          </section>
      </main>
  );
}

export default FilmPage;