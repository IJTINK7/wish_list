import React from 'react';
type SuperButtonPropsType = {
    callBack: () => void
    name: string
}



export const SuperButton = (props:SuperButtonPropsType) => {
   const {callBack, name} = props

    const onClickHandler = () => {
        callBack()
    }
    return (
       <button onClick={onClickHandler}>{name}</button>
    );
};

