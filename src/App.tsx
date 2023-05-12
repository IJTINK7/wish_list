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
	const [wishes, setWishes] = useState<WishesDataPropsType[]>([
		{id: v1(), title: 'Samsung Galaxy S23', OS: "Android", checked: true},
		{id: v1(), title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
		{id: v1(), title: 'Xiaomi 13', OS: "Android", checked: true},
		{id: v1(), title: 'Huawei', OS: "Android", checked: false},
		{id: v1(), title: 'Iphone 14', OS: "iOS", checked: false},
	])

	const addWish = (newTitle: string, newOs: OsType) => {
		const newWish:WishesDataPropsType = {id: v1(), title: newTitle, OS: newOs, checked: false}
		setWishes([newWish, ...wishes])
	}

	return (
		<div className="App">
			<WishList wishes={wishes}
					  addWish={addWish}
			/>
		</div>
	);
}

export default App;