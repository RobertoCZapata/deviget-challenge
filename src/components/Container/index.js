import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ItemList from "../ItemList";
import NavBar from "../NavBar";
import { Router } from "@reach/router";
import ItemDetail from "../Detail";

export default function SimpleContainer() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<NavBar />
				<Router>
					<ItemList path="/" />
					<ItemDetail path="/detail/:itemId" />
				</Router>
			</Container>
		</React.Fragment>
	);
}
