import React, {KeyboardEvent} from 'react';

type SuperInputPropsType={
	callBack: ()=> void
	value:string

}

export const SuperInput: React.FC<SuperInputPropsType> = (
	{
		 callBack,
		 value,
		...restProps
	}) => {

	const onChangeHandler = () => {
		callBack()
	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			// addWishHandler()
		}
	}

	return (
		<input value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
	);
};