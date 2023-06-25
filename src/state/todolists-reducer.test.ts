import {
	AddTodolistAC,
	ChangeTodolistFilterAC,
	ChangeTodolistTitleAC,
	RemoveTodolistAC,
	wishListsReducer
} from './wishLists-reducer'
import { v1 } from 'uuid'
import {WishlistType} from "../App";

test('correct todolist should be removed', () => {
	let wishlistID1 = v1()
	let wishlistID2 = v1()

	const startState: WishlistType[] = [
		{id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
		{id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
	]

	const endState = wishListsReducer(startState, RemoveTodolistAC(wishlistID1))

	expect(endState.length).toBe(1)
	expect(endState[0].id).toBe(wishlistID2)
})
test('correct todolist should be added', () => {
	let wishlistID1 = v1()
	let wishlistID2 = v1()

	let newTodolistTitle = 'New Todolist'

	const startState: WishlistType[] = [
		{id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
		{id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
	]

	// const endState = wishListsReducer(startState, AddTodolistAC(newTodolistTitle))
	//
	// expect(endState.length).toBe(3)
	// expect(endState[2].category).toBe(newTodolistTitle)
})
test('correct todolist should change its name', () => {
	let wishlistID1 = v1()
	let wishlistID2 = v1()

	let newTodolistTitle = 'New Todolist'

	const startState: WishlistType[] = [
		{id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
		{id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
	]

	const endState = wishListsReducer(startState, ChangeTodolistTitleAC(wishlistID2, newTodolistTitle))

	expect(endState[0].category).toBe('What to learn')
	expect(endState[1].category).toBe(newTodolistTitle)
})
// test('correct filter of todolist should be changed', () => {
// 	let todolistId1 = v1()
// 	let todolistId2 = v1()
//
// 	let newFilter: FilterValuesType = 'completed'
//
// 	const startState: Array<TodolistType> = [
// 		{id: todolistId1, title: 'What to learn', filter: 'all'},
// 		{id: todolistId2, title: 'What to buy', filter: 'all'}
// 	]
//
// 	const endState = todolistsReducer(startState, ChangeTodolistFilterAC(todolistId2, newFilter))
//
// 	expect(endState[0].filter).toBe('all')
// 	expect(endState[1].filter).toBe(newFilter)
// })
