import { Services } from '../api/MovieApi';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { MovieCard } from '../components/MovieCard';


export const Popular = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    // Services.cargar_pelicula('/movie/popular?');
    const obtenerPeliculas = async() => {
      const url = 'https://api.themoviedb.org/3/movie/popular?api_key=fc8406e2f7b604a871fcf5ddf13ff322';
      const res = await axios.get(url);
    
      // res.data.results.forEach(element => {
      //   console.log(element);
      // });
      setPeliculas(res.data.results);
    }
    obtenerPeliculas();
    
  }, [])


  return (
    <div>
      {peliculas.map((movie, i) => {

        return(
          <MovieCard 
            key={i}
            titulo={movie.title}
            popularidad={movie.popularity}
            lenguaje={movie.original_language}
            />
        )
      })}
    </div>
  )
}
