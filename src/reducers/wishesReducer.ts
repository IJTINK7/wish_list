import {WishesDataType} from "../App";
import {AddWishListACType} from "./wishListReducer";


export const wishesReducer = (state: WishesDataType, action: WishesMainType) => {
    switch (action.type) {
        case 'ADD-WISHLIST': {
          return   {...state, [action.payload.wishListId]: []}
        }
        default: return state
    }
}



export type WishesMainType = AddWishListACType