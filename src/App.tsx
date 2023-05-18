import React, {useState} from 'react';
import './App.css';
import {OsTypeForSelect, WishList} from "./WishList";
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
	const [wishes, setWishes] = useState<WishesDataPropsType[]>([
		{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true},
		{id: v1(), title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
		{id: v1(), title: 'Xiaomi 13', OS: "Android", checked: true},
		{id: v1(), title: 'Huawei', OS: "Android", checked: false},
		{id: v1(), title: 'Iphone 14', OS: "iOS", checked: false},
	])

	const addItem = (newItem: string, wishFilter: OsTypeForSelect) => {
		let newWishItem = {id: v1(), title: newItem, OS: wishFilter, checked: false};
		setWishes([newWishItem, ...wishes]);
	}

	const wishesWhatWeWantToSee = osFilter === "All" ? wishes : wishes.filter(el=> el.OS === osFilter)
		return (
			<div className="App">
				<WishList wishes={wishesWhatWeWantToSee}
						  addItem={addItem}
						  osFilter={osFilter}
				/>
			</div>
		);
	}
export default App;