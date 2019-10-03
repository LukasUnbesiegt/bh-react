import React, { Fragment } from "react";
import styles from "./Body.module.css";
import Details from "./Detail";
import Image from "./Image";
class Body extends React.Component {
	state = {
		isButton: false,
		currentProfile: null,
		profiles: [
			{
				name: "Thuta",
				phone: "097744",
				email: "email@email.com",
				age: 40,
				image:
					"https://images.unsplash.com/photo-1569690479596-492a39e083bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Zaw xaw",
				phone: "6777",
				email: "emsssail@email.com",
				age: 56,
				image:
					"https://images.unsplash.com/photo-1569690479596-492a39e083bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Kyaw kyaw",
				phone: "1345",
				email: "ema3333l@email.com",
				age: 10,
				image:
					"https://images.unsplash.com/photo-1569690479596-492a39e083bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
			},
			{
				name: "Mg mg ",
				phone: "0977w343444",
				email: "sssss@email.com",
				age: 30,
				image:
					"https://images.unsplash.com/photo-1569690479596-492a39e083bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
			}
		]
	};

	getItem = item => {
		this.setState({
			currentProfile: item
		});
	};

	render() {
		console.log("current profile", this.state.currentProfile);
		return (
			<Fragment>
				<div
					style={{
						backgroundColor: "red",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}
				>
					<h1 className="m-2">Current Profile</h1>
					<h3 className="m-2">
						{this.state.currentProfile
							? this.state.currentProfile.name
							: "no name"}
					</h3>
					<h3 className="m-2">
						{" "}
						{this.state.currentProfile
							? this.state.currentProfile.phone
							: "no phone"}
					</h3>
				</div>

				<div className={`${styles.bodyWrapper} `}>
					<Details
						profiles={this.state.profiles}
						isButton={this.state.isButton}
						getItem={this.getItem}
					/>
				</div>
			</Fragment>
		);
	}
}

export default Body;
