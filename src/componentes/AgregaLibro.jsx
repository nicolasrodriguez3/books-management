import React, { useContext } from 'react';
import BooksContext from '../context/BooksContext';

import FormularioDeLibro from "./FormularioDeLibro"

const AgregaLibro = ({ history }) => {
  const { libros, setLibros } = useContext(BooksContext)
  const handleOnSubmit = (libro) => {
    setLibros([libro, ...libros]);

		// prop "history" es pasada por react-router-dom
    history.push('/');
  };

	return <FormularioDeLibro handleOnSubmit={handleOnSubmit} />
}

export default AgregaLibro
