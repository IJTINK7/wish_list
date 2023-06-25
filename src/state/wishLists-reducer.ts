import {WishlistType} from "../App";

type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType |ChangeTodolistFilterActionType

type RemoveTodolistActionType={
	type: 'REMOVE-TODOLIST'
	wishlistID: string
}
type AddTodolistActionType={
	type: 'ADD-TODOLIST'
	title: string
}
type ChangeTodolistTitleActionType={
	type: 'CHANGE-TODOLIST-TITLE'
	id: string
	title: string
}
type ChangeTodolistFilterActionType={
	type: 'CHANGE-TODOLIST-FILTER'
	id: string
	filter: any //FilterValuesType
}
// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state

export const wishListsReducer = (state: WishlistType[], action: ActionsType): WishlistType[] => {
	switch (action.type) {
		case 'REMOVE-TODOLIST':
			return state.filter(el=>el.id !== action.wishlistID)
		// case 'ADD-TODOLIST':
		// 	return [...state,{id: v1(), title: action.title, filter: 'all'}]
		case 'CHANGE-TODOLIST-TITLE':
			return state.map(el=>el.id === action.id ? {...el, title: action.title}: el )
		case 'CHANGE-TODOLIST-FILTER':
			return state.map(el=>el.id === action.id ? {...el, filter: action.filter}: el )
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
export const AddTodolistAC = (newTodolistTitle: string): AddTodolistActionType => {
	return {type: 'ADD-TODOLIST', title: newTodolistTitle}
}
export const ChangeTodolistTitleAC = (todolistID: string, newTodolistTitle: string): ChangeTodolistTitleActionType => {
	return {type: 'CHANGE-TODOLIST-TITLE', id: todolistID, title: newTodolistTitle}
}
// export const ChangeTodolistFilterAC = (todolistID: string, newFilter: FilterValuesType): ChangeTodolistFilterActionType => {
// 	return {type: 'CHANGE-TODOLIST-FILTER', id: todolistID, filter: newFilter}
// }