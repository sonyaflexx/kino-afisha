const getPopularMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.API_KEY}`
    }
  };

  const res = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  console.log(res)
  return res.json();
}

export default getPopularMovies;