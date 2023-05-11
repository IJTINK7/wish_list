import React from 'react';
import {WishesType} from "./App";

export type WishListPropsType = {
	wishes: WishesType
}

export const WishList = (props: WishListPropsType) => {
	return (
		<div>
			<h1>{props.wishes.category}</h1>
			<div>
				<input type="text" placeholder={"Enter an item"}/>
				<select>
					<option selected>Select OS</option>
					<option value="Android">Android</option>
					<option value="iOS">iOS</option>
					<option value="Windows Phone">Windows Phone</option>
				</select>
				<button>Add</button>
			</div>
			<ul>
				{props.wishes.data.map(el => {
					return (
						<li key={el.id}>
							<input type="checkbox" checked={el.checked}/>
							<span onDoubleClick={() => {
								alert("Ho")
							}}> {el.title} </span>
							<span> / OS: </span>
							<span onDoubleClick={() => {
								alert("He")
							}}> {el.OS} </span>
							<button>X</button>
						</li>
					)
				})}
			</ul>
			<div>
				FILTER BY:
				<div>
					<select>
						<option selected>All</option>
						<option value="Android">Android</option>
						<option value="iOS">iOS</option>
					</select>
				</div>
			</div>
		</div>
	);
}
