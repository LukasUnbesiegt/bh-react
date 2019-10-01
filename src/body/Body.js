import React from "react";
import styles from "./Body.module.css";
import Details from "./Detail";
import Image from "./Image";
class Body extends React.Component {
	state = {
		image:
			"https://images.unsplash.com/photo-1569690479596-492a39e083bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",

		isButton: false,
		profiles: [
			{
				name: "Thuta",
				phone: "097744",
				email: "email@email.com",
				age: 40
			},
			{
				name: "Zaw xaw",
				phone: "6777",
				email: "emsssail@email.com",
				age: 56
			},
			{
				name: "Kyaw kyaw",
				phone: "1345",
				email: "ema3333l@email.com",
				age: 10
			},
			{
				name: "Mg mg ",
				phone: "0977w343444",
				email: "sssss@email.com",
				age: 30
			}
		]
	};

	render() {
		return (
			<div className={`card  ${styles.bodyWrapper}   `}>
				<div>
					<Image image_link={this.state.image} />
				</div>

				<div>
					<Details
						profiles={this.state.profiles}
						isButton={this.state.isButton}
					/>
				</div>
			</div>
		);
	}
}

export default Body;
