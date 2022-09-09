import { Services } from '../api/MovieApi';
import { useEffect, useState } from 'react';
export const Popular = () => {


  useEffect(() => {
    Services.cargar_populares('/movie/popular?');

  }, [])

  return (
    <div>
      Popular
    </div>
  )
}
