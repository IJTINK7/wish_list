import React, {useState} from 'react';

export const UseState = () => {
	const [hello, setHello] = useState<string>("")
	const Message = () => {
		setHello("Yo")
	}
	console.log(hello)
	return (
		<div>

		</div>
	);
};
