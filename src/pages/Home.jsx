import { useEffect } from "react"
import { Services } from "../api/MovieApi"

export const Home = () => {

  // let date = new Date();
  // let fechaActual = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;

  useEffect(() => {
    Services.cargar_catalogo(`/discover/movie?primary_release_date.gte=2021-09-15&primary_release_date.lte=2022-09-09&`);
  }, [])



  return (
    <div>Home</div>
  )
}
