import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {OsType, WishesDataPropsType} from "./App";

export type OsTypeForSelect = "Android" | "iOS" | "Select OS"
export type StatusTypeForSelect = "All" | "Active" | "Completed"

export type WishListPropsType = {
	wishes: WishesDataPropsType[]
	osFilter: OsType
	setOsFilter: (text: OsType) => void
	addNewWish: (oS: OsTypeForSelect) => void
	newWishTitle: string
	setNewWishTitle: (text: string) => void
	removeWish: (id: string) => void
	activityFilter : StatusTypeForSelect
	setActivityFilter: (filterValue: StatusTypeForSelect) => void
	changeWishStatus: (wishId: string, statusValue: boolean) => void
}

export const WishList = (props: WishListPropsType) => {
	const [error, setError] = useState<string | null>(null)
	const [oS, setOS] = useState<OsTypeForSelect>("Select OS")
	const onNewItemChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.setNewWishTitle(e.currentTarget.value)
		setError(null)
	}

	const addWishHandler = () => {
		if (oS !== "Select OS") {
			if (props.newWishTitle.trim() !== ""){
				props.addNewWish(oS)
				props.setNewWishTitle("")
				setOS("Select OS")

			} else setError("Select item")
		} else setError("Select OS")
	}
	const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			addWishHandler()
		}
	}
	const removeWishHandler = (id: string) => {
		props.removeWish(id)
	}
	const onChangeOSHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		setOS(e.currentTarget.value as OsTypeForSelect)
		setError(null)
	}
	const onChangeFilterOSHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		props.setOsFilter(e.currentTarget.value as OsType)
	}
	const onChangeActivityFilterHandler = (e: ChangeEvent<HTMLSelectElement>) => {

		props.setActivityFilter(e.currentTarget.value as StatusTypeForSelect)

	}

	const changeStatusHandler = (wishId: string , e: ChangeEvent<HTMLInputElement>) => {
			props.changeWishStatus( wishId,e.currentTarget.checked)
	}

	return (
		<div>
			<h1>Phones</h1>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div>
					<input placeholder={"Enter an item"}
						   value={props.newWishTitle}
						   onChange={onNewItemChangeHandler}
						   onKeyDown={onKeyDownHandler}

					/>
					{ error === "Select item" ?  <div>{error}</div> : "" }

				</div>
				<div>
					<select value={oS} onChange={onChangeOSHandler}>
						<option value={"Select OS"}>Select OS</option>
						<option value={"Android"}>Android</option>
						<option value={"iOS"}>iOS</option>
					</select>
					{ error === "Select OS" ?  <div>{error}</div> : "" }
				</div>
				<div>
					<button onClick={addWishHandler}>Add</button>
				</div>
			</div>
			<ul>
				{props.wishes.map(el => {
					return (
						<li key={el.id}>
							<input type="checkbox" checked={el.checked} onChange={(event)=>changeStatusHandler(el.id, event)}/>
							<span> {el.title} </span>
							<span> / OS: </span>
							<span> {el.OS} </span>
							<button onClick={() => removeWishHandler(el.id)}>X</button>
						</li>
					)
				})}
			</ul>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div style={{marginRight: "20px"}}>
					FILTER BY OS:
					<div>
						<select value={props.osFilter} onChange={onChangeFilterOSHandler}>
							<option value={"All"}>All</option>
							<option value={"Android"}>Android</option>
							<option value={"iOS"}>iOS</option>
						</select>
					</div>
				</div>
				<div>
					FILTER BY ACTIVITY:
					<div>
						<select value={props.activityFilter} onChange={onChangeActivityFilterHandler}>
							<option value={"All"}>All</option>
							<option value={"Active"}>Active</option>
							<option value={"Completed"}>Completed</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}