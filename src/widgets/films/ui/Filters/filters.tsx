'use client'

import { Radio } from "@mui/material";
import { useState } from "react";
import { orange } from "@mui/material/colors";

const Filters = () => {
    const [rating, setRating] = useState('any')

    return (
      <section className="col-span-1 bg-zinc-900 p-4 rounded-3xl">
        <h2 className="font-semibold text-xl">Фильтры</h2>
        <ul>
            <li className="p-2">
                <h3 className="font-semibold text-md text-zinc-400">Рейтинг</h3>
                <form className="text-zinc-300 text-sm px-3 flex flex-col">
                  <label htmlFor="perfectRating">
                    Больше 4
                    <Radio
                      name="rating"
                      id="perfectRating"
                      value="moreThan4"
                      checked={rating === 'moreThan4'}
                      onChange={() => setRating('moreThan4')}
                      className="w-7 h-6"
                      size="small"
                      sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }}
                    />
                  </label>
                  <label htmlFor="goodRating">
                    Больше 3
                    <Radio
                      name="rating"
                      id="goodRating"
                      value="moreThan3"
                      checked={rating === 'moreThan3'}
                      onChange={() => setRating('moreThan3')}
                      size="small"
                      className="w-7 h-6"
                      sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }}
                    />
                  </label>
                  <label htmlFor="badRating" className="">
                    Больше 2
                    <Radio
                      name="rating"
                      id="badRating"
                      value="moreThan2"
                      checked={rating === 'moreThan2'}
                      onChange={() => setRating('moreThan2')}
                      className="w-7 h-6"
                      size="small"
                      sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }}
                    />
                  </label>
                  <label htmlFor="anyRating" className="">
                    Любой
                    <Radio
                      name="rating"
                      id="anyRating"
                      value="any"
                      checked={rating === 'any'}
                      onChange={() => setRating('any')}
                      className="w-7 h-6"
                      size="small"
                      sx={{
                        color: orange[800],
                        '&.Mui-checked': {
                          color: orange[600],
                        },
                      }}
                    />
                  </label>
                </form>
            </li>
        </ul>
      </section>
    );
};

export default Filters;