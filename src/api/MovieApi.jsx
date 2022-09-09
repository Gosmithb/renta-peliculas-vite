

const API_KEY = 'api_key=fc8406e2f7b604a871fcf5ddf13ff322';
const BASE_URL = 'https://api.themoviedb.org/3';

export const cargar_pelicula = async(BODY_URL) => {
    BODY_URL = '/movie/popular?';
    try {
        const resp = await fetch(`${BASE_URL}${BODY_URL}${API_KEY}`);
        if (resp.status === 200) {
            const data = await resp.json();
            
            let peliculas = '';
            data.results.forEach(peliculas => {
                peliculas = peliculas + '<h1>funciona</h1>';
            });

        }else if (resp.status === 501) {
            console.log('No tienes permiso para acceder a este servicio');
        }
        
    }catch(error){
        console.log(error);
    }
    
    
    
    return (
        <>
        </>
    )
}

