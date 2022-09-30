


const API_KEY = 'api_key=fc8406e2f7b604a871fcf5ddf13ff322';
const BASE_URL = 'https://api.themoviedb.org/3';

const cargar_pelicula = async (BODY_URL, clase) => {
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/997120/recommendations?api_key=fc8406e2f7b604a871fcf5ddf13ff322&language=en-US&page=1`);

        if (resp.status === 200) {
            const data = await resp.json();

            data.results.forEach(peliculas => {
                console.log(peliculas);
            });

        } else if (resp.status === 501) {
            console.log('No tienes permiso para acceder a este servicio');
        }
    } catch (error) {
        console.log(error);
    }

    // switch (clase) {
    //     case clase == 'popular':
    //         try {
    //             const resp = await fetch(`https://api.themoviedb.org/3/movie/997120/recommendations?api_key=fc8406e2f7b604a871fcf5ddf13ff322&language=en-US&page=1`);

    //             if (resp.status === 200) {
    //                 const data = await resp.json();

    //                 data.results.forEach(peliculas => {
    //                     console.log(peliculas);
    //                 });

    //             } else if (resp.status === 501) {
    //                 console.log('No tienes permiso para acceder a este servicio');
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }


    //         break;
    //     case clase === 'catalogo':
    //         try{
    //             if (resp.status === 200) {
    //                 const data = await resp.json();


    //                 data.results.forEach(peliculas => {
    //                     console.log(peliculas);

    //                 });

    //             } else if (resp.status === 501) {
    //                 console.log('No tienes permiso para acceder a este servicio');
    //             }
    //         }catch(error){
    //             console.log(error);
    //         }

    //         break;
    //     case clase === 'recomendaciones':
    //         try{
    //             if (resp.status === 200) {
    //                 const data = await resp.json();


    //                 data.results.forEach(peliculas => {
    //                     console.log(peliculas);
    //                 });

    //             } else if (resp.status === 501) {
    //                 console.log('No tienes permiso para acceder a este servicio');
    //             }
    //         }catch(error){
    //             console.log(error);
    //         }
    //         break;
    //     default:
    //         break;
    // }


    return (
        <div>

        </div>
    )
}

export const Services = {
    cargar_pelicula
}

