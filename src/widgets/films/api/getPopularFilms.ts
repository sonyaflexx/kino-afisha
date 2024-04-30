import env from "react-dotenv";
import FilmShort from "@/entities/filmBanner/model/types";

const getPopularFilms = async () : Promise<FilmShort[]> => {
  const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': 'c7e781aa-12c9-46de-8441-d0c5ca3a3dc2',
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 }
  };
  
  const res = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=JANUARY', options)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const popularFilmsAndCount = await res.json()
  const popularFilms : FilmShort[] = popularFilmsAndCount.items
  return popularFilms;
}

export default getPopularFilms;