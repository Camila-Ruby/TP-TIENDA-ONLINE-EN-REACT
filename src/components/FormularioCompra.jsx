import { useState, useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'

function FormularioCompra() {
    const { carrito, vaciarCarrito } = useContext(CarritoContext)

    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [telefono, setTelefono] = useState('')
    const [direccion, setDireccion] = useState('')
    const [metodoEntrega, setMetodoEntrega] = useState('')
    const [mensaje, setMensaje] = useState('')
    const [errorFormulario, setErrorFormulario] = useState('')
    const [confirmacion, setConfirmacion] = useState(false)

    const validarFormulario = () => {
        return (
            nombre.trim() !== '' &&
            email.trim() !== '' &&
            telefono.trim() !== '' &&
            direccion.trim() !== '' &&
            metodoEntrega !== ''
        )
    }

    const finalizarCompra = (e) => {
        e.preventDefault()

        if (carrito.length === 0) {
            setErrorFormulario('Tu carrito está vacío.')
            return
        }

        if (!validarFormulario()) {
            setErrorFormulario(
                'Por favor, completá todos los campos obligatorios.'
            )
            return
        }

        setErrorFormulario('')
        setConfirmacion(true)
        vaciarCarrito()
    }

    return (
        <div className="formulario-compra">
            <h3 className="titulo-formulario">
                Datos de compra
            </h3>

            <form
                onSubmit={finalizarCompra}
                className="formulario-datos"
            >
                <div className="campo-formulario">
                    <label>Nombre y apellido</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingresá tu nombre completo"
                    />
                </div>

                <div className="campo-formulario">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ejemplo@email.com"
                    />
                </div>

                <div className="campo-formulario">
                    <label>Teléfono</label>
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        placeholder="Ingresá tu teléfono"
                    />
                </div>

                <div className="campo-formulario">
                    <label>Dirección o localidad</label>
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setDireccion(e.target.value)}
                        placeholder="Ingresá tu dirección"
                    />
                </div>

                <div className="campo-formulario">
                    <label>Método de entrega</label>
                    <select
                        value={metodoEntrega}
                        onChange={(e) => setMetodoEntrega(e.target.value)}
                    >
                        <option value="">Seleccioná una opción</option>
                        <option value="Retiro en el local">
                            Retiro en el local
                        </option>
                        <option value="Envío a domicilio">
                            Envío a domicilio
                        </option>
                    </select>
                </div>

                <div className="campo-formulario">
                    <label>Mensaje o aclaración (opcional)</label>
                    <textarea
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        placeholder="¿Querés agregar alguna aclaración?"
                    />
                </div>

                {errorFormulario && (
                    <p className="mensaje-formulario">
                        {errorFormulario}
                    </p>
                )}

                <button
                    type="submit"
                    className="boton-finalizar"
                    disabled={confirmacion}
                >
                    Finalizar compra
                </button>
            </form>

            {confirmacion && (
                <div className="confirmacion-compra">
                    <h4>¡Gracias por tu compra!</h4>
                    <p>
                        Tu pedido en The Book Nook fue registrado correctamente.
                    </p>
                </div>
            )}
        </div>
    )
}

export default FormularioCompra
