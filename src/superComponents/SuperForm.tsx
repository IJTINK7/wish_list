import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {SuperButton} from "./SuperButton";
import {SuperInput} from "./SuperInput";

type SuperInputPropsType = {
    callBack: (newValue: string) => void
    setError: (value: string | null) => void


}


export const SuperForm: React.FC<SuperInputPropsType> = (
    {
        callBack,
        setError,
        ...restProps


    }
) => {

    const [newValue, setNewValue] = useState<string>("")

    const onChangeHandler = (newValue: string) => {
        setNewValue(newValue)
        setError(null)
    }


    const onKeyDownCallBack = (key: string) => {
        if (key === "Enter") {
            onClickHandler()
        }
    }

    const onClickHandler = () => {
            callBack(newValue)
            setNewValue("")
    }

    return (

        <div>
            <SuperInput callBack={onChangeHandler} value={newValue} onKeyDownCallBack={onKeyDownCallBack}/>
            {/*<input value={newValue} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>*/}
            <SuperButton callBack={onClickHandler} name={"Add"}/>
        </div>


    );
};

