import { Services } from '../api/MovieApi';
import { useEffect } from 'react';



export const Popular = () => {


  useEffect(() => {
    Services.cargar_pelicula('/movie/popular?', 'popular');

  }, [])

  return (
    <div>
      Popular
    </div>
  )
}
