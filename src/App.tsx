import React, {useState} from 'react';
import './App.css';
import {WishList} from "./WishList";
import {v1} from "uuid";

export type OsType = "All" | "iOS" | "Android"

export type WishesDataPropsType = {
	id: string
	title: string
	OS: OsType
	checked: boolean
}
function App() {
	const [osFilter, setOsFilter] = useState<OsType>("All")
	const [wishes, setWishes] = useState<WishesDataPropsType[]>([
		{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true},
		{id: v1(), title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
		{id: v1(), title: 'Xiaomi 13', OS: "Android", checked: true},
		{id: v1(), title: 'Huawei', OS: "Android", checked: false},
		{id: v1(), title: 'Iphone 14', OS: "iOS", checked: false},
	])

	const addItem = (newItem: string, wishFilter: OsType) => {
		let newWishItem = {id: v1(), title: newItem, OS: wishFilter, checked: false};
		setWishes([newWishItem, ...wishes]);
	}

	const removeTask = (taskId: string) => {
		setWishes(wishes.filter(el => el.id !== taskId))
	}

	const ChangeOs = (osValue: OsType) => {
		setOsFilter(osValue)
	}

	const wishesWhatWeWantToSee = osFilter === "All" ? wishes : wishes.filter(el=> el.OS === osFilter)
		return (
			<div className="App">
				<WishList wishes={wishesWhatWeWantToSee}
						  addItem={addItem}
						  removeTask={removeTask}
						  ChangeOs={ChangeOs}
						  osFilter={osFilter}
				/>
			</div>
		);
	}
export default App;