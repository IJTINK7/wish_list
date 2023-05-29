import React, {ChangeEvent} from 'react';


type SuperCheckBoxPropsType = {
    checked: boolean
    callBack: (value: boolean)=> void
}


const SuperCheckbox: React.FC<SuperCheckBoxPropsType> = (
    {
        checked,
        callBack,
        ...restProps
    }
) => {


const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

    callBack(e.currentTarget.checked)

}

    return (


         <input type="checkbox" onChange={onChangeHandler} checked={checked}/>


    );
};

export default SuperCheckbox;