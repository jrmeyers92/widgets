import React, { useState } from "react";
import Dropdown from "./Dropdown";

const options = [
	{
		label: "Afrikaans",
		value: "af",
	},
	{
		label: "Arabic",
		value: "ar",
	},
	{
		label: "Hindi",
		value: "hi",
	},
];

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);
	const [text, setText] = useState("");
	return (
		<div>
			<input value={text} />
			<Dropdown
				options={options}
				selected={language}
				onSelectedChange={setLanguage}
				label='Select a Language'
			/>
		</div>
	);
};

export default Translate;
