const fetchItem = async (id) => {
    const tipo = document.querySelector('.main__filtros .btn--active').id;
    

    try{
        const url = `https://api.themoviedb.org/3/${tipo}/${id}?api_key=d807ae29fc959d4d07db2420feb8005a&language=es-ES`

        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;

    }catch(e){
        console.log(e);
    }
}

export default fetchItem;