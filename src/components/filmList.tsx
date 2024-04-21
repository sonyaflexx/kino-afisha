import FilmItem from "./filmItem";

const FilmList = () => {
    return (
        <section className="col-span-4">
          <h1 className="font-semibold text-2xl pb-8">Список фильмов</h1>
          <ul className="col-span-4 grid grid-cols-4 gap-4">
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
            <FilmItem />
          </ul>
        </section>
    );
};

export default FilmList;