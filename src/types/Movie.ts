interface Genre {
    genre: string;
}
  
interface Movie {
      kinopoiskId: number;
      nameRu: string;
      posterUrl: string;
      duration: number;
      genres: Genre[];
      ratingKinopoisk: number;
      description: string;
}

export default Movie;