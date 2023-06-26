
import React, {useReducer, useState} from 'react';
import './App.css';
import {FilterTypeForSelect, StatusTypeForSelect, WishList} from "./WishList";
import {v1} from "uuid";
import {SuperInput} from "./superComponents/SuperInput";
import {SuperButton} from "./superComponents/SuperButton";
import {
    AddWishlistAC, ChangeWishlistFilterAC,
    ChangeWishlistTitleAC,
    RemoveWishlistAC,
    wishListsReducer
} from "./reducers/wishListsReducer";
import {addWishAC, changeWishStatusAC, removeWishAC, wishesReducer} from "./reducers/wishesReducer";


export type OsType = "All" | 'important' | "usual" | FilterTypeForSelect | StatusTypeForSelect
export type WishlistType = {
    id: string, category: string, filterByActivity: OsType, filterByStatus: OsType
}
export type WishType = { id: string, title: string, status: string, checked: boolean }
export type WishesDataType = {
    [key: string]: WishType[]
}
function App() {
    const [wishlistTitle, setWishlistTitle] = useState<string>("")
    const wishlistID1 = v1();
    const wishlistID2 = v1()

    const [wishLists, dispatchWishList] = useReducer(wishListsReducer, [
            {id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
            {id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
        ]
    )
    const removeWishList = (wishlistID: string) => {
        dispatchWishList(RemoveWishlistAC(wishlistID))
    }
    const addNewWishList = () => {

        const action = AddWishlistAC(wishlistTitle)
        dispatchWishList(action)
        dispatchWishes(action)
    }
    const changeWishListTitle = (wishlistID: string, newWishListTitle: string) => {
        dispatchWishList(ChangeWishlistTitleAC(wishlistID, newWishListTitle))
    }
    const changeFilterValue = (wishlistID: string, filterId: string, filterValue: OsType ) => {
        dispatchWishList(ChangeWishlistFilterAC(wishlistID, filterId, filterValue))
    }

    const [wishes, dispatchWishes] = useReducer(wishesReducer,{
        [wishlistID1]: [
            {id: v1(), title: 'Samsung Galaxy S23', status: "usual", checked: true},
            {id: v1(), title: 'IPhone 13 ProMax', status: 'important', checked: true},
            {id: v1(), title: 'Xiaomi 13', status: "usual", checked: true},
            {id: v1(), title: 'Huawei', status: "usual", checked: false},
            {id: v1(), title: 'Iphone 14', status: 'important', checked: false}

        ],
        [wishlistID2]: [

            {id: v1(), title: 'Hamlet ', status: "usual", checked: true},
            {id: v1(), title: 'The Odyssey ', status: "important", checked: true},
            {id: v1(), title: 'Sherlock Holmes', status: "usual", checked: true},
            {id: v1(), title: 'Don Quixote', status: "important", checked: false},
            {id: v1(), title: 'HeadFirst JS', status: "usual", checked: false}]
    })
    // const [activityFilter, setActivityFilter] = useState<StatusTypeForSelect>("All")
    const [osFilter, setOsFilter] = useState<OsType>("All")

    const addNewWish = (wishlistId: string, oS: FilterTypeForSelect, newValue: string) => {
        // let newItem = {id: v1(), title: newValue, status: oS, checked: false}
        // setWishes({...wishes, [wishlistId]: [newItem, ...wishes[wishlistId]]})

        dispatchWishes(addWishAC(wishlistId, oS, newValue))

    }
    const removeWish = (wishlistId: string, id: string) => {
        dispatchWishes(removeWishAC(wishlistId, id))


    }
    const changeWishStatus = (wishlistId: string, wishId: string, statusValue: boolean) => {
        // setWishes({
        //   ...wishes,
        //   [wishlistID]: wishes[wishlistID].map(el => el.id === wishId ? {...el, checked: statusValue} : el)
        // })
        // setWishes(wishes.map((el)=> el.id === wishId ? {...el, checked: statusValue} :el))

        dispatchWishes(changeWishStatusAC(wishlistId, wishId, statusValue))

    }
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
                changeWishListTitle={changeWishListTitle}
                wishes={wishesWhatWeWantToSeeGeneral}
                addNewWish={addNewWish}
                activityFilter={wl.filterByActivity}
                valueOfImportantFilter={wl.filterByStatus}
                setOsFilter={setOsFilter}
                removeWish={removeWish}
                changeWishStatus={changeWishStatus}
                category={wl.category}
                changeFilterValue={changeFilterValue}
                removeWishList={removeWishList}

            />
        })}

    </div>


);
}

export default App;