import React, {ChangeEvent, KeyboardEvent} from 'react';

type SuperInputPropsType = {
	callBack: (newValue: string) => void
	value: string
	onKeyDownCallBack: (key: string) => void
}
export const SuperInput: React.FC<SuperInputPropsType> = ({onKeyDownCallBack,value,callBack,...restProps}) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		callBack(e.currentTarget.value)
	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		onKeyDownCallBack(e.key)
	}
	return (
		<input value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
	);
};

