import { Container, Form } from "react-bootstrap";

const FormularioReceta = () => {
  return (
    <section>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nombre de la receta*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Fideos con salsa" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tipo de cocina*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Italiana, Mexicana, Asiática, Mediterránea, etc."
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ingrediente*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Espacio para ingresar los ingredientes, separados por comas o en líneas separadas"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Instrucciones* </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tiempo de preparación* </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Cargar imagen</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      </Container>
    </section>
  );
};

export default FormularioReceta;