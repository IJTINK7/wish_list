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
	const [osFilter, setOsFilter] = useState<OsType>("All")
	const [statusFilter, setStatusFilter] = useState<StatusTypeForSelect>("All")
	const [newWishTitle, setNewWishTitle] = useState<string>("")
	const [wishes, setWishes] = useState<WishesDataPropsType[]>([
		{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true},
		{id: v1(), title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
		{id: v1(), title: 'Xiaomi 13', OS: "Android", checked: true},
		{id: v1(), title: 'Huawei', OS: "Android", checked: false},
		{id: v1(), title: 'Iphone 14', OS: "iOS", checked: false},
	])

	const addNewWish = (oS: OsTypeForSelect) => {
		setWishes([{id: v1(), title: newWishTitle, OS: oS, checked: false}, ...wishes])
	}
	const removeWish = (id: string) => {
		setWishes(wishes.filter(el => el.id !== id))
	}
	const wishesWhatWeWantToSee = (osFilter === "All" ? wishes : wishes.filter(el => el.OS === osFilter))

	||

		(statusFilter === "All" ? wishes : statusFilter === "Completed" ? wishes.filter(el => el.checked): wishes.filter(el => !el.checked))

	const changeWishStatus = (wishId:string, isDone:boolean) => {
		console.log(wishId)
		console.log(isDone)
		setWishes(wishes.map(el=>el.id === wishId ? {...el, checked:isDone}: el))
	}

	return (
		<div className="App">
			<WishList wishes={wishesWhatWeWantToSee}
					  addNewWish={addNewWish}
					  osFilter={osFilter}
					  setOsFilter={setOsFilter}
					  newWishTitle={newWishTitle}
					  setNewWishTitle={setNewWishTitle}
					  removeWish={removeWish}
					  changeWishStatus={changeWishStatus}
					  statusFilter={statusFilter}
					  setStatusFilter={setStatusFilter}
			/>
		</div>
	);
}

export default App;