import { Col, Card, Button } from "react-bootstrap";

const CardRecetas = () => {
    return (
        <Col md={4} lg={4} className="mb-3">
          <Card className="h-100 text-light bg-dark">
            <div>
              <img src="https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cafe" className="card-img-top-nueva" />
            </div>
            <Card.Body>
            <Card.Title className="primary-font">titulo</Card.Title>
            <Card.Text>
              Descripción: como hacer un espuma de leche cremosa sobre un espresso fuerte. <br className="mb-2"/> 
            </Card.Text>
            </Card.Body>
            <Card.Footer className="text-end">
            <Button className='btn btn-warning me-2' >Ver más</Button>
          </Card.Footer>
          </Card>
        </Col>
    );
};

export default CardRecetas;