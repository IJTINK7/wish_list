import {WishlistType} from "../App";
import {v1} from "uuid";

export const wishListReducer = (state: WishlistType[], action: MainType): WishlistType[] => {
        switch (action.type) {
            case 'ADD-WISHLIST': {

                const newWishList: WishlistType = {id: action.payload.wishListId, category: action.payload.title, filterByActivity: 'All', filterByStatus: 'All'}
                return [...state, newWishList]
            }
            default: return state
        }
}






export type MainType = AddWishListACType
export type AddWishListACType = ReturnType<typeof addWishListAC>

export const addWishListAC = (title: string) => {
        return {
            type: 'ADD-WISHLIST',
            payload: {
                wishListId: v1(), title
            }
        } as const
}