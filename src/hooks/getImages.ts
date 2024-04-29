import Film from "@/types/Film";
import { cache } from "react";
import Image from "@/types/Image";

const getImages = async ( id: any ) : Promise<Image[]> => {
  const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': 'c7e781aa-12c9-46de-8441-d0c5ca3a3dc2',
      'Content-Type': 'application/json',
    },
    next: { revalidate: 3600 }
  };
  
  const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images`, options)
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const images = await res.json()

  return images.items;
}

export default getImages;