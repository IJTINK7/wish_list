import React, {useState} from 'react';
import './App.css';
import {WishList} from "./WishList";

export type OsType = "All" | "iOS" | "Android"

type PhoneDataPropsType = {
	id: number
	title: string
	OS: OsType
	price: number
	checked: boolean
}
export type WishesType = {
	category: string
	data: PhoneDataPropsType[]
}

function App() {
	const [wishes, setWishes] = useState<WishesType>({
		category: "Phones",
		data: [
			{id: 1, title: 'Samsung Galaxy S23', OS: "Android", price: 1300, checked: true},
			{id: 2, title: 'IPhone 13 ProMax', OS: "iOS", price: 1200, checked: true},
			{id: 3, title: 'Xiaomi 13', OS: "Android", price: 1000, checked: true},
			{id: 4, title: 'Huawei', OS: "Android", price: 900, checked: false},
			{id: 5, title: 'Iphone 14', OS: "iOS", price: 1400, checked: false},
		]
	})
	return (
		<div className="App">
			<WishList wishes={wishes}/>
		</div>
	);
}

export default App;


