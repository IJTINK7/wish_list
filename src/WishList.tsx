import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {OsType, WishesDataPropsType} from "./App";

export type OsTypeForSelect = "Android" | "iOS" | "Select OS"

export type WishListPropsType = {
	wishes: WishesDataPropsType[]
	osFilter: OsType
	addNewWish: (os: OsTypeForSelect) => void
	newWishTitle: string
	setNewWishTitle: (text: string) => void
	removeWish: (id:string) => void
}

export const WishList = (props: WishListPropsType) => {
	let [oS, setOS] = useState<OsTypeForSelect>("Select OS")
	const onNewItemChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.setNewWishTitle(e.currentTarget.value)
	}

	const addWishHandler = () => {
		if (oS !== "Select OS") {
			if (props.newWishTitle.trim() !== "") {
				props.addNewWish(oS)
				props.setNewWishTitle("")
				setOS("Select OS")
			} else return
		}
	}
	const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
		if(e.key === "Enter") {
			addWishHandler()
		}
	}

	const onChangeOSHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		setOS(e.currentTarget.value as OsTypeForSelect)
	}
	const removeWishHandler = (id: string) => {
		props.removeWish(id)
	}
	return (
		<div>
			<h1>Phones</h1>
			<div>
				<input placeholder={"Enter an item"}
					   value={props.newWishTitle}
					   onChange={onNewItemChangeHandler}
					   onKeyDown={onKeyDownHandler}
				/>
				<select value={oS} onChange={onChangeOSHandler}>
					<option value={"Select OS"}>Select OS</option>
					<option value={"Android"}>Android</option>
					<option value={"iOS"}>iOS</option>
				</select>
				<button onClick={addWishHandler}>Add</button>
			</div>
			<ul>
				{props.wishes.map(el => {
					return (
						<li key={el.id}>
							<input type="checkbox" checked={el.checked}/>
							<span> {el.title} </span>
							<span> / OS: </span>
							<span> {el.OS} </span>
							<button onClick={()=>removeWishHandler(el.id)}>X</button>
						</li>
					)
				})}
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