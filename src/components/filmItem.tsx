import { Rating } from "@mui/material";

interface FilmItemProps {
    id: number;
    title: string;
}

const FilmItem: React.FC<FilmItemProps> = ({ id, title }) => {
    return (
        <li key={id} className="">
            <a href="" className="w-full h-full flex gap-5 p-5 bg-zinc-800 rounded-3xl hover:bg-zinc-700 active:scale-95 transition-all">
                <img src="https://life-secrets.ru/wp-content/uploads/2018/03/mstiteli-1.jpg" alt="" className="rounded-2xl w-32"/>
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