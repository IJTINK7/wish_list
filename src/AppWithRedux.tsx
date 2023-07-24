import React, {DragEvent, useCallback, useReducer, useState} from 'react';
import './App.css';
import {FilterTypeForSelect, StatusTypeForSelect, WishList} from "./WishList";
import {v1} from "uuid";
import {SuperInput} from "./superComponents/SuperInput";
import {SuperButton} from "./superComponents/SuperButton";
import {
    addWishListAC,
    changeWishListFilterAC, ChangeWishListOrderAC,
    changeWishListTitleAC,
    removeWishListAC,
    wishListReducer
} from "./reducers/wishListReducer";
import {addNewWishAC, changeWishStatusAC, removeWishAC, wishesReducer} from "./reducers/wishesReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducerType} from "./redux/store";

export type OsType = "All" | 'important' | "usual" | FilterTypeForSelect | StatusTypeForSelect
export type WishlistType = {
    id: string, category: string, filterByActivity: OsType, filterByStatus: OsType, order: number
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

    const addNewWishList = () => {
        const action = addWishListAC(wishlistTitle)
        dispatch(action)
        setWishlistTitle("")

    }

    const keyDownForAddWishlist = (key: string) => {
        key === 'Enter' && addNewWishList()
    }


    const [currentWishList, setCurrentWishList] = useState<WishlistType | null>(null)


    const onDragStartHandler = (e:DragEvent<HTMLDivElement>, wl: WishlistType) => {


        setCurrentWishList(wishLists.find(el => el.id === wl.id) as WishlistType)

    }
    const onDragEnd = (e:DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.background = '#0099ff'

    }
    const onDragLeave = (e:DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.background = '#0099ff'

    }

    const onDropHandler = (e:DragEvent<HTMLDivElement>, wl: WishlistType) => {
        e.preventDefault()
        const leaveWishlist = wishLists.find(el => el.id === wl.id )as WishlistType

        dispatch(ChangeWishListOrderAC(currentWishList as WishlistType, leaveWishlist))
        console.log(e.currentTarget.id)


    }



    return (

        <div className="App wishlist">
            <div>
                <SuperInput callBack={setWishlistTitle} value={wishlistTitle} onKeyDownCallBack={(e) => {
                    keyDownForAddWishlist(e)
                }}/>

                <SuperButton callBack={addNewWishList} name={"Add"}/>
            </div>
            <div className="wishlist__cards">
                {wishLists.sort((a, b)=>a.order - b.order).map((wl) => {
                    const wishesWhatWeWantToSee = wl.filterByStatus === 'All' ? wishes[wl.id] : wishes[wl.id].filter(el => el.status === wl.filterByStatus)
                    const wishesWhatWeWantToSeeGeneral = wl.filterByActivity === 'All' ? wishesWhatWeWantToSee :
                        wishesWhatWeWantToSee.filter(el => wl.filterByActivity === 'Active' ? !el.checked : el.checked)
                    return <div
                        onDragStart={(e)=> {
                            onDragStartHandler(e, wl)

                        }}
                        onDragEnd={(e)=> {
                            onDragEnd(e)
                        }
                        }
                        onDragLeave={(e) => {
                            onDragLeave(e)
                        }
                        }
                        onDragOver={ (e) => {
                            e.preventDefault()
                            e.currentTarget.style.background = 'lightgrey'
                        }
                        }
                        onDrop={(e)=> {
                            onDropHandler(e, wl)

                        }}

                        draggable={true}
                    ><WishList


                        key={wl.id}
                        wishlistID={wl.id}
                        wishes={wishesWhatWeWantToSeeGeneral}
                        activityFilter={wl.filterByActivity}
                        valueOfImportantFilter={wl.filterByStatus}
                        setOsFilter={setOsFilter}
                        category={wl.category}
                    /></div>
                })}
            </div>
        </div>
    );
}
