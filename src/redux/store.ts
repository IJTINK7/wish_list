import {combineReducers, legacy_createStore} from "redux";
import {wishListReducer} from "../reducers/wishListReducer";
import {wishesReducer} from "../reducers/wishesReducer";

export const AppRootReducer = combineReducers({
    wishLists: wishListReducer,
    wishes: wishesReducer
})
export type AppRootReducerType = ReturnType<typeof AppRootReducer>
export const store = legacy_createStore(AppRootReducer)


