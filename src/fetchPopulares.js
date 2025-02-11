import fetchGeneros from "./fetchGeneros";
import obtenerGenero from "./obtenerGenero";
const fetchPopulares = async(filtro = 'movie') => {
    const tipo = filtro === ' movie' ? 'movie' : 'tv';

    const url= `https://api.themoviedb.org/3/${tipo}/popular?api_key=d807ae29fc959d4d07db2420feb8005a&language=es-ES&page=1`;

try{

    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const resultados = datos.results;

    const generos = await fetchGeneros();
    resultados.forEach((resultado) => {
        resultado.genero =  obtenerGenero(resultado.genre_ids[0], generos);
       
        
    });

    return resultados;
}catch(e){
        console.log(e);
    }

}

export default fetchPopulares;