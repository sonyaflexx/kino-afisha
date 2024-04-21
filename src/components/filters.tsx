const Filters = () => {
    return (
      <section className="col-span-1 bg-zinc-900 p-4 rounded-3xl">
        <h2 className="font-semibold text-lg">Фильтры</h2>
        <ul>
            <li className="p-2">
                <h3 className="font-semibold text-zinc-400">Рейтинг</h3>
                <ul className="text-zinc-300 px-3">
                    <li>
                        <label>
                            Больше 4
                            <input type="radio" name="rating" value="4+" checked/>
                        </label>
                    </li>
                    <li>
                        <label>
                            Больше 3
                            <input type="radio" name="rating" value="3+" />
                        </label>
                    </li>
                    <li>
                        <label>
                            Больше 2
                            <input type="radio" name="rating" value="2+" />
                        </label>
                    </li>
                    <li>
                        <label>
                            Любой
                            <input type="radio" name="rating" value="any" checked />
                        </label>
                    </li>
                </ul>
            </li>
        </ul>
      </section>
    );
};

export default Filters;