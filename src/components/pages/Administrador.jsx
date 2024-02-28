import { Container, Button, Table } from "react-bootstrap";
import ItemRecetas from "./recetas/ItemRecetas";
import { useEffect, useState } from "react";
import { leerRecetasAPI } from "../../helper/queries";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() => {
    const consultaAPI = async () => {
      const resultado = await leerRecetasAPI();
      setRecetas(resultado);
      console.log(resultado);
    };
    consultaAPI();
  }, []);

  return (
    <section className="mainSection">
      <Container className="my-5">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="display-4 colorLabels">Recetas disponibles</h1>
          <Button variant="primary">
            <i className="bi bi-file-earmark-plus"></i>
          </Button>
        </div>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Cod</th>
              <th>Nombre de la receta</th>
              <th>Categoria</th>
              <th>URL imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {recetas.map((receta, posReceta) => (
              <ItemRecetas receta={receta} key={posReceta} />
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Administrador;
