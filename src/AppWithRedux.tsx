import React, {useCallback, useReducer, useState} from 'react';
import './App.css';
import {FilterTypeForSelect, StatusTypeForSelect, WishList} from "./WishList";
import {v1} from "uuid";
import {SuperInput} from "./superComponents/SuperInput";
import {SuperButton} from "./superComponents/SuperButton";
import {
    addWishListAC,
    changeWishListFilterAC,
    changeWishListTitleAC,
    removeWishListAC,
    wishListReducer
} from "./reducers/wishListReducer";
import {addNewWishAC, changeWishStatusAC, removeWishAC, wishesReducer} from "./reducers/wishesReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";

export type OsType = "All" | 'important' | "usual" | FilterTypeForSelect | StatusTypeForSelect
export type WishlistType = {
    id: string, category: string, filterByActivity: OsType, filterByStatus: OsType
}
export type WishType = { id: string, title: string, status: string, checked: boolean }
export type WishesDataType = {
    [key: string]: WishType[]
}


export function AppWithRedux() {
    const [activityFilter, setActivityFilter] = useState<StatusTypeForSelect>("All")
    const [osFilter, setOsFilter] = useState<OsType>("All")
    const [wishlistTitle, setWishlistTitle] = useState<string>("")


    const dispatch = useDispatch()
    const wishLists = useSelector<AppRootReducerType, WishlistType[]>((store) => {
        return store.wishLists
    })
    const wishes = useSelector<AppRootReducerType, WishesDataType>((store) => {
        return store.wishes
    })

    const addNewWishList = useCallback( () => {
        const action = addWishListAC(wishlistTitle)
        dispatch(action)

    }, [dispatch])


    return (
        <div className="App">
            <div>
                <SuperInput callBack={setWishlistTitle} value={wishlistTitle} onKeyDownCallBack={() => {
                }}/>

                <SuperButton callBack={addNewWishList} name={"Add"}/>
            </div>
            {wishLists.map((wl) => {
                const wishesWhatWeWantToSee = wl.filterByStatus === 'All' ? wishes[wl.id] : wishes[wl.id].filter(el => el.status === wl.filterByStatus)
                const wishesWhatWeWantToSeeGeneral = wl.filterByActivity === 'All' ? wishesWhatWeWantToSee :
                    wishesWhatWeWantToSee.filter(el => wl.filterByActivity === 'Active' ? !el.checked : el.checked)
                return <WishList
                    key={wl.id}
                    wishlistID={wl.id}
                    wishes={wishesWhatWeWantToSeeGeneral}
                    activityFilter={wl.filterByActivity}
                    valueOfImportantFilter={wl.filterByStatus}
                    setOsFilter={setOsFilter}
                    category={wl.category}
                />
            })}
        </div>
    );
}
