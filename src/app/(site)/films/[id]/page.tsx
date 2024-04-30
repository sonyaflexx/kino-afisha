import getFilm from "@/widgets/films/api/getFilm";
import Rating from "@/components/rating";
import convertTime from "@/utils/convertTime";
<<<<<<< HEAD:src/app/(site)/films/[id]/page.tsx
import GenresList from "@/components/genresList";
import getImages from "@/widgets/films/api/getImages";
=======
import getImages from "@/hooks/getImages";
>>>>>>> bf03809 (никакого FSD.):src/app/films/[id]/page.tsx

const FilmPage = async ({ params }: { params: any }) => {
    const { id } = params;
    const film = await getFilm(id)
    const images = await getImages(id)
<<<<<<< HEAD:src/app/(site)/films/[id]/page.tsx

=======
    
>>>>>>> bf03809 (никакого FSD.):src/app/films/[id]/page.tsx
    return (
        <section className="flex gap-8 flex-wrap justify-center">
                <div className="flex flex-col gap-4 w-full max-w-52">
                <img src={film.posterUrl} width={300} height={500} alt="" className="w-full rounded-xl" />
                {film.externalSources && film.externalSources.length > 0 && 
                    <ul className="flex flex-col gap-2">
                    <h2 className="font-semibold">Смотреть на:</h2>
                    {film.externalSources.map((source) => 
                        <li>
                        <a href={source.url} target="_blank" className="flex py-2 px-3 items-center gap-2 bg-zinc-800 rounded-xl transition-all hover:bg-orange-500">
                            <img src={source.logoUrl} width={30} height={30} alt={source.platform} className="rounded-md" />
                            <span className="leading-none font-semibold">{source.platform}</span>
                        </a>
                        </li>
                    )}
                    </ul>
                }
                </div>
                <div className="flex flex-1 min-w-96 flex-col gap-2">
                <div className="flex gap-5 items-center leading-none">
                    <h1 className="text-2xl font-semibold">{film.nameRu}</h1>
                    <Rating value={film.ratingKinopoisk} />
                </div>
<<<<<<< HEAD:src/app/(site)/films/[id]/page.tsx
                    <GenresList genres={film.genres} />
=======
                    <ul className="flex gap-2">
                    {
                        film.genres.map((genre, index) => 
                        <li key={index} className="p-2 bg-zinc-800 leading-none rounded-lg text-sm">{genre.genre}</li>  
                        )
                    }
                    </ul>
>>>>>>> bf03809 (никакого FSD.):src/app/films/[id]/page.tsx
                    <div className="py-2 flex flex-col gap-2">
                    <p><span className="text-zinc-400 font-semibold">Год: </span>{film.year}</p>
                    <p><span className="text-zinc-400 font-semibold">Длительность: </span>{convertTime(film.filmLength).hours} час. {convertTime(film.filmLength).minutes} мин.</p>
                    {film.slogan && <p><span className="text-zinc-400 font-semibold">Слоган: </span>{film.slogan}</p>}
                    <p className="text-zinc-200"><span className="text-zinc-400 font-semibold">Описание: </span>{film.description}</p>
<<<<<<< HEAD:src/app/(site)/films/[id]/page.tsx
=======
                    
>>>>>>> bf03809 (никакого FSD.):src/app/films/[id]/page.tsx
                    {images && images.length > 0 && 
                    <section className="my-3">
                        <h3 className="font-semibold text-lg text-zinc-100">Кадры</h3>
                        <ul className="flex gap-3 overflow-auto flex-nowrap py-2">
                            {images.map((image, index) => (
                                <li key={index} className="rounded-lg flex-shrink-0 h-36">
                                    <button className="h-full active:scale-95 hover:border-zinc-400 transition-all rounded-lg border-solid border-2 border-zinc-700">
                                        <img src={image.previewUrl} alt={`Image ${index}`} className="h-full object-cover rounded-lg" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>
                    }
<<<<<<< HEAD:src/app/(site)/films/[id]/page.tsx
=======
                    </div>
>>>>>>> bf03809 (никакого FSD.):src/app/films/[id]/page.tsx
                </div>
            </div>
        </section>
    )
}

export default FilmPage;