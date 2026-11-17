
import { createContext, useState } from 'react'

export const CarritoContext = createContext()

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([])
    const vaciarCarrito = () => {
        setCarrito([])
    }
    const agregarAlCarrito = (producto, cantidad = 1) => {
        const productoExistente = carrito.find(
            (item) => item.id === producto.id
        )

        const cantidadActual = productoExistente
            ? productoExistente.cantidad
            : 0

        if (cantidadActual + cantidad > producto.stock) {
            return false
        }

        if (productoExistente) {
            setCarrito(
                carrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                )
            )
        } else {
            setCarrito([
                ...carrito,
                { ...producto, cantidad }
            ])
        }


        return true
    }
    const cambiarCantidad = (producto, nuevaCantidad) => {
        setCarrito((carritoActual) => {
            if (nuevaCantidad <= 0) {
                return carritoActual.filter(
                    (item) => item.id !== producto.id
                )
            }

            if (nuevaCantidad > producto.stock) {
                return carritoActual
            }

            return carritoActual.map((item) =>
                item.id === producto.id
                    ? { ...item, cantidad: nuevaCantidad }
                    : item
            )
        })
    }
    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                cambiarCantidad,
                vaciarCarrito
            }}
        >
            {children}
        </CarritoContext.Provider>
    )
}
