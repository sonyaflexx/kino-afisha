import Genre from "@/types/Genre"

const GenresList = ({genres}: {genres: Genre[]}) => {
    return (
        <ul className="flex gap-2 flex-wrap">
            {
<<<<<<< HEAD
                genres.map((genre) => 
                    <li className="p-2 bg-zinc-800 leading-none rounded-lg text-sm">{genre.genre}</li>  
=======
                genres.map((genre, index) => 
                    <li key={index} className="p-2 bg-zinc-800 leading-none rounded-lg text-sm">{genre.genre}</li>  
>>>>>>> bf03809 (никакого FSD.)
                )
            }
        </ul>
    )
}

export default GenresList;