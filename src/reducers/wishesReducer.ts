import {WishesDataType} from "../App";
import {FilterTypeForSelect} from "../WishList";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./wishListsReducer";

export const wishesReducer = (state: WishesDataType, action: MainType): WishesDataType => {
        switch (action.type) {
            case 'REMOVE-WISH' : {
                return {...state, [action.payload.wishListId]: state[action.payload.wishListId].filter(el=> el.id !== action.payload.wishId)}
            }
            case 'ADD-WISH' : {

                let newItem = {id: v1(), title: action.payload.newValue, status: action.payload.oS, checked: false}


                return {...state, [action.payload.wishListId]: [...state[action.payload.wishListId], newItem]}
            }
            case 'CHANGE-WISH-STATUS' : {
                return {...state, [action.payload.wishListId]: state[action.payload.wishListId].map(el=> el.id === action.payload.wishId ? {...el, checked: action.payload.statusValue} : el)}
            }

            case "ADD-WISHLIST": return {...state, [action.newWishListId]: []
            }
            case "REMOVE-WISHLIST":
                delete state[action.wishlistID]
                return {...state}

            default: return state
        }
}





export type MainType = RemoveWishACType | AddWishACType | changeWishStatusACType | AddTodolistActionType | RemoveTodolistActionType
export type RemoveWishACType =  ReturnType<typeof removeWishAC>
export const removeWishAC = (wishListId: string, wishId: string) => {
        return {
            type: 'REMOVE-WISH',
            payload: {wishListId, wishId}
        } as const
}
export type AddWishACType =  ReturnType<typeof addWishAC>
export const addWishAC = (wishListId: string, oS: FilterTypeForSelect, newValue: string) => {
        return {
            type: 'ADD-WISH',
            payload: {wishListId, oS, newValue}
        } as const
}
export type changeWishStatusACType =  ReturnType<typeof changeWishStatusAC>
export const changeWishStatusAC = (wishListId: string, wishId: string, statusValue: boolean) => {
        return {
            type: 'CHANGE-WISH-STATUS',
            payload: {wishListId, wishId, statusValue}
        } as const
}