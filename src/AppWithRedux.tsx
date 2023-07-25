import React, {DragEvent, useState} from 'react';
import './App.css';
import {FilterTypeForSelect, StatusTypeForSelect, WishList} from "./WishList";

import {SuperInput} from "./superComponents/SuperInput";
import {SuperButton} from "./superComponents/SuperButton";
import {addWishListAC,changeWishListOrderAC} from "./reducers/wishListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";

export type OsType = "All" | 'Important' | "Usual" | FilterTypeForSelect | StatusTypeForSelect
export type WishlistType = {
	id: string, category: string, filterByActivity: OsType, filterByStatus: OsType, order: number
}
export type WishType = { id: string, title: string, status: string, checked: boolean }
export type WishesDataType = {
	[key: string]: WishType[]
}
export function AppWithRedux() {
	const [wishlistTitle, setWishlistTitle] = useState<string>("")
	const [currentWishList, setCurrentWishList] = useState<WishlistType | null>(null)
	const dispatch = useDispatch()
	const wishLists = useSelector<AppRootReducerType, WishlistType[]>((store) => {
		return store.wishLists
	})
	const wishes = useSelector<AppRootReducerType, WishesDataType>((store) => {
		return store.wishes
	})
	const addNewWishList = () => {
		const action = addWishListAC(wishlistTitle)
		dispatch(action)
		setWishlistTitle("")
	}
	const keyDownForAddWishlist = (key: string) => {
		key === 'Enter' && addNewWishList()
	}
	const onDragStartHandler = (e: DragEvent<HTMLDivElement>, wl: WishlistType) => {
		setCurrentWishList(wishLists.find(el => el.id === wl.id) as WishlistType)
	}
	const onDragEndHandler = (e: DragEvent<HTMLDivElement>) => {
		e.currentTarget.style.backgroundColor = "#FFFFFF";
	}
	const onDragLeaveHandler = (e: DragEvent<HTMLDivElement>) => {
		e.currentTarget.style.backgroundColor = "#FFFFFF";
	}
	const onDragOverHandler = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.currentTarget.style.backgroundColor = "#FFFFFF";
	}
	const onDropHandler = (e: DragEvent<HTMLDivElement>, wl: WishlistType) => {
		e.preventDefault()
		const leaveWishlist = wishLists.find(el => el.id === wl.id) as WishlistType
		dispatch(changeWishListOrderAC(currentWishList as WishlistType, leaveWishlist))
	}
    return (
		<div className="App wishlist">
			<div className="wishlist__adding-form">
				<div className="wishlist__adding-form__title">Adding new Wishlist</div>
				<div className="wishlist__adding-form__input-with-button">
					<SuperInput callBack={setWishlistTitle} value={wishlistTitle}
								onKeyDownCallBack={(e) => {keyDownForAddWishlist(e)}}/>
					<SuperButton callBack={addNewWishList} name={"Add"}/>
				</div>

			</div>
			<div className="wishlist__cards">
				{wishLists.sort((a, b) => a.order - b.order).map((wl) => {
					const wishesWhatWeWantToSee = wl.filterByStatus === 'All' ? wishes[wl.id]
						: wishes[wl.id].filter(el => el.status === wl.filterByStatus)
					const wishesWhatWeWantToSeeGeneral = wl.filterByActivity === 'All' ? wishesWhatWeWantToSee :
						wishesWhatWeWantToSee.filter(el => wl.filterByActivity === 'Active' ? !el.checked : el.checked)
					return <div
						key={wl.id}
						draggable={true}
						onDragStart={(e) => {onDragStartHandler(e, wl)}}
						onDragLeave={(e) => {onDragLeaveHandler(e)}}
						onDragEnd={(e) => {onDragEndHandler(e)}}
						onDragOver={(e) => {onDragOverHandler(e)}}
						onDrop={(e) => {onDropHandler(e, wl)}}
					>
                        <WishList
						key={wl.id}
						wishlistID={wl.id}
						wishes={wishesWhatWeWantToSeeGeneral}
						activityFilter={wl.filterByActivity}
						valueOfImportantFilter={wl.filterByStatus}
						category={wl.category}
					    />
                    </div>
				})}
			</div>
		</div>
	);
}
