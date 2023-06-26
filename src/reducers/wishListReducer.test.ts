import {
    AddWishlistAC, ChangeWishlistFilterAC, ChangeWishlistTitleAC,
    RemoveWishlistAC,
    wishListsReducer
} from './wishListsReducer'
import { v1 } from 'uuid'
import {OsType, WishlistType} from "../App";

test('correct wishlist should be removed', () => {
    let wishlistID1 = v1()
    let wishlistID2 = v1()

    const startState: WishlistType[] = [
        {id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
        {id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
    ]

    const endState = wishListsReducer(startState, RemoveWishlistAC(wishlistID1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(wishlistID2)
    expect(endState.every(t => t.id != '2')).toBeTruthy();

})

test('correct wishlist should be added', () => {
    let wishlistID1 = v1()
    let wishlistID2 = v1()


    let newWishlistTitle = 'New Todolist'

    const newWishListId = v1()

    const newWishlist ={
        id: newWishListId,
        category: newWishlistTitle,
        filterByActivity: "All" as OsType,
        filterByStatus: "All" as OsType
    }

    const startState: WishlistType[] = [
        {id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
        {id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
    ]

    const endState = wishListsReducer(startState, AddWishlistAC('Title'))

    expect(endState.length).toBe(3)
    expect(endState[2].category).toBe('Title')

})
test('correct wishlist should change its name', () => {
    let wishlistID1 = v1()
    let wishlistID2 = v1()

    let newWishListTitle = 'New Todolist'

    const startState: WishlistType[] = [
        {id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
        {id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
    ]

    const endState = wishListsReducer(startState, ChangeWishlistTitleAC(wishlistID2, newWishListTitle))

    expect(endState[0].category).toBe('phones')
    expect(endState[1].category).toBe(newWishListTitle)
})
test('correct filter of wishlist should be changed', () => {
    let wishlistID1 = v1()
    let wishlistID2 = v1()

    let newFilter: OsType = 'important'
    let filterId = "filterByImportant"

    const startState: WishlistType[] = [
        {id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
        {id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
    ]

    const endState = wishListsReducer(startState, ChangeWishlistFilterAC(wishlistID2, filterId, newFilter))

    expect(endState[0].filterByActivity).toBe('All')
    expect(endState[0].filterByStatus).toBe('All')
    expect(endState[1].filterByActivity).toBe('All')
    expect(endState[1].filterByStatus).toBe('important')

})

// test('correct filter of wishlist should be changed', () => {
//   let wishlistID1 = v1()
//   let wishlistID2 = v1()
//
//   let newFilter: OsType = 'Completed'
//   let filterId = "filterByActivity"
//
//   const startState: WishlistType[] = [
//     {id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
//     {id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
//   ]
//
//   const endState = wishListsReducer(startState, ChangeWishlistFilterAC(wishlistID2, filterId, newFilter))
//
//   expect(endState[0].filterByActivity).toBe('All')
//   expect(endState[0].filterByStatus).toBe('All')
//   expect(endState[1].filterByActivity).toBe('Completed')
//   expect(endState[1].filterByStatus).toBe('All')
// })//
// test('correct filter of wishlist should be changed', () => {
// //   let wishlistID1 = v1()
// //   let wishlistID2 = v1()
// //
// //   let newFilter: OsType = "usual"
// //   let filterId = "filterByImportant"
// //
// //   const startState: WishlistType[] = [
// //     {id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
// //     {id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
// //   ]
// //
// //   const endState = wishListsReducer(startState, ChangeWishlistFilterAC(wishlistID1, filterId, newFilter))
// //
// //   expect(endState[0].filterByActivity).toBe('All')
// //   expect(endState[0].filterByStatus).toBe('usual')
// //   expect(endState[1].filterByActivity).toBe('All')
// //   expect(endState[1].filterByStatus).toBe('All')
// // })