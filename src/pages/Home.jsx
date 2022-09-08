import {cargar_pelicula} from '../api/MovieApi';

export const Home = () => {
  cargar_pelicula();
  return (
    <div>Home</div>
  )
}
