import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
	{
		title: "What is React?",
		content: "React is a front-end Javascript Library",
	},
	{
		title: "Why use React?",
		content: "React is a favorite JS library among engineers.",
	},
	{
		title: "How do you use React?",
		content: "You use react by creating components",
	},
];

const options = [
	{
		label: "Red",
		value: "Red",
	},
	{
		label: "Green",
		value: "Green",
	},
	{
		label: "Blue",
		value: "Blue",
	},
];

export default () => {
	return (
		// <Accordion items={ items } />
		// <Search />
		<Dropdown options={options} />
	);
};
