import React, {useState} from 'react';
import './App.css';
import {OsTypeForSelect, StatusTypeForSelect, WishList} from "./WishList";
import {v1} from "uuid";

export type OsType = "All" | "iOS" | "Android" | OsTypeForSelect

export type WishlistType = {
id: string, category: string, filterBy: string
}

export type WishType = {id: string, title: string, OS?: string, genre?: string, checked: boolean}

export type WishesDataType = {
	[key: string]: WishType[]
}



function App() {

	const wishlistID1 = v1();
	const wishlistID2= v1()

	const [wishLists, setWishlists] = useState<WishlistType[]>([
			{id: wishlistID1, category: "phones", filterBy: "OS"},
			{id: wishlistID2, category: "books", filterBy: "genre"}
		]
	)
	const [wishes, setWishes] = useState<WishesDataType>(
		{
			[wishlistID1]: [
				{id:v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true},
				{id:v1(), title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
				{id:v1(), title: 'Xiaomi 13', OS: "Android", checked: true},
				{id:v1(), title: 'Huawei', OS: "Android", checked: false},
				{id:v1(), title: 'Iphone 14', OS: "iOS", checked: false}

			],
			[wishlistID2 ]: [

				{id:v1(), title: 'Hamlet ', genre: "Drama", checked: true},
				{id:v1(), title: 'The Odyssey ', genre: "History", checked: true},
				{id:v1(), title: 'Sherlock Holmes', genre: "Detective", checked: true},
				{id:v1(), title: 'Don Quixote', genre: "Adventure", checked: false},
				{id:v1(), title: 'HeadFirst JS', genre: "Sceince", checked: false}]


		} )


	const [activityFilter, setActivityFilter] = useState<StatusTypeForSelect>("All")
	const [osFilter, setOsFilter] = useState<OsType>("All")
	// const [wishes, setWishes] = useState<WishesDataPropsType[]>([
	// 	{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true},
	// 	{id: v1(), title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
	// 	{id: v1(), title: 'Xiaomi 13', OS: "Android", checked: true},
	// 	{id: v1(), title: 'Huawei', OS: "Android", checked: false},
	// 	{id: v1(), title: 'Iphone 14', OS: "iOS", checked: false},
	// ])
	//
	const addNewWish = (wishlistId: string, oS: OsTypeForSelect, newValue: string) => {

		let newItem = {id:v1(), title: newValue, OS: "iOS", checked: false}
		let newItem2 = {id:v1(), title: newValue, genre: "Drama", checked: false}


		wishLists.forEach(el=> {

			if (el.filterBy === "OS") {
				setWishes({...wishes, [wishlistId]: [newItem, ...wishes[wishlistId]]})
			}
			else {
				setWishes({...wishes, [wishlistId]: [newItem2, ...wishes[wishlistId]]})

			}
		})



	}








	const removeWish = (wishlistID: string, id: string) => {

		setWishes({...wishes, [wishlistID]: wishes[wishlistID].filter(el=> el.id !== id)})


	}

	// //{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true, isTrue: statusValue }
	// //1. Видишь объект-делай копию. 2. Видишь массив-делай копию. 3. Видишь ключ-создавай новый.
	//
	const changeWishStatus = (wishlistID: string,wishId: string, statusValue: boolean) => {
		setWishes({...wishes, [wishlistID]: wishes[wishlistID].map(el=>el.id === wishId ?  {...el, checked : statusValue}   : el    )})
		// setWishes(wishes.map((el)=> el.id === wishId ? {...el, checked: statusValue} :el))
	}
	//
	//
	//
	//
	// const wishesWhatWeWantToSee = (osFilter === "All" ? wishes : wishes.filter(el => el.OS === osFilter)) // select OS
	//
	//
	// const wishesWhatWeWantToSeeGeneral = activityFilter === "All" ?
	// 	wishesWhatWeWantToSee : activityFilter === "Active" ?
	// 	wishesWhatWeWantToSee.filter(el=> !el.checked )
	// 	: wishesWhatWeWantToSee.filter(el=> el.checked )
	// // select Activity
	//


	return (


		<div className="App">
			{wishLists.map((wl)=> {
				return 	<WishList
					key={wl.id}
					wishlistID={wl.id}
					wishes={wishes}
					addNewWish={addNewWish}
					osFilter={osFilter}
					setOsFilter={setOsFilter}
					removeWish={removeWish}
					activityFilter={activityFilter}
					setActivityFilter={setActivityFilter}
					changeWishStatus={changeWishStatus}
					category={wl.category}

				/>
			}  )}

		</div>



	);
}

export default App;