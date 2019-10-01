import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./body/Body";
// class based component

class App extends React.Component {
	state = {
		headerName: "App Name"
	};
	// render method
	render() {
		// childs
		return (
			<div className={styles.wrapper}>
				<Header header_name={this.state.headerName} />
				<Body />
				<Footer />
			</div>
		);
	}
}

export default App;
