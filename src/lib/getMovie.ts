import Movie from "@/types/Movie";

const getMovie = async ( id: any ) : Promise<Movie> => {
  const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': 'c7e781aa-12c9-46de-8441-d0c5ca3a3dc2',
      'Content-Type': 'application/json',
    },
  };
  
  const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, options)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const movieInfo : Movie = await res.json()
  return movieInfo;
}

export default getMovie;