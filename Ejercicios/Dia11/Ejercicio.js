const cargarpeliculas = async () =>  {

    try{
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/500?api_key=66bb0deca6fdc22860dc8e63eaac4c87')
        if (!respuesta.ok) {
            throw new Error('Pagina no responde ok' + respuesta.statusText);
        }
        const datos = await respuesta.json();

        console.log(datos);
    } catch (error){
        console.error('Hubo un problema con la solicitud Fetch', error);
    }

    
}

cargarpeliculas()