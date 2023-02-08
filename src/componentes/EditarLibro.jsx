import React, { useContext } from 'react';
import BooksContext from '../context/BooksContext';
import FormularioDeLibro from './FormularioDeLibro';
import { useParams } from 'react-router-dom';

const EditarLibro = ({ history }) => {
	const { libros, setLibros } = useContext(BooksContext)
  const { id } = useParams();
  const libroParaEditar = libros.find((libro) => libro.id === id);

  const handleOnSubmit = (libro) => {
    const librosFiltrados = libros.filter((libro) => libro.id !== id);
    setLibros([libro, ...librosFiltrados]);
    history.push('/');
  };

  return (
    <div>
      <FormularioDeLibro libro={libroParaEditar} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditarLibro;