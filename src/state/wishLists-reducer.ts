import {OsType, WishlistType} from "../App";

type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType

type RemoveTodolistActionType={
	type: 'REMOVE-WISHLIST'
	wishlistID: string
}
type AddTodolistActionType={
	type: 'ADD-WISHLIST'
	newWishListId:string
	newWishlist: WishlistType
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
// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state

export const wishListsReducer = (state: WishlistType[], action: ActionsType): WishlistType[] => {
	switch (action.type) {
		case 'REMOVE-WISHLIST':
			return state.filter(el=>el.id !== action.wishlistID)
		case 'ADD-WISHLIST':
			return [...state, action.newWishlist]
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
export const AddWishlistAC = (newWishListId:string, newWishlist: WishlistType) => {
	return {
		type: 'ADD-WISHLIST',
		newWishListId,
		newWishlist
	} as const
}
export const ChangeWishlistTitleAC = (wishlistID: string, newWishListTitle: string): ChangeTodolistTitleActionType => {
	return {type: 'CHANGE-WISHLIST-TITLE', wishlistID, newWishListTitle} as const
}
export const ChangeWishlistFilterAC = (wishlistID: string, filterId: string, newFilter: OsType): ChangeTodolistFilterActionType => {
	return {type: 'CHANGE-WISHLIST-FILTER',wishlistID, filterId, newFilter} as const
}