import React, { useContext } from 'react';
import BooksContext from '../context/BooksContext';
import _ from 'lodash';
import Libro from './Libro';

const ListaDeLibros = () => {
  const { libros, setLibros } = useContext(BooksContext);

  const handleEliminarLibro = (id) => {
    setLibros(libros.filter((libro) => libro.id !== id));
  };

  return (
    <>
      <div className="book-list">
        {!_.isEmpty(libros) ? (
          libros.map((libro) => (
            <Libro key={libro.id} {...libro} handleEliminarLibro={handleEliminarLibro} />
          ))
        ) : (
          <p className="message">No hay libros disponibles. Por favor agregue algunos libros.</p>
        )}
      </div>
    </>
  );
};

export default ListaDeLibros;