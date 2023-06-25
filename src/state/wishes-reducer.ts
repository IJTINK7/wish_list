import {WishesDataType} from "../App";

export const wishesReducer = (state: WishesDataType, action: MainType): WishesDataType => {
    switch (action.type) {
        case "ADD-NEW-TASK": return {...state, [action.payload.newWishListId]: []}
        default: return state
    }
}

type MainType =  AddNewTaskACType

type AddNewTaskACType = ReturnType<typeof addNewTaskAC>

export const addNewTaskAC = (newWishListId: string) => {
    return {
        type: 'ADD-NEW-TASK',
        payload: {newWishListId}
    } as const
}


