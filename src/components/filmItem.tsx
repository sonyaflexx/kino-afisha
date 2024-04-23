import Link from "next/link";

interface Genre {
    genre: string;
  }

interface FilmItemProps {
    id: number;
    title: string;
    posterUrl: string;
    duration: number;
    genres: Genre[]
    //rating: number;
}

const FilmItem: React.FC<FilmItemProps> = ({ id, title, posterUrl, duration, genres}) => {
    return (
        <li className="">
            <Link href={`films/${id}`} className="w-full h-full flex gap-5 p-5 bg-zinc-800 rounded-3xl hover:bg-zinc-700 active:scale-95 transition-all">
                <img src={posterUrl} alt="" height={191.8} width={128} className="rounded-2xl"/>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold">{title}</span>
                    <span className="text-sm">Описание</span>
                </div>
            </Link>
        </li>
    );
};

export default FilmItem;