import Genre from "./Genre";
  
interface FilmShort {
      kinopoiskId: number;
      nameRu: string;
      posterUrl: string;
      duration: number;
      genres: Genre[];
      year: number;
}

export default FilmShort;