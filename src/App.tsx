import React, {useState} from 'react';
import './App.css';
import {WishList} from "./WishList";

export type OsType = "iOS" | "Android" | "Windows Phone"

type PhoneDataPropsType = {
  id: number
  title: string
  OS: OsType
  price: number
  checked: boolean
}
export type WishesType = {
  category: string
  OS: string;
  price: number
  data: PhoneDataPropsType[]
}

function App() {
  const [wishes, setWishes] = useState<WishesType>({
      category: "Phones",
      OS: "123",
      price: 1233,
      data: [
        {id: 1, title: 'IPhone 13 ProMax', OS: "iOS", price: 1200, checked: false},
        {id: 2, title: 'Iphone 14', OS: "iOS", price: 1400, checked: false},
        {id: 3, title: 'Samsung Galaxy Fold 4', OS: "Android", price: 1500, checked: false},
        {id: 4, title: 'Nokia Lumia', OS: "Windows Phone", price: 200, checked: false},
        {id: 5, title: 'Samsung Galaxy S23', OS: "Android", price: 1300, checked: false},
        {id: 6, title: 'Xiaomi 13', OS: "Android", price: 1000, checked: false},
        {id: 7, title: 'Huawei', OS: "Android", price: 900, checked: false},
      ]
  })
  return (
    <div className="App">
      <WishList wishes={wishes}/>
    </div>
  );
}


export default App;


