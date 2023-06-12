import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type SuperInputPropsType = {
    callBack: (newValue: string) => void
    value: string
    onKeyDownCallBack: (key: string) => void

}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              onKeyDownCallBack,
                                                              value, callBack, ...restProps
                                                          }) => {

      // const [superInputValue, setSuperInputValue] = useState<string >(value)

        const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {

            callBack(e.currentTarget.value)
        }

        const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            onKeyDownCallBack(e.key)
        }

    return (
        <input value={value} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
    );
};

