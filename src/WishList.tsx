import React, {memo, useCallback, useState} from 'react';
import {OsType, WishType} from "./AppWithRedux";
import {SuperForm} from "./superComponents/SuperForm";
import SuperCheckbox from "./superComponents/SuperCheckbox";
import {SuperSelect} from "./superComponents/SuperSelect";
import {EditableSpan} from "./superComponents/Editable";
import {SuperButton} from "./superComponents/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";
import {WishesDataType, WishlistType} from "./AppWithRedux";
import {addNewWishAC, changeWishStatusAC, removeWishAC} from "./reducers/wishesReducer";
import {changeWishListFilterAC, changeWishListTitleAC, removeWishListAC} from "./reducers/wishListReducer";

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
export const WishList = memo( (props: WishListPropsType) => {


	const dispatch = useDispatch()
	const wishLists = useSelector<AppRootReducerType, WishlistType[]>((store) => {
		return store.wishLists
	})
	const wishes = useSelector<AppRootReducerType, WishesDataType>((store) => {
		return store.wishes
	})


	const [error, setError] = useState<string | null>(null)
	const [oS, setOS] = useState<FilterTypeForSelect>("Select")
	const addWishHandler = useCallback( (newValue: string) => {
		if (oS !== "Select") {
			if (newValue.trim() !== "") {
				dispatch(addNewWishAC(props.wishlistID, oS, newValue))

				setOS("Select")

			} else setError("Select item")
		} else setError("Select")
	}, [dispatch])
	const removeWishHandler = (id: string) => {
		dispatch(removeWishAC(props.wishlistID, id))
	}
	const onChangeOSHandler = (value: string) => {
		setOS(value as FilterTypeForSelect)
		setError(null)
	}
	const onChangeFilterImportantHandler = (value: string) => {
		const filterId = "filterByImportant"
		dispatch(changeWishListFilterAC(props.wishlistID, value as OsType, filterId as OsType))
	}
	const onChangeActivityFilterHandler = (value: string) => {
		const filterId = "filterByActivity"
		dispatch(changeWishListFilterAC(props.wishlistID, value as OsType, filterId as OsType))

	}
	const changeStatusHandler = (wishId: string, value: boolean) => {
		dispatch(changeWishStatusAC(props.wishlistID, wishId, value))
	}
	const changeWishListTitleHandler = (newTitle: string) => {
		dispatch(changeWishListTitleAC(props.wishlistID, newTitle))
	}
	const removeWishListHandler = () => {
		dispatch(removeWishListAC(props.wishlistID))
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
})