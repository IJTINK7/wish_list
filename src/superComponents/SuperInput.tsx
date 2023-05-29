import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type SuperInputPropsType = {
    callBack: (newValue: string) => void
    setError: (value: string | null) => void


}


export const SuperInput: React.FC<SuperInputPropsType> = (
    {
        callBack,
        setError,
        ...restProps


    }
) => {

    const [newValue, setNewValue] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.currentTarget.value)
        setError(null)
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickHandler()
        }
    }
    const onClickHandler = () => {
            callBack(newValue)
            setNewValue("")
    }

    return (

        <div>
            <input value={newValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>


    );
};

