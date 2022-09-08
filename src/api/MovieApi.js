

const API_KEY = 'api_key=fc8406e2f7b604a871fcf5ddf13ff322';
const BASE_URL = 'https://api.themoviedb.org/3';

export const cargar_pelicula = async(BODY_URL) => {
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fc8406e2f7b604a871fcf5ddf13ff322`);
        if (resp.status === 200) {
            const data = await resp.json();
            console.log(data);
            
            data.resp.forEach(element => {
                console.log(element);
            });

        }else if (resp.status === 501) {
            console.log('No tienes permiso para acceder a este servicio');
        }
        
    }catch(error){
        console.log(error);
    }    
}

