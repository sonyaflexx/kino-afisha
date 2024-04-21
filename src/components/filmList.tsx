import { useEffect } from "react";
import FilmItem from "./filmItem";
import { GetServerSideProps } from 'next';

interface Movie {
    id: number;
    title: string;
  }
  
  interface MoviesProps {
    movies: Movie[];
  }

const FilmList: React.FC<MoviesProps> = ({ movies }) => {
    return (
        <section className="col-span-4">
          <h1 className="font-semibold text-2xl pb-5">Список фильмов</h1>
          <ul className="flex flex-col gap-4">
            <FilmItem />
            { movies.map(movie => (
                <FilmItem key={movie.id} title={movie.title} />
            )) }
          </ul>
        </section>
    );
};

export const getServerSideProps: GetServerSideProps<MoviesProps> = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTRhODIwZGQ1MDc2MzI4MWMyZThjZjJiZmEwMmM0MSIsInN1YiI6IjY2MjU2YzEyMjIxYmE2MDE3YzE0YTcxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8ZvovR7C-_DEwbqI087EaAU-JcpMkL96cQeKYph0C8'
      }
    };
  
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=1', options);
    const data = await response.json();
    const movies: Movie[] = data.results;
  
    return {
      props: {
        movies,
      },
    };
  };

export default FilmList;