import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ItemList from "../ItemList";
import NavBar from "../NavBar";

export default function SimpleContainer() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<NavBar />
				<ItemList />
				<Typography
					component="div"
					style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
				/>
			</Container>
		</React.Fragment>
	);
}
