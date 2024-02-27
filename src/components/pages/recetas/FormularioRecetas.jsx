import { Container, Form } from "react-bootstrap";

const FormularioReceta = () => {
  return (
    <section className="mainSection">
      <Container>
        <h1 className="colorLabels display-2 mb-3">Formulario de recetas</h1>
        <Form>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">
              Nombre de la receta*
            </Form.Label>
            <Form.Control type="text" placeholder="Ej: Fideos con salsa" />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">Tipo de cocina*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Italiana, Mexicana, Asiática, Mediterránea, etc."
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">Ingrediente*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Espacio para ingresar los ingredientes, separados por comas o en líneas separadas"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">
              Tiempo de preparación*{" "}
            </Form.Label>
            <Form.Control type="text" placeholder="Ej: 1 hora, 2 hora" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="colorLabels">Cargar imagen</Form.Label>
            <Form.Control type="text" placeholder="Ej: www.lugar.com/imagenes/comida.png"/>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="colorLabels">Instrucciones* </Form.Label>
            <Form.Control as="textarea" placeholder="agregue aqui su contenido de instrucciones" rows={3} />
          </Form.Group>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioReceta;
