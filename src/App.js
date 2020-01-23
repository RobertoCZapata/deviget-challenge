import React from "react";
import Container from "./components/Container";
import { Provider } from "react-redux";

function App({ store }) {
	return (
		<Provider store={store}>
			<Container />
		</Provider>
	);
}

export default App;
