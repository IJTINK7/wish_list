import React, {useState} from 'react';
import {OsType, WishType} from "./App";
import {SuperForm} from "./superComponents/SuperForm";
import SuperCheckbox from "./superComponents/SuperCheckbox";
import {SuperSelect} from "./superComponents/SuperSelect";
import {EditableSpan} from "./superComponents/Editable";
import {SuperButton} from "./superComponents/SuperButton";

export type FilterTypeForSelect = "usual" | "important" | "Select"
export type StatusTypeForSelect = "All" | "Active" | "Completed"

export type WishListPropsType = {
	wishes: WishType[]
	valueOfImportantFilter: OsType
	setOsFilter: (text: OsType) => void
	addNewWish: (wishlistID: string, oS: FilterTypeForSelect, newValue: string) => void
	removeWish: (wishlistID: string, id: string) => void
	activityFilter: OsType
	changeWishStatus: (wishlistId: string, wishId: string, statusValue: boolean) => void
	wishlistID: string
	category: string
	changeFilterValue: (wishlistID: string, filterId: string, filterValue: OsType,) => void
	changeWishListTitle: (wishlistID: string, newTitle: string) => void
	removeWishList: (wishlistID: string) => void
}

export const WishList = (props: WishListPropsType) => {
	const [error, setError] = useState<string | null>(null)
	const [oS, setOS] = useState<FilterTypeForSelect>("Select")

	const addWishHandler = (newValue: string) => {
		if (oS !== "Select") {
			if (newValue.trim() !== "") {
				props.addNewWish(props.wishlistID, oS, newValue)
				setOS("Select")
			} else setError("Select item")
		} else setError("Select")
	}
	const removeWishHandler = (id: string) => {
		props.removeWish(props.wishlistID, id)
	}
	const onChangeOSHandler = (value: string) => {
		setOS(value as FilterTypeForSelect)
		setError(null)
	}
	const onChangeFilterImportantHandler = (value: string) => {
		const filterId = "filterByImportant"
		props.changeFilterValue(props.wishlistID, filterId, value as OsType)
	}
	const onChangeActivityFilterHandler = (value: string) => {
		const filterId = "filterByActivity"
		props.changeFilterValue(props.wishlistID, filterId, value as OsType)
	}
	const changeStatusHandler = (wishId: string, value: boolean) => {
		props.changeWishStatus(props.wishlistID, wishId, value)
	}
	const changeWishListTitleHandler = (newTitle: string) => {
		props.changeWishListTitle(props.wishlistID, newTitle)
	}
	const removeWishListHandler = () => {
		props.removeWishList(props.wishlistID)
	}
	return (
		<div>
			<EditableSpan callBack={changeWishListTitleHandler} value={props.category}/>
			<SuperButton callBack={removeWishListHandler} name={"X"}/>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div>
					<SuperForm callBack={addWishHandler} setError={setError}/>
					{error === "Select item" ? <div>{error}</div> : ""}
				</div>
				<div>
					<SuperSelect value={oS} options={[{value: 'Select', label: "Select"}, {
						value: 'usual',
						label: "usual"
					}, {value: 'important', label: "important"}]} callBack={onChangeOSHandler}/>
					{error === "Select" ? <div>{error}</div> : ""}
				</div>
			</div>
			<ul>
				{props.wishes.map((el: WishType, index: number) => {
					return (
						<li key={index}>
							<SuperCheckbox checked={el.checked} callBack={(value) => {
								changeStatusHandler(el.id, value)
							}}/>
							<span> {el.title} </span>
							<span> / status: </span>
							<span> {el.status} </span>
							<button onClick={() => removeWishHandler(el.id)}>X</button>
						</li>
					)
				})}
			</ul>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div style={{marginRight: "20px"}}>
					FILTER BY IMPORTANT:
					<SuperSelect value={props.valueOfImportantFilter} options={[{value: 'All', label: "All"}, {
						value: 'usual',
						label: "usual"
					}, {value: 'important', label: "important"}]} callBack={onChangeFilterImportantHandler}/>
				</div>
				<div>
					FILTER BY ACTIVITY:
					<div>
						<SuperSelect value={props.activityFilter} options={[{value: 'All', label: "All"}, {
							value: 'Active',
							label: "Active"
						}, {value: 'Completed', label: "Completed"}]} callBack={onChangeActivityFilterHandler}/>
					</div>
				</div>
			</div>
		</div>
	);
}