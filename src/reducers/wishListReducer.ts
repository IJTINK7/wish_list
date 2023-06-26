import {WishlistType} from "../App";
import {v1} from "uuid";

export const wishListReducer = (state: WishlistType[], action: MainType): WishlistType[] => {
	switch (action.type){
		case "ADD-WISHLIST":
			return state
		default:
			return state
	}
}

export  type MainType = AddWishListACType
export type AddWishListACType = ReturnType<typeof addWishListAC>
export  const addWishListAC = (title: string)=>{
	return{
		type: "ADD-WISHLIST",
		payload:{
			wishlistId: v1(),
			title
		}
	}as const
}