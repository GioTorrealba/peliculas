import cargarTitulos from "./cargarTitulos";
import fetchBusquedda from "./fetchBusqueda";
const btn= document.getElementById('btn-buscar');
btn.addEventListener('click', async(e) => {
    const resultados= await fetchBusquedda();
    cargarTitulos(resultados);

})