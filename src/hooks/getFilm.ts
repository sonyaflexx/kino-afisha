import Film from "@/types/Film";
import { cache } from "react";

const getFilm = async ( id: any ) : Promise<Film> => {
  const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': 'c7e781aa-12c9-46de-8441-d0c5ca3a3dc2',
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 }
  };
  
  const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, options)
  const externalSourcesRes = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/external_sources`, options)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const resData = await res.json()
  const externalSources = await externalSourcesRes.json()

  const filmInfo = {
    ...resData,
    externalSources: externalSources.items
  }

  return filmInfo;
}

export default getFilm;