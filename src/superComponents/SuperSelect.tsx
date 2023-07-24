import React, {ChangeEvent} from 'react';

type OptionType = {
    value: string
    label: string
}

type SuperSelectPropsType = {
    value: string
    options: OptionType[]
    callBack: (value: string) => void
}

export const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        callBack,
        value,
        ...restProps
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
            callBack(e.currentTarget.value)
    }
    return (
        <select value={value}  onChange={onChangeHandler}>
            {options.map((el, index)=><option key={index} value={el.value}>{el.label}</option>)}
        </select>
    );
};

