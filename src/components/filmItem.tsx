import { Rating } from "@mui/material";

interface Genre {
    genre: string;
  }

interface FilmItemProps {
    id: number;
    title: string;
    posterUrl: string;
    duration: number;
    genres: Genre[]
}

const FilmItem: React.FC<FilmItemProps> = ({ id, title, posterUrl, duration, genres }) => {
    return (
        <li key={id} className="">
            <a href="" className="w-full h-full flex gap-5 p-5 bg-zinc-800 rounded-3xl hover:bg-zinc-700 active:scale-95 transition-all">
                <img src={posterUrl} alt="" className="rounded-2xl w-32"/>
                <div className="flex flex-col gap-1">
                    <span className="font-semibold">{title}</span>
                    <span className="text-sm">Описание</span>
                    <Rating name="read-only" value={3.5} precision={0.5}  readOnly />
                </div>
            </a>
        </li>
    );
};

export default FilmItem;