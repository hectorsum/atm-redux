import React from 'react'

export const Product = () => {
  //const { nombre, precio, id } = product;
  return (
    <div>
      <tr>
        <td>{}</td>
        <td><span className="font-weight-bold"> $ {} </span></td>
        <td className="acciones">
          <button
            type="button"
            //onClick={() => redireccionarEdicion(product)}
            className="btn btn-primary mr-2">
            Editar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            //onClick={() => confirmarEliminarProducto(id)}
          >Eliminar </button>
        </td>
      </tr>
    </div>
  )
}
