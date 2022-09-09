

const API_KEY = 'api_key=fc8406e2f7b604a871fcf5ddf13ff322';
const BASE_URL = 'https://api.themoviedb.org/3';

const cargar_catalogo = async (BODY_URL) => {

    try {
        const resp = await fetch(`${BASE_URL}${BODY_URL}${API_KEY}`);
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

}

const cargar_populares = async (BODY_URL) => {

    try {
        const resp = await fetch(`${BASE_URL}${BODY_URL}${API_KEY}`);
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

}

export const Services = {
    cargar_populares,
    cargar_catalogo
}

