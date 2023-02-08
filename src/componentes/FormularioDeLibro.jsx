import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const FormularioDeLibro = (props) => {
  const [libro, setLibro] = useState(() => {
    return {
      nombrelibro: props.libro ? props.libro.nombrelibro : '',
      autor: props.libro ? props.libro.autor : '',
      cantidad: props.libro ? props.libro.cantidad : '',
      precio: props.libro ? props.libro.precio : '',
      fecha: props.libro ? props.libro.fecha : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { nombrelibro, autor, precio, cantidad } = libro;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const valores = [nombrelibro, autor, precio, cantidad];
    let errorMsg = '';

    const todosLosCamposLlenos = valores.every((campo) => {
      const valor = `${campo}`.trim();
      return valor !== '' && valor !== '0';
    });

    if (todosLosCamposLlenos) {
      const libro = {
        id: uuidv4(),
        nombrelibro,
        autor,
        precio,
        cantidad,
        fecha: new Date()
      };
      props.handleOnSubmit(libro);
    } else {
      errorMsg = 'Por favor, rellene todos los campos.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'cantidad':
        if (value === '' || parseInt(value) === +value) {
          setLibro((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'precio':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setLibro((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setLibro((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="nombrelibro"
            value={nombrelibro}
            placeholder="Ingrese el nombre del libro"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="autor">
          <Form.Label>Autor del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="autor"
            value={autor}
            placeholder="Ingrese el nombre del autor"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="cantidad">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="cantidad"
            value={cantidad}
            placeholder="Ingrese la cantidad disponible"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="precio">
          <Form.Label>Precio del Libro</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="precio"
            value={precio}
            placeholder="Ingrese el precio del libro"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default FormularioDeLibro;