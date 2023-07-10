import {
	addWishListAC,
	changeWishListFilterAC,
	changeWishListTitleAC,
	removeWishListAC,
	wishListReducer
} from "./wishListReducer";
import {WishlistType} from "../AppWithRedux";

test('should add new wishlist correctly', () => {
		const startState: WishlistType[] = [
			{id: 'wishlistID1', category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
			{id: 'wishlistID2', category: "books", filterByActivity: 'All', filterByStatus: 'All'}
		]
		const action = addWishListAC('newTitle')
		const endState = wishListReducer(startState, action)
		expect(endState.length).toBe(3)
		expect(endState.every(t => t.id !== '2')).toBeTruthy() // my
		expect(endState).toHaveLength(3) // Rafkhat
		expect(startState).toHaveLength(2)
		expect(endState[2].id).toBeDefined();
		expect(endState[2].category).toBe('newTitle'); //
		expect(endState[2].filterByActivity).toBe('All');
		expect(endState[2].filterByStatus).toBe('All');
		expect(endState[2].category).toBe('newTitle') // Romanych + Diana
		expect(endState[2]).toBeDefined() // Michael
	})

test('should remove wishlist correctly', () => {
	const startState: WishlistType[] = [
		{id: 'wishlistID1', category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
		{id: 'wishlistID2', category: "books", filterByActivity: 'All', filterByStatus: 'All'}
	]
	const action = removeWishListAC('wishlistID1')
	const endState = wishListReducer(startState, action)
	expect(endState.every(t => t.id !== '2')).toBeTruthy(); // my
	expect(endState.length).toBe(1) // Roma + Zhenya
	expect(endState.length).toBe(1)  // Michael
	expect(endState[0].category).toBe('books')
	expect(endState[0].id).toBe('wishlistID2') // Diana
	expect(startState).toHaveLength(2) // Rafkhat
	expect(endState).toHaveLength(1)
	expect(endState[0].id).toBeDefined();
	expect(endState[0].category).toBe('books'); //
	expect(endState[0].filterByActivity).toBe('All');
	expect(endState[0].filterByStatus).toBe('All');
})

test('please change wishlists title', () => {
	const startState: WishlistType[] = [
		{id: 'wishlistID1', category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
		{id: 'wishlistID2', category: "books", filterByActivity: 'All', filterByStatus: 'All'}
	]
	const action = changeWishListTitleAC('wishlistID1', 'NewTitle')
	const endState = wishListReducer(startState, action)
	expect(endState[0].category).toBe('NewTitle');
	expect(endState[1].category).toBe('books');
	expect(endState.length).toBe(2);
	expect(startState).toHaveLength(2)
	expect(endState).toHaveLength(2)
	expect(endState[0].id).toBeDefined();
	expect(endState[0].category).toBe('NewTitle');
	expect(endState[0].filterByActivity).toBe('All');
	expect(endState[0].filterByStatus).toBe('All');
	expect(endState[1].id).toBe('wishlistID2');
	expect(endState[1].category).toBe('books');
	expect(endState[1].filterByActivity).toBe('All');
	expect(endState[1].filterByStatus).toBe('All');
})

test('please change wishlists filter', () => {
	const startState: WishlistType[] = [
		{id: 'wishlistID1', category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
		{id: 'wishlistID2', category: "books", filterByActivity: 'All', filterByStatus: 'All'}
	]
	const action = changeWishListFilterAC('wishlistID1', "filterByImportant", 'important')
	const endState = wishListReducer(startState, action)
	expect(endState[0].filterByActivity).toBe('All');
	expect(endState[0].filterByStatus).toBe('important');
	expect(endState[1].filterByActivity).toBe('All');
	expect(endState[1].filterByStatus).toBe('All');
})