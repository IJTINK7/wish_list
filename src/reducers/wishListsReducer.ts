import {OsType, WishlistType} from "../App";
import {v1} from "uuid";

type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType

export type RemoveTodolistActionType={
    type: 'REMOVE-WISHLIST'
    wishlistID: string
}
 export type AddTodolistActionType={
    type: 'ADD-WISHLIST'
    title: string
    newWishListId: string
}
type ChangeTodolistTitleActionType={
    type: 'CHANGE-WISHLIST-TITLE'
    wishlistID: string
    newWishListTitle: string
}
type ChangeTodolistFilterActionType={
    type: 'CHANGE-WISHLIST-FILTER'
    wishlistID: string
    filterId: string
    newFilter: OsType
}


export const wishListsReducer = (state: WishlistType[], action: ActionsType): WishlistType[] => {
    switch (action.type) {
        case 'REMOVE-WISHLIST':
            return state.filter(el=>el.id !== action.wishlistID)
        case 'ADD-WISHLIST':
            const newWishlist ={
                id: action.newWishListId,
                category: action.title,
                filterByActivity: "All" as OsType,
                filterByStatus: "All" as OsType
            }
            return [...state, newWishlist]
        case 'CHANGE-WISHLIST-TITLE':
            return state.map(el=>el.id === action.wishlistID ? {...el, category: action.newWishListTitle}: el )
        case 'CHANGE-WISHLIST-FILTER': {
            if (action.filterId === "filterByImportant") {
                return state.map(el => el.id === action.wishlistID ? {...el, filterByStatus: action.newFilter} : el)
            } else {
                return  state.map(el => el.id === action.wishlistID ? {...el, filterByActivity: action.newFilter} : el)
            }
        }
        default:
            throw new Error("I don't understand this type")
    }
}
export const RemoveWishlistAC = (wishlistID: string): RemoveTodolistActionType  => {
    return {
        type: 'REMOVE-WISHLIST',
        wishlistID
    } as const
}
export const AddWishlistAC = (title:string) => {
    return {
        type: 'ADD-WISHLIST',
        title,
        newWishListId: v1()

    } as const
}
export const ChangeWishlistTitleAC = (wishlistID: string, newWishListTitle: string): ChangeTodolistTitleActionType => {
    return {type: 'CHANGE-WISHLIST-TITLE', wishlistID, newWishListTitle} as const
}
export const ChangeWishlistFilterAC = (wishlistID: string, filterId: string, newFilter: OsType): ChangeTodolistFilterActionType => {
    return {type: 'CHANGE-WISHLIST-FILTER',wishlistID, filterId, newFilter} as const


}



// export type RemoveWishesACType = ReturnType<typeof removeWishesAC>
// export const removeWishesAC = (wishListId: string) => {
//     return {
//         type: "REMOVE-WISHES",
//         payload: {wishListId}
//     } as const
// }


