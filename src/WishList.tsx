import React from 'react';
import {WishesDataPropsType} from "./App";

export type WishListPropsType = {
	wishes: WishesDataPropsType[]
}

export const WishList = (props: WishListPropsType) => {
	return (
			<div>
				<h1>Phones</h1>
				<div>
					<input placeholder={"Enter an item"}/>
					<select>
						<option selected value="All">Select OS</option>
						<option value="Android">Android</option>
						<option value="iOS">iOS</option>
					</select>
					<button>Add</button>
				</div>
				<ul>
					<li><input type="checkbox"
							   checked={props.wishes[0].checked}/><span> {props.wishes[0].title}</span><span> / OS: </span><span> {props.wishes[0].OS} </span>
						<button>X</button>
					</li>
					<li><input type="checkbox" checked={props.wishes[1].checked}/><span> {props.wishes[1].title} </span><span> / OS: </span><span> {props.wishes[1].OS} </span>
						<button>X</button>
					</li>
					<li><input type="checkbox" checked={props.wishes[2].checked}/><span> {props.wishes[2].title} </span><span> / OS: </span><span> {props.wishes[2].OS} </span>
						<button>X</button>
					</li>
					<li><input type="checkbox" checked={props.wishes[3].checked}/><span> {props.wishes[3].title} </span><span> / OS: </span><span> {props.wishes[3].OS} </span>
						<button>X</button>
					</li>
					<li><input type="checkbox" checked={props.wishes[4].checked}/><span> {props.wishes[4].title} </span><span> / OS: </span><span> {props.wishes[4].OS} </span>
						<button>X</button>
					</li>
				</ul>
				<div>
					FILTER BY:
					<div>
						<select>
							<option value="All">All</option>
							<option value="Android">Android</option>
							<option value="iOS">iOS</option>
						</select>
					</div>
				</div>
			</div>
		);
}
