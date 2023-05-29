import React, {useState} from 'react';
import './App.css';
import {OsTypeForSelect, StatusTypeForSelect, WishList} from "./WishList";
import {v1} from "uuid";

export type OsType = "All" | "iOS" | "Android" | OsTypeForSelect

export type WishesDataPropsType = {
	id: string
	title: string
	OS: OsType
	checked: boolean
}

function App() {
	const [activityFilter, setActivityFilter] = useState<StatusTypeForSelect>("All")
	const [osFilter, setOsFilter] = useState<OsType>("All")
	const [wishes, setWishes] = useState<WishesDataPropsType[]>([
		{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true},
		{id: v1(), title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
		{id: v1(), title: 'Xiaomi 13', OS: "Android", checked: true},
		{id: v1(), title: 'Huawei', OS: "Android", checked: false},
		{id: v1(), title: 'Iphone 14', OS: "iOS", checked: false},
	])

	const addNewWish = (oS: OsTypeForSelect, newValue: string) => {
		setWishes([{id: v1(), title: newValue, OS: oS, checked: false}, ...wishes])
	}
	const removeWish = (id: string) => {
		setWishes(wishes.filter(el => el.id !== id))
	}

	//{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true, isTrue: statusValue }
	//1. Видишь объект-делай копию. 2. Видишь массив-делай копию. 3. Видишь ключ-создавай новый.

	const changeWishStatus = (wishId: string, statusValue: boolean) => {
		setWishes(wishes.map((el)=> el.id === wishId ? {...el, checked: statusValue} :el))
	}




	const wishesWhatWeWantToSee = (osFilter === "All" ? wishes : wishes.filter(el => el.OS === osFilter)) // select OS


	const wishesWhatWeWantToSeeGeneral = activityFilter === "All" ?
		wishesWhatWeWantToSee : activityFilter === "Active" ?
		wishesWhatWeWantToSee.filter(el=> !el.checked )
		: wishesWhatWeWantToSee.filter(el=> el.checked )
	// select Activity



	return (
		<div className="App">
			<WishList wishes={wishesWhatWeWantToSeeGeneral}
					  addNewWish={addNewWish}
					  osFilter={osFilter}
					  setOsFilter={setOsFilter}
					  removeWish={removeWish}
					  activityFilter={activityFilter}
					  setActivityFilter={setActivityFilter}
					  changeWishStatus={changeWishStatus}


			/>
		</div>
	);
}

export default App;