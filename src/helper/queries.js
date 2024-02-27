const URL_PRODUCTO = import.meta.env.VITE_API_PRODUCTO;

// GET TODO

export const leerRecetasAPI = async () => {
    try {
      const respuesta = await fetch(URL_PRODUCTO)
      const productos = await respuesta.json()
      return productos
    } catch (error) {
      console.log(error);
    }
};

// GET SOLO

export const obtenerRecetaAPI = async () => {
    try {
      const respuesta = await fetch(URL_PRODUCTO)
      const productos = await respuesta.json()
      return productos
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