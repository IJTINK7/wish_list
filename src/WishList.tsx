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
                <input type="text" placeholder={"Enter an item"}/>
                <select>
                    <option selected>OS</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                    <option value="Windows Phone">Windows Phone</option>
                </select>
                <input type="text" placeholder={"Enter a price"}/>
                <button>Add</button>
            </div>
            <ul>
                {props.wishes.data.map(el=>{
                    return(
                        <li key={el.id}>
                            <input type="checkbox" checked={el.checked}/>
                            <span onDoubleClick={()=>{alert("Ho")}}> {el.title} </span>
                            <span> / OS: </span>
                            <span onDoubleClick={()=>{alert("He")}}> {el.OS} </span>
                            <span> / price: </span>
                            <span onDoubleClick={()=>{alert("Hi")}}> {el.price} </span>
                            <button>X</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                FILTER BY:
                <div>
                    <select>
                        <option selected>OS</option>
                        <option value="Android">Android</option>
                        <option value="iOS">iOS</option>
                        <option value="Windows Phone">Windows Phone</option>
                    </select>
                </div>
                <div>
                    <select>
                        <option selected>Price</option>
                        <option value="Android"> ≤ 500</option>
                        <option value="iOS">500-1000</option>
                        <option value="Windows Phone">≥1000</option>
                    </select>
                </div>
            </div>
        </div>

    );

}
