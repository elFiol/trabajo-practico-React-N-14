const URL_RECETAS = import.meta.env.VITE_API_RECETAS;

// GET TODO

export const leerRecetasAPI = async () => {
    try {
      const respuesta = await fetch(URL_RECETAS)
      const recetas = await respuesta.json()
      return recetas
    } catch (error) {
      console.log(error);
    }
};

// GET SOLO

export const obtenerRecetaAPI = async (id) => {
    try {
      console.log(URL_RECETAS + "/" + id)
      const respuesta = await fetch(URL_RECETAS + "/" + id)
      const receta = await respuesta.json()
      return receta
    } catch (error) {
      console.log(error);
    }
  };
// PATCH
// PUT
// POST
// DELETE

export const borrarRecetaAPI = async (id) => {
    try {
      const respuesta = await fetch(`${URL_PRODUCTO}/${id}`,{
        method: "DELETE",
      })
      return respuesta
    } catch (error) {
      console.log(error);
    }
  };