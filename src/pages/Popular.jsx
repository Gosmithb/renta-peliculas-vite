import {cargar_pelicula} from '../api/MovieApi';
export const Popular = () => {
  cargar_pelicula('/movie/popular?');
  return (
    <div>Popular</div>
  )
}
