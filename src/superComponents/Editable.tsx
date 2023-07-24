import React, {ChangeEvent, useState} from 'react';
import {SuperInput} from "./SuperInput";
type PropsType = {
	callBack: (newTitle: string) => void
	value: string
}

export const EditableSpan = (props: PropsType) => {
	const [newTitle, setNewTitle] = useState<string>(props.value)
	const [show, setShow] = useState<boolean>(true)

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		// if (key === "Enter") {
			setNewTitle(e.currentTarget.value)
		// }
	}

	const onBlurHandler = () => {
		props.callBack(newTitle)
		setShow(!show)
	}
	return (
		show ? <div onDoubleClick={() => setShow(!show)}>{props.value}</div> :
			<input autoFocus value={newTitle} onBlur={onBlurHandler} onChange={onChangeHandler} />
			// <SuperInput callBack={onChangeHandler} value={newTitle} onKeyDownCallBack={onKeyDownCallBack}/>
	);
};

