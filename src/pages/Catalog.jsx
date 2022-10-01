import { useEffect } from 'react';
import { Services } from '../api/MovieApi';


export const Catalog = () => {
  
  useEffect(() => {
    Services.cargar_pelicula(`/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2022-09-09&`);
  }, [])
    
  
  return (
  <div>Catalog</div>
)
}
