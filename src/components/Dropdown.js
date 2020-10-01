import React, { useState, useEffect, useRef } from "react";

const DropDown = ({ options, selected, onSelectedChange, label }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef();
	const colorStyle = { color: selected.label };

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};

		document.body.addEventListener("click", onBodyClick);

		return () => {
			document.body.removeEventListener("click", onBodyClick);
		};
	}, []);

	const redneredOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className='item'
				onClick={() => onSelectedChange(option)}>
				{option.label}
			</div>
		);
	});

	return (
		<div className='ui form' ref={ref}>
			<div className='field'>
				<label className='label'>{label}</label>
				<div
					onClick={() => setOpen(!open)}
					className={`ui selection dropdown ${open ? "visible active" : ""}`}>
					<i className='dropdown icon'></i>
					<div className='text'>{selected.label}</div>
					<div className={`menu ${open ? "visible transition" : ""}`}>
						{redneredOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default DropDown;
