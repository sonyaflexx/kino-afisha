import FilmShort from "@/types/FilmShort";
import Link from "next/link";

const FilmItem: React.FC<FilmShort> = ({ kinopoiskId, nameRu, posterUrl, duration, genres, year}) => {
    return (
        <li className="">
            <Link href={`films/${kinopoiskId}`} className="w-full h-full flex gap-5 p-5 bg-zinc-800 rounded-3xl hover:bg-zinc-700 active:scale-95 transition-all">
                <img src={posterUrl} alt="" height={191.8} width={128} className="rounded-2xl"/>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold">{nameRu}</span>
                    <span className="text-sm">Описание</span>
                </div>
            </Link>
        </li>
    );
};

export default FilmItem;