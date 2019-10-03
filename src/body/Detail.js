import React from "react";
import Body from "./Body";
export default function Detail(props) {
	const renderProfiles = () => {
		console.log("item", props.profiles);
		return props.profiles.map((item, index) => {
			return (
				<div className="card mx-2" style={{ padding: "10px" }}>
					<img
						src={item.image}
						style={{
							width: "200px",
							height: "200px"
						}}
					/>
					<div
						style={{
							border: "1px solid red",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							padding: "10px",
							margin: "5px"
						}}
					>
						<h3>{item.name}</h3>
						<h5>{item.phone}</h5>
						<button
							style={{
								backgroundColor: "blue",
								padding: "10px",
								borderRadius: "10px",
								color: "#fff"
							}}
							onClick={() => {
								props.getItem(item);
							}}
						>
							click
						</button>
					</div>
				</div>
			);
		});
	};

	return renderProfiles();
}

// ["<div></div>" , "<div></div>" , "<div></div>" ,"<div></div>"]
