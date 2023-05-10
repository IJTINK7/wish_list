import React from 'react';
import {WishesType} from "./App";

export type WishListPropsType = {

    wishes: WishesType[]

}

export const WishList = (props:WishListPropsType) => {

    return (
        <div>
            <h1>{props.wishes[5].category}</h1>
            <ul>
                <li >
                    <input type='checkbox' checked={props.wishes[0].checked}/>
                    <span>{props.wishes[3].title}</span> {` - ${props.wishes[3].OS} - ${props.wishes[3].price}   `}
                    <button>х</button>
                </li>
            </ul>
        </div>
    );

}
