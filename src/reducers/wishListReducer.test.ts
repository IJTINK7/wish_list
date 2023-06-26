import {addWishListAC, wishListReducer} from "./wishListReducer";
import {WishlistType} from "../App";

test('should add new wishlist correctly', () => {
        const startState: WishlistType[] = [
            {id: 'wishlistID1', category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
            {id: 'wishlistID2', category: "books", filterByActivity: 'All', filterByStatus: 'All'}
        ]


        const action = addWishListAC('newTitle')
        const endState = wishListReducer(startState, action)


        expect(endState.length).toBe(3)
        expect(endState.every(t => t.id != '2')).toBeTruthy() // my
        expect(endState).toHaveLength(3) // Rafkhat
        expect(startState).toHaveLength(2)
        expect(endState[2].id).toBeDefined();
        expect(endState[2].category).toBe('newTitle'); //
        expect(endState[2].filterByActivity).toBe('All');
        expect(endState[2].filterByStatus).toBe('All');
        expect(endState[2].category).toBe('newTitle') // Romanych + Diana
        expect(endState[2]).toBeDefined() // Michael




    }
)