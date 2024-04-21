import FilmList from "@/components/filmList";
import Filters from "@/components/filters";

export default function Home() {
  return (
      <main className="min-h-screen grid grid-cols-5 gap-4">
        <Filters />
        <FilmList />
      </main>
  );
}
