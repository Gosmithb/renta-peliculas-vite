import { Services } from '../api/MovieApi';
import { useEffect } from 'react';

export const Recommendations = (idMovie) => {


  useEffect(() => {
    Services.cargar_pelicula(`/movie/${idMovie}/recommendations?`);

  }, [])
  

  
  return (
    <div>
     Recomendaciones

    </div>
  )
}
