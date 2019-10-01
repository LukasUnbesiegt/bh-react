import React from "react";
import Body from "./Body";
export default function Detail(props) {
	const renderProfiles = () => {
		return props.profiles.map((item, index) => {
			return (
				<div>
					<h3>{item.name}</h3>
					<h5>{item.phone}</h5>
				</div>
			);
		});
	};

	return (
		<div
			style={{
				border: "1px solid grey"
			}}
		>
			{renderProfiles()}
		</div>
	);
}

// ["<div></div>" , "<div></div>" , "<div></div>" ,"<div></div>"]
