import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import BotonAgregarCarrito from './BotonAgregarCarrito'

function LibroCard(props) {
    const producto = props.producto

    return (
        <Card className="card-libro h-100">
            <Link to={`/libro/${producto.id}`}>
                <Card.Img
                    variant="top"
                    src={producto.imagen}
                    alt={`Portada de ${producto.nombre}`}
                    className="portada-libro"

                />
            </Link>

            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.autor}</Card.Text>
                <Card.Text>${producto.precio}</Card.Text>

                <BotonAgregarCarrito producto={producto} />

                <Button
                    as={Link}
                    to={`/libro/${producto.id}`}
                    variant="outline-success"
                >
                    Ver detalle
                </Button>
            </Card.Body>
        </Card>
    )
}

export default LibroCard
