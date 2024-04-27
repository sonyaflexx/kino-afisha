import FilmList from "@/components/filmList";
import Filters from "@/components/filters";
import getPopularFilms from "@/hooks/getPopularFilms";
import FilmShort from "@/types/FilmShort";

export default async function PopularFilmsPage() {
  const popularFilms = await getPopularFilms()

  return (
      <main className="min-h-screen grid grid-cols-5 gap-4 items-start">
        <Filters />
        <FilmList films={popularFilms} />
      </main>
  );
}
