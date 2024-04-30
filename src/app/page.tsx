import getPopularFilms from "@/hooks/getPopularFilms";
import FilmList from "@/components/filmList";

export default async function HomePage() {
  const popularFilms = await getPopularFilms()

  return (
      <main className="flex min-h-screen gap-4">
        <FilmList title="Популярное" films={popularFilms} />
      </main>
  );
}
