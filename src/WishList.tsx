import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {OsType, WishesDataPropsType} from "./App";

export type OsTypeForSelect = "Android" | "iOS" | "Select OS"
export type StatusTypeForSelect = "All" | "Active" | "Completed"

export type WishListPropsType = {
	wishes: WishesDataPropsType[]
	osFilter: OsType
	setOsFilter: (text: OsType) => void
	statusFilter: StatusTypeForSelect
	setStatusFilter: (text: StatusTypeForSelect) => void
	addNewWish: (oS: OsTypeForSelect) => void
	newWishTitle: string
	setNewWishTitle: (text: string) => void
	removeWish: (id: string) => void
	changeWishStatus: (wishId: string, isDone: boolean) => void
}

export const WishList = (props: WishListPropsType) => {
	let [oS, setOS] = useState<OsTypeForSelect>("Select OS")
	const [error, setError] = useState<null | string>(null)
	const [error2, setError2] = useState<null | string>(null)
	const onNewItemChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setError(null)
		props.setNewWishTitle(e.currentTarget.value)
	}

	const addWishHandler = () => {
		if (oS !== "Select OS") {
			if (props.newWishTitle.trim() !== "") {
				props.addNewWish(oS)
				props.setNewWishTitle("")
				setOS("Select OS")
				setError2(null)
			} else setError("Item was not selected")
			return
		}else setError2("OS is not selected")
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
		if(e.currentTarget.value !== "Select OS"){
			setError2(null)
		}
	}
	const onChangeFilterOSHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		props.setOsFilter(e.currentTarget.value as OsType)
	}
	const onChangeFilterStatusHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		props.setStatusFilter(e.currentTarget.value as StatusTypeForSelect)
	}

	return (
		<div>
			<h1>Phones</h1>
			<div style={{ display: "flex", justifyContent: "space-between"}}>
				<div>
					<input placeholder={"Enter an item"}
						   className={error ? "error" : ""}
						   value={props.newWishTitle}
						   onChange={onNewItemChangeHandler}
						   onKeyDown={onKeyDownHandler}
					/>
					{error && <div className={"error-message"}>{error}</div>}
				</div>
				<div>
					<select value={oS} onChange={onChangeOSHandler}>
						<option value={"Select OS"}>Select OS</option>
						<option value={"Android"}>Android</option>
						<option value={"iOS"}>iOS</option>
					</select>
					{error2 && <div style={{maxWidth: "80px"}} className={"error-message"}>{error2}</div>}
				</div>
				<div>
					<button onClick={addWishHandler}>Add</button>
				</div>
			</div>
			<ul>
				{props.wishes.map(el => {
					const changeWishStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
						props.changeWishStatus(el.id, e.currentTarget.checked)
					}
					return (
						<li key={el.id} className={el.checked ? "selected": ""}>
							<input type="checkbox" checked={el.checked} onChange={changeWishStatusHandler}/>
							<span> {el.title} </span>
							<span> / OS: </span>
							<span> {el.OS} </span>
							<button onClick={() => removeWishHandler(el.id)}>X</button>
						</li>
					)
				})}
			</ul>
			<div style={{ display: "flex", justifyContent: "space-between"}}>
				<div style={{ marginRight: "20px"}}>
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
						<select value={props.statusFilter} onChange={onChangeFilterStatusHandler}>
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