import React, {useState} from 'react';
import './App.css';
import {FilterTypeForSelect, StatusTypeForSelect, WishList} from "./WishList";
import {v1} from "uuid";
import {SuperInput} from "./superComponents/SuperInput";
import {SuperButton} from "./superComponents/SuperButton";

export type OsType = "All" | 'important' | "usual" | FilterTypeForSelect

export type WishlistType = {
    id: string, category: string, filterByActivity: string, filterByStatus: string
}

export type WishType = { id: string, title: string, status: string, checked: boolean }

export type WishesDataType = {
    [key: string]: WishType[]
}


function App() {


    const wishlistID1 = v1();
    const wishlistID2 = v1()

    const [wishLists, setWishlists] = useState<WishlistType[]>([
            {id: wishlistID1, category: "phones", filterByActivity: 'All', filterByStatus: 'All'},
            {id: wishlistID2, category: "books", filterByActivity: 'All', filterByStatus: 'All'}
        ]
    )
    const [wishes, setWishes] = useState<WishesDataType>(
        {
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


    const [activityFilter, setActivityFilter] = useState<StatusTypeForSelect>("All")
    const [osFilter, setOsFilter] = useState<OsType>("All")

    const addNewWish = (wishlistId: string, oS: FilterTypeForSelect, newValue: string) => {

        let newItem = {id: v1(), title: newValue, status: oS, checked: false}

        setWishes({...wishes, [wishlistId]: [newItem ,...wishes[wishlistId]]})



    }


    const removeWish = (wishlistID: string, id: string) => {

        setWishes({...wishes, [wishlistID]: wishes[wishlistID].filter(el => el.id !== id)})


    }

    // //{id: v1(), title: 'Samsung Galaxy S23', OS: "usual", checked: true, isTrue: statusValue }
    // //1. Видишь объект-делай копию. 2. Видишь массив-делай копию. 3. Видишь ключ-создавай новый.
    //
    const changeWishStatus = (wishlistID: string, wishId: string, statusValue: boolean) => {
        setWishes({
            ...wishes,
            [wishlistID]: wishes[wishlistID].map(el => el.id === wishId ? {...el, checked: statusValue} : el)
        })
        // setWishes(wishes.map((el)=> el.id === wishId ? {...el, checked: statusValue} :el))
    }


    const [wishlistTitle, setWishlistTitle] = useState<string>("")


    const addNewWishList = () => {
        const newWishListId = v1()
        const newWishlist =
        {
            id: newWishListId, category: wishlistTitle, filterByActivity: "All", filterByStatus: "All"
        }


        setWishlists([newWishlist ,...wishLists])
        setWishes({...wishes, [newWishListId]: []})


    }







    return (



        <div className="App">
            <div>
                <SuperInput callBack={setWishlistTitle} value={wishlistTitle} onKeyDownCallBack={() => {
                }}/>

                <SuperButton callBack={addNewWishList} name={"Add"}/>



            </div>


            {wishLists.map((wl) => {


                return <WishList
                    key={wl.id}
                    wishlistID={wl.id}
                    wishes={wishes[wl.id]}
                    addNewWish={addNewWish}
                    osFilter={osFilter}
                    setOsFilter={setOsFilter}
                    removeWish={removeWish}
                    activityFilter={activityFilter}
                    setActivityFilter={setActivityFilter}
                    changeWishStatus={changeWishStatus}
                    category={wl.category}

                />
            })}

        </div>


    );
}

export default App;