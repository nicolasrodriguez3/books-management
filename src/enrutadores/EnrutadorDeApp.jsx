import { BrowserRouter, Switch, Route } from "react-router-dom"
import Header from "../componentes/Header"
import AgregaLibro from "../componentes/AgregaLibro"
import ListaDeLibros from "../componentes/ListaDeLibros"
import usaAlmacenamientoLocal from "../hooks/usaAlmacenamientoLocal"
import EditarLibro from "../componentes/EditarLibro"
import BooksContext from "../context/BooksContext"

const EnrutadorDeApp = () => {
	const [libros, setLibros] = usaAlmacenamientoLocal("libros", [])

	return (
		<BrowserRouter>
			<div>
				<Header />
				<div className="main-content">
					<BooksContext.Provider value={{ libros, setLibros }}>
						<Switch>
							<Route component={ListaDeLibros} path="/" exact={true} />
							<Route component={AgregaLibro} path="/add" />
							<Route component={EditarLibro} path="/edit/:id" />
							<Route component={() => <Redirect to="/" />} />
						</Switch>
					</BooksContext.Provider>
				</div>
			</div>
		</BrowserRouter>
	)
}

export default EnrutadorDeApp
