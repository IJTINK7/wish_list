import React from 'react';
import {WishesType} from "./App";


export type WishListPropsType = {


    wishes: WishesType

}

export const WishList = (props:WishListPropsType) => {
    return (
        <div>
            <h1>{props.wishes.category}</h1>
            <div>
                <input type="text"/>
                <input type="text"/>
                <button>Add</button>
            </div>
            <div>
                <select>
                    <option selected>OS</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                    <option value="Windows Phone">Windows Phone</option>
                </select>
            </div>
            <ul>
                {props.wishes.data.map(el=>{
                    return(
                        <li key={el.id}>
                            <input type="checkbox" checked={el.checked}/>
                            <span> {el.title} </span>
                            <button>X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}
