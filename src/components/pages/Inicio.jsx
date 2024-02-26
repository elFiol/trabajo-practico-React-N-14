import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardRecetas from './recetas/CardRecetas';

const Inicio = () => {
    return (
        <section className='mainSection'>
            <div className='tituloInicio py-4'>
                <h2 className='text-center'>Recetas para la cocina</h2>
            </div>
            <Container className='my-3'>
                <h3 className='text-warning mb-3'>Recetas Disponibles</h3>
                <Row>
                    <CardRecetas></CardRecetas>
                    <CardRecetas></CardRecetas>
                    <CardRecetas></CardRecetas>
                    <CardRecetas></CardRecetas>
                </Row>
            </Container>
        </section>
    );
};

export default Inicio;