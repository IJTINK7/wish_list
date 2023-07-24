import React, {memo, useState} from 'react';
import {OsType, WishType} from "./AppWithRedux";
import {SuperForm} from "./superComponents/SuperForm";
import SuperCheckbox from "./superComponents/SuperCheckbox";
import {SuperSelect} from "./superComponents/SuperSelect";
import {EditableSpan} from "./superComponents/Editable";
import {SuperButton} from "./superComponents/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";
import {WishesDataType, WishlistType} from "./AppWithRedux";
import {addNewWishAC, changeWishStatusAC, changeWishTitleAC, removeWishAC} from "./reducers/wishesReducer";
import {
	changeWishListFilterAC,
	changeWishListTitleAC,
	removeWishListAC
} from "./reducers/wishListReducer";

export type FilterTypeForSelect = "usual" | "important" | "Select"
export type StatusTypeForSelect = "All" | "Active" | "Completed"
export type WishListPropsType = {
	wishes: WishType[]
	valueOfImportantFilter: OsType
	setOsFilter: (text: OsType) => void
	activityFilter: OsType
	wishlistID: string
	category: string
}
export const WishList = memo((props: WishListPropsType) => {
	const dispatch = useDispatch()
	const wishLists = useSelector<AppRootReducerType, WishlistType[]>((store) => {
		return store.wishLists
	})
	const wishes = useSelector<AppRootReducerType, WishesDataType>((store) => {
		return store.wishes
	})
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
		<div className={"wishlist__cardsItem"}>
			<div className="wishlist__title-container">
				<EditableSpan callBack={changeWishListTitleHandler} value={props.category} />
				<SuperButton callBack={removeWishListHandler} name={"X"}/>
			</div>
			<div className="input-container">
				<div>
					<SuperForm callBack={addWishHandler} setError={setError}/>
					{error === "Type wish name" ? <div>{error}</div> : ""}
				</div>
				<div>
					<SuperSelect value={oS} options={[{value: 'Select', label: "Select"}, {
						value: 'usual',
						label: "usual"
					}, {value: 'important', label: "important"}]} callBack={onChangeOSHandler}/>
					{error === "Select wish status" ? <div>{error}</div> : ""}
				</div>
			</div>
			<div className="main-container">
				<div className="table-container">
					<div className="table-row heading">
						<div className="row-item checkbox"></div>
						<div className="row-item title">Title</div>
						<div className="row-item">Status</div>
						<div className="row-item"></div>
					</div>
					{props.wishes.map((el: WishType, index: number) => {
						return (
							<div className="table-row" key={index}>
								<div className="row-item checkbox">
									<SuperCheckbox checked={el.checked} callBack={(value) => {
										changeStatusHandler(el.id, value)
									}}/>
								</div>
								<div className="row-item title">
									<EditableSpan callBack={(newTitle)=>changeWishTitleHandler(el.id, newTitle)} value={el.title}/>
								</div>
								<div className="row-item"> {el.status} </div>
								<div className="row-item">
									<button onClick={() => removeWishHandler(el.id)}>X</button>
								</div>
							</div>
						)
					})}
				</div>
			</div>
			<div className={"wishlist__cardFilters"}>
				<div className={"wishlist__cardFilter1 wishlist__cardFilter"}>
					<div className={"wishlist__cardTitle"}>FILTER BY IMPORTANT:</div>
					<SuperSelect value={props.valueOfImportantFilter} options={[{value: 'All', label: "All"}, {
						value: 'usual',
						label: "usual"
					}, {value: 'important', label: "important"}]} callBack={onChangeFilterImportantHandler}/>
				</div>
				<div className={"wishlist__cardFilter2 wishlist__cardFilter"}>
					<div className={"wishlist__cardTitle"}>FILTER BY ACTIVITY:</div>
					<SuperSelect value={props.activityFilter} options={[{value: 'All', label: "All"}, {
						value: 'Active',
						label: "Active"
					}, {value: 'Completed', label: "Completed"}]} callBack={onChangeActivityFilterHandler}/>
				</div>
			</div>
		</div>)
})