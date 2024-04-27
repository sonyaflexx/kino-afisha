interface Genre {
    genre: string;
}
  
interface FilmShort {
      kinopoiskId: number;
      nameRu: string;
      posterUrl: string;
      duration: number;
      genres: string[];
      year: number;
}

export default FilmShort;