interface Genre {
    genre: string;
}
  
interface Film {
      kinopoiskId: number;
      nameRu: string;
      posterUrl: string;
      slogan: string;
      editorAnnotation: string;
      type: string;
      year: number;
      filmLength: number;
      genres: Genre[];
      ratingKinopoisk: number;
      description: string;
}

export default Film;