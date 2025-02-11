const fetchGeneros = async (filtro = 'movie')  => {
    const tipo = filtro === 'movie' ? 'movie' : 'tv';
    const url= `https://api.themoviedb.org/3/genre/${tipo}/list?api_key=d807ae29fc959d4d07db2420feb8005a&language=es-ES&page=1`;

try{

    const respuesta = await fetch(url);
    const datos = await respuesta.json();     
    return datos.genres;
}catch(e){
        console.log(e);
    }



};

export default fetchGeneros;