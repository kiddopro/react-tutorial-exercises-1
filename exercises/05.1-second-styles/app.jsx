import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	background: "yellow", // Don't change this line
	//write button styles here
	color: "black",
	border: "none",
};

const badgeStyles = {
	borderRadius: "100%", // Don't change this line
	//write the span styles here
	background: "red",
	color: "white",
	padding: "2px 4px 2px 4px",
	margin: "0 0 0 5px",
};

const Badge = (props) => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string,
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
