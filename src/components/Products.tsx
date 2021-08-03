
import React, { Fragment, useEffect } from 'react';
import {Product} from './Product';

export const Products = () => {
  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </>
  );
}