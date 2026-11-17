import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import productos from '../data/productos'
import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'


function Inicio() {
    return (
        <Container className="my-4">
            <div className="bienvenida text-center">
                <h1>¡Bienvenido a The Book Nook!</h1>
                <p>Encontrá tu próxima historia favorita.</p>
            </div>

            <Carousel
                className="banner-slider"
                interval={4000}
                pause="hover"
                indicators={true}
            >
                <Carousel.Item>
                    <img
                        src= {banner1}
                        alt="Bienvenidos a The Book Nook"
                        className="imagen-banner"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src= {banner2}
                        alt="Bienvenidos a The Book Nook 2"
                        className="imagen-banner"
                    />
                </Carousel.Item>

            </Carousel>

            <h3 className="text-center mb-4">
                Descubrí nuestros libros
            </h3>


            <Carousel
                interval={3000}
                pause="hover"
                indicators={false}
            >
                {Array.from(
                    { length: Math.ceil(productos.length / 3) },
                    (_, indice) => productos.slice(indice * 3, indice * 3 + 3)
                ).map((grupo, indice) => (
                    <Carousel.Item key={indice}>
                        <Row className="g-3 justify-content-center">
                            {grupo.map((producto) => (
                                <Col xs={4} key={producto.id}>
                                    <Link
                                        to={`/libro/${producto.id}`}
                                        className="enlace-carrusel"
                                    >
                                        <img
                                            src={producto.imagen}
                                            alt={`Portada de ${producto.nombre}`}
                                            className="imagen-carrusel"
                                        />
                                        <h6 className="text-center mt-2">
                                            {producto.nombre}
                                        </h6>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>

        </Container>
    )
}

export default Inicio
