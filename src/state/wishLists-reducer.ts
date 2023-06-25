import {OsType, WishlistType} from "../App";

type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType

type RemoveTodolistActionType={
	type: 'REMOVE-TODOLIST'
	wishlistID: string
}
type AddTodolistActionType={
	type: 'ADD-TODOLIST'
	newWishListId:string
	newWishlist: WishlistType
}
type ChangeTodolistTitleActionType={
	type: 'CHANGE-TODOLIST-TITLE'
	wishlistID: string
	newWishListTitle: string
}
type ChangeTodolistFilterActionType={
	type: 'CHANGE-TODOLIST-FILTER'
	wishlistID: string
	filterId: string
	newFilter: OsType
}
// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state

export const wishListsReducer = (state: WishlistType[], action: ActionsType): WishlistType[] => {
	switch (action.type) {
		case 'REMOVE-TODOLIST':
			return state.filter(el=>el.id !== action.wishlistID)
		case 'ADD-TODOLIST':
			return [...state, action.newWishlist]
		case 'CHANGE-TODOLIST-TITLE':
			return state.map(el=>el.id === action.wishlistID ? {...el, category: action.newWishListTitle}: el )
		case 'CHANGE-TODOLIST-FILTER': {
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
export const RemoveTodolistAC = (wishlistID: string): RemoveTodolistActionType  => {
	return {
		type: 'REMOVE-TODOLIST',
		wishlistID
	} as const
}
export const AddTodolistAC = (newWishListId:string, newWishlist: WishlistType) => {
	return {
		type: 'ADD-TODOLIST',
		newWishListId,
		newWishlist
	} as const
}
export const ChangeTodolistTitleAC = (wishlistID: string, newWishListTitle: string): ChangeTodolistTitleActionType => {
	return {type: 'CHANGE-TODOLIST-TITLE', wishlistID, newWishListTitle} as const
}
export const ChangeTodolistFilterAC = (wishlistID: string, filterId: string, newFilter: OsType): ChangeTodolistFilterActionType => {
	return {type: 'CHANGE-TODOLIST-FILTER',wishlistID, filterId, newFilter} as const
}