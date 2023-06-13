import React, {ChangeEvent, useState} from 'react';
import {SuperInput} from "./SuperInput";

type PropsType = {
    callBack: (newTitle: string) => void
    value: string
}

export const EditableSpan = (props: PropsType) => {

    const [newTitle, setNewTitle] = useState<string>(props.value)
    const [show, setShow] = useState<boolean>(true)



const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {

        setNewTitle(e.currentTarget.value)
    console.log(newTitle)
}

const onBlurHandler = () => {
        props.callBack(newTitle)

    setShow(!show)
}


    return (
        show ?  <span onDoubleClick={()=>setShow(!show)}>{props.value}</span> : <input autoFocus value={newTitle} onBlur={onBlurHandler} onChange={onChangeHandler}/>

    );
};

