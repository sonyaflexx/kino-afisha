import FilmItem from "./filmItem";
import FilmShort from "@/types/FilmShort";

const FilmList = ({ title, films }: { title: string, films: FilmShort[] }) => {
    if (!films) {
        return <div >Loading...</div>;
    }

    return (
        <section className="w-full">
            <h2 className="font-semibold text-2xl pb-5">{title}</h2>
            <ul className="flex overflow-auto gap-4 pb-3">
                {films.map((film, index) => (
                    <li key={index}>
                        <FilmItem  
                            kinopoiskId={film.kinopoiskId} 
                            nameRu={film.nameRu} 
                            duration={film.duration} 
                            genres={film.genres} 
                            posterUrl={film.posterUrl} 
                            year={film.year}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );

};

export default FilmList;