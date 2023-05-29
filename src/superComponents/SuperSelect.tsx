import React, {ChangeEvent} from 'react';

type OptionType = {
    value: string
    label: string
}

type SuperSelectPropsType = {

    options: OptionType[]
    callBack: (value: string) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        callBack,
        ...restProps
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            callBack(e.currentTarget.value)
    }
    return (
        <select onChange={onChangeHandler}>
            {options.map((el, index)=><option key={index} value={el.value}>{el.label}</option>)}
        </select>
    );
};

