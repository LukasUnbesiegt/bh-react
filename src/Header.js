import React from "react";
import styles from "./Header.module.css";
//functional component
const Header = props => {
	return (
		<div className={styles.headerWrapper}>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#"></a>
				{props.header_name}
			</nav>
		</div>
	);
};

export default Header;
