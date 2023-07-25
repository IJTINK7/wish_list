import React, {memo, useState} from 'react';
import {OsType, WishType} from "./AppWithRedux";
import {SuperForm} from "./superComponents/SuperForm";
import SuperCheckbox from "./superComponents/SuperCheckbox";
import {SuperSelect} from "./superComponents/SuperSelect";
import {EditableSpan} from "./superComponents/Editable";
import {SuperButton} from "./superComponents/SuperButton";
import {useDispatch} from "react-redux";
import {addNewWishAC, changeWishStatusAC, changeWishTitleAC, removeWishAC} from "./reducers/wishesReducer";
import {changeWishListFilterAC, changeWishListTitleAC, removeWishListAC} from "./reducers/wishListReducer";

export type FilterTypeForSelect = "Usual" | "Important" | "Select"
export type StatusTypeForSelect = "All" | "Active" | "Completed"
export type WishListPropsType = {
	wishes: WishType[]
	valueOfImportantFilter: OsType
	activityFilter: OsType
	wishlistID: string
	category: string
}
export const WishList = memo((props: WishListPropsType) => {
	const dispatch = useDispatch()
	const [error, setError] = useState<string | null>(null)
	const [oS, setOS] = useState<FilterTypeForSelect>("Select")
	const addWishHandler = (newValue: string) => {
		if (oS !== "Select") {
			if (newValue.trim() !== "") {
				dispatch(addNewWishAC(props.wishlistID, oS, newValue))
				setOS("Select")
			} else setError("Type wish name")
		} else setError("Select wish status")
	}
	const removeWishHandler = (id: string) => {
		dispatch(removeWishAC(props.wishlistID, id))
	}
	const onChangeOSHandler = (value: string) => {
		setOS(value as FilterTypeForSelect)
		setError(null)
	}
	const onChangeFilterImportantHandler = (value: string) => {
		const filterId = "filterByImportant"
		dispatch(changeWishListFilterAC(props.wishlistID, filterId as OsType, value as OsType))
	}
	const onChangeActivityFilterHandler = (value: string) => {
		const filterId = "filterByActivity"
		dispatch(changeWishListFilterAC(props.wishlistID, filterId as OsType, value as OsType))
	}
	const changeStatusHandler = (wishId: string, value: boolean) => {
		dispatch(changeWishStatusAC(props.wishlistID, wishId, value))
	}
	const changeWishListTitleHandler = (newTitle: string) => {
		dispatch(changeWishListTitleAC(props.wishlistID, newTitle))
	}
	const changeWishTitleHandler = (wishId: string, newTitle: string) => {
		dispatch(changeWishTitleAC(props.wishlistID, wishId, newTitle))
	}
	const removeWishListHandler = () => {
		dispatch(removeWishListAC(props.wishlistID))
	}
	return (
		<div className="wishlist__cards-item">
			<div className="wishlist__title-container">
					<div className={"wishlist__title-container__editable-span"}>
						<EditableSpan callBack={changeWishListTitleHandler} value={props.category}/>
					</div>
				<div className={"wishlist__title-container__super-button"}>
					<SuperButton callBack={removeWishListHandler} name={"X"}/>
				</div>

			</div>
			<div className="input-container">
				<div>
					<SuperForm callBack={addWishHandler} setError={setError}/>
					{error === "Type wish name" ? <div className="error-message">{error}</div> : ""}
				</div>
				<div>
					<SuperSelect value={oS} options={[{value: 'Select', label: "Select"}, {
						value: 'Usual',
						label: "Usual"
					}, {value: 'Important', label: "Important"}]} callBack={onChangeOSHandler}/>
					{error === "Select wish status" ? <div className="error-message">{error}</div> : ""}
				</div>
			</div>
			<div className="main-container">
				<div className="table-container">
					<div className="table-row heading">
						<div className="row-item checkbox"></div>
						<div className="row-item title">Title</div>
						<div className="row-item status">Status</div>
						<div className="row-item"></div>
					</div>
					{props.wishes.map((el: WishType) => {
						return (
							<div className={el.checked ? "table-row selected" : "table-row"} key={el.id}>
								<div className="row-item checkbox">
									<SuperCheckbox checked={el.checked} callBack={(value) => {
										changeStatusHandler(el.id, value)
									}}/>
								</div>
								<div className="row-item title">
									<EditableSpan callBack={(newTitle)=>changeWishTitleHandler(el.id, newTitle)} value={el.title}/>
								</div>
								<div className="row-item status"> {el.status} </div>
								<div className="row-item">
									<button onClick={() => removeWishHandler(el.id)}>X</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className={"wishlist__card-filters"}>
				<div className={"wishlist__card-filter-container"}>
					<div className={"wishlist__card-filter-title"}>FILTER BY IMPORTANCE:</div>
					<div className={"wishlist__card-filter-select"}>
						<SuperSelect value={props.valueOfImportantFilter} options={[{value: 'All', label: "All"}, {
							value: "Usual",
							label: "Usual"
						}, {value: 'Important', label: "Important"}]} callBack={onChangeFilterImportantHandler}/>
					</div>
				</div>
				<div className={"wishlist__card-filter-container"}>
					<div className={"wishlist__card-filter-title"}>FILTER BY ACTIVITY:</div>
					<div className={"wishlist__card-filter-select"}>
						<SuperSelect value={props.activityFilter} options={[{value: 'All', label: "All"}, {
							value: "Active",
							label: "Active"
						}, {value: 'Completed', label: "Completed"}]} callBack={onChangeActivityFilterHandler}/>
					</div>
				</div>
			</div>
		</div>)
})