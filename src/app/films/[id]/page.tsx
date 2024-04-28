import FilmList from "@/components/filmList";
import Filters from "@/components/filters";
import getFilm from "@/hooks/getFilm";
import { useEffect, useState } from "react";
import Film from "@/types/Film";
import Rating from "@/components/rating";
import convertTime from "@/utils/convertTime";

const FilmPage = async ({ params }: { params: any }) => {
  const { id } = params;
  const film = await getFilm(id)
  console.log(film.genres)

  return (
      <main className="">
          <section className="flex gap-8 flex-wrap justify-center">
            <div className="flex flex-col gap-4 w-full max-w-52">
              <img src={film.posterUrl} width={300} height={500} alt="" className="w-full rounded-xl" />
              <ul className="flex flex-col gap-2">
                <h2 className="font-semibold">Смотреть на:</h2>
                {film.externalSources.map((source) => 
                  <li>
                    <a href={source.url} target="_blank" className="flex py-2 px-3 items-center gap-2 bg-zinc-800 rounded-xl transition-all hover:bg-orange-500">
                      <img src={source.logoUrl} width={30} height={30} alt={source.platform} className="rounded-md" />
                      <span className="leading-none font-semibold">{source.platform}</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex flex-1 min-w-96 flex-col gap-2">
              <div className="flex gap-5 items-center leading-none">
                <h1 className="text-2xl font-semibold">{film.nameRu}</h1>
                <Rating value={film.ratingKinopoisk} />
              </div>
                <ul className="flex gap-2">
                  {
                    film.genres.map((genre) => 
                      <li className="p-2 bg-zinc-800 leading-none rounded-lg text-sm">{genre.genre}</li>  
                    )
                  }
                </ul>
                <div className="py-2 flex flex-col gap-2">
                  <p><span className="text-zinc-400 font-semibold">Год: </span>{film.year}</p>
                  <p><span className="text-zinc-400 font-semibold">Длительность: </span>{convertTime(film.filmLength).hours} час. {convertTime(film.filmLength).minutes} мин.</p>
                  {film.slogan && <p><span className="text-zinc-400 font-semibold">Слоган: </span>{film.slogan}</p>}
                  <p className="text-zinc-200"><span className="text-zinc-400 font-semibold">Описание: </span>{film.description}</p>
                </div>
            </div>
          </section>
      </main>
  );
}

export default FilmPage;