import getPopularFilms from "@/hooks/getPopularFilms";
import { FilmList } from "@/widgets/films/ui";

export default async function HomePage() {
  const popularFilms = await getPopularFilms()

  return (
      <main className="flex min-h-screen gap-4 items-start">
        <FilmList title="Популярное" films={popularFilms} />
      </main>
  );
}
