import React, { lazy, Suspense } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
//import ItemList from "../ItemList";
import NavBar from "../NavBar";
import { Router } from "@reach/router";
import ItemDetail from "../Detail";

const ItemList = lazy(() => import("../ItemList"));

export default function SimpleContainer() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<NavBar />
				<Suspense fallback={<p>Cargando...</p>}>
					<Router>
						<ItemList path="/" />
						<ItemDetail path="/detail/:itemId" />
					</Router>
				</Suspense>
			</Container>
		</React.Fragment>
	);
}
