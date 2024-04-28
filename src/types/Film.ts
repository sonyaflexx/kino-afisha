import Genre from "./Genre";

interface externalSource {
    url: string,
    platform: string,
    logoUrl: string
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
      externalSources: externalSource[]
}

export default Film;