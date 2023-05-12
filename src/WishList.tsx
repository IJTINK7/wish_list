import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {OsType, WishesDataPropsType} from "./App";

export type WishListPropsType = {
	wishes: WishesDataPropsType[]
	addItem: (newItem: string, wishFilter: OsType)=> void
	removeTask: (taskId: string) => void
	ChangeOs: (osValue: OsType) => void
	osFilter: OsType
}

export const WishList = (props: WishListPropsType) => {
	let [newItem, setNewItem] = useState("")
	let [wishFilter, SetWishFilter] = useState<OsType>("All")

	const onNewItemChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setNewItem(e.currentTarget.value)
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.ctrlKey && e.charCode === 13) {
			addItemHandler()
		}
	}

	const addItemHandler = () => {
		if(wishFilter !== "All"){
			if (newItem.trim() !== "") {
				props.addItem(newItem, wishFilter)
				setNewItem("")
			}
		}
		else return
	}
	const removeTaskHandler = (taskId: string) => {
		props.removeTask(taskId)
	}
	const ChangeOsHandler = (OsValue: OsType) => {
		props.ChangeOs(OsValue)
	}

	return (
			<div>
				<h1>Phones</h1>
				<div>
					<input placeholder={"Enter an item"}
						   value={newItem}
						   onChange={onNewItemChangeHandler}
						   onKeyPress={onKeyPressHandler}/>
					<select value={wishFilter} onChange={(e) => SetWishFilter(e.currentTarget.value as OsType)}>
						<option selected value="All">Select OS</option>
						<option value="Android">Android</option>
						<option value="iOS">iOS</option>
					</select>
					<button onClick={addItemHandler}>Add</button>
				</div>
				<ul>
					{props.wishes.map(el => {
						return (
							<li key={el.id}>
								<input type="checkbox" checked={el.checked}/>
								<span> {el.title} </span>
								<span> / OS: </span>
								<span> {el.OS} </span>
								<button onClick={()=>removeTaskHandler(el.id)}>X</button>
							</li>
						)
					})}
				</ul>
				<div>
					FILTER BY:
					<div>
						<select value={props.osFilter} onChange={(e) => ChangeOsHandler(e.currentTarget.value as OsType)}>
							<option value="All">All</option>
							<option value="Android">Android</option>
							<option value="iOS">iOS</option>
						</select>
					</div>
				</div>
			</div>
		);
}
