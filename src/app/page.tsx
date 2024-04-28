import FilmList from "@/components/filmList";
import Filters from "@/components/filters";
import getPopularFilms from "@/hooks/getPopularFilms";

export default async function HomePage() {
  const popularFilms = await getPopularFilms()

  return (
      <main className="min-h-screen grid grid-cols-5 gap-4 items-start">
        <Filters />
        <FilmList title="Популярное" films={popularFilms} />
      </main>
  );
}
