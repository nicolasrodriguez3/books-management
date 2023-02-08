import { useHistory } from "react-router-dom"
import { Button, Card } from "react-bootstrap"

const Libro = ({ id, nombrelibro, autor, precio, cantidad, fecha, handleEliminarLibro }) => {
	const history = useHistory();
	return (
		<Card style={{ width: "18rem" }} className="book">
			<Card.Body>
				<Card.Title className="book-title">{nombrelibro}</Card.Title>
				<div className="book-details">
					<div>Autor: {autor}</div>
					<div>Cantidad: {cantidad} </div>
					<div>Precio: {precio} </div>
					<div>Fecha: {new Date(fecha).toDateString()}</div>
				</div>
				<Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
					Editar
				</Button>{" "}
				<Button variant="danger" onClick={() => handleEliminarLibro(id)}>
					Eliminar
				</Button>
			</Card.Body>
		</Card>
	)
}

export default Libro
