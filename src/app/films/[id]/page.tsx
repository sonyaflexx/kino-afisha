'use client'

import FilmList from "@/components/filmList";
import Filters from "@/components/filters";
import getFilm from "@/hooks/getFilm";
import { useEffect, useState } from "react";
import Film from "@/types/Film";
import Rating from "@/components/rating";

const MoviePage = ({ params }: { params: any }) => {
  const { id } = params;
  const [movie, setMovie] = useState<Film | null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const movie = await getFilm(id);
                setMovie(movie);
            } catch (error) {
                console.error("Failed to fetch movies:", error);
            }
        };
        fetchMovie();
    }, []);

  return (
      <main className="">
        { movie ?
          <section className="flex gap-8">
            <div className="flex flex-col">
              <img src={movie.posterUrl} width={500} height={300} alt="" />
              123
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-5 items-center">
                <h1 className="text-2xl font-semibold">{movie.nameRu}</h1>
                <Rating value={movie.ratingKinopoisk} />
              </div>
              <p className="text-zinc-200">{movie.description}</p>
            </div>
          </section>
        
          : <></>
        }
      </main>
  );
}

export default MoviePage;