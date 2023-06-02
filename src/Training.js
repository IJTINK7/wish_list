// Запускать код комбинацией клавиш Ctrl + Shift + F10

// Object

// let object1 = {};
// let object2 = {};
// console.log(object1 === object2)

// let human = {
//     "name": "Anton",
//     age: 28,
// };
//
// console.log(human.name)
// console.log(human["age"])

// let human = {
//     name: "Anton",
//     age: 28,
// };
//
// human.isMarried = false;
// console.log(human)
// //
// // console.log("---------------------Поясните почему произошло так?---------------------")
// human.isMarried = true;
// console.log(human)

// let object1 = {
//     name: "Anton",
//     age: 28,
//     address: {
//         city: "Minsk",
//         street: "Kirova",
//         house: 17
//     },
// };
// //
// let object2 = object1;
// //
// console.log(object2)
// console.log("------------------------------------------")
// console.log(object1 === object2)

// let object1 = {
//     name: "Denis",
//     age: 35,
//     address: {city: "Moscow",street: "Pushkina",house: {
//             number: 56,
//             floor: "2-nd",
//             flat: 11
//         }
//     },
// };
// //
// let object2 = object1;
// console.log(object2)
//
//
// object2.name = "Antony"
// object2.age = 27;
// object2.address.city = "London";
// object2.address.house.flat = 13;
//
// console.log("-----------------------------------------------------------------------")
// console.log(object1.address.city === "London")
// console.log(object1.address.house.flat === 13)
//
// console.log("-----------------------------------------------------------------------")
// console.log(object1)
// console.log(object2)
//
//
// console.log("-----------------------------------------------------------------------")
// console.log(object1.address === object2.address)
//
// console.log("-----------------------------------------------------------------------")

// Три главных правила:
//     1) Видишь Объект - Делай копию!
//     2) Видишь Массив - Делай копию!
//     3) Видишь ключ - Создавай новый!
// © Игорь =)


// let object1 = {
//     name: "Denis",
//     age: 35,
//     address: {
//         city: "Moscow",
//         street: "Pushkina",
//         house: {
//             number: 56,
//             floor: "2-nd",
//             flat: 11
//         }
//     },
// };
// let object2 = {...object1}
//
// object1.address.house.flat = 17
// console.log(object1.address.house.flat)
// console.log(object2.address.house.flat)

// Задание 1:
// Поменяйте в object3 иммутабельно city: с "Moscow" на "Minsk":

// let object1 = {
//     name: "Denis",
//     age: 35,
//     address: {
//         city: "Moscow",
//         street: "Pushkina",
//         house: {
//             number: 56,
//             floor: "2-nd",
//             flat: 11
//         },
//     },
// };

// let object3 = {
//     ...object1,
//     address: {
//         ...object1.address,
//         city: "Minsk"
//     }}
// console.log(object1)
// console.log(object3)

// Задание 2: Поменяйте в object4 иммутабельно:
// 1) name: с "Denis" на "Anton";
// 2) street: с 'Pushkina' на 'Kirova';

// let object1 = {
//     name: "Denis",
//     age: 35,
//     address: {
//         city: "Moscow",
//         street: "Pushkina",
//         house: {
//             number: 56,
//             floor: "2-nd",
//             flat: 11
//         },
//     },
// };

// let object4 = {...object1, name: "Anton", address: {...object1.address, street: 'Kirova', house: {...object1.address.house, number: 60}}}
//
// console.log(object1)
// console.log(object4)


// Задание 3:
// Поменяйте в object5 иммутабельно:
// 1) age: с 35 на 23;
// 2) city: с 'Moscow' на 'Brest';
// 3) flat:  с 11 на 15;

// let object1 = {
//     name: "Denis",
//     age: 35,
//     address: {
//         city: "Moscow",
//         street: "Pushkina",
//         house: {
//             number: 56,
//             floor: "2-nd",
//             flat: 11
//         },
//     },
// };

//
// let object5 = {...object1, age: 23, address: {...object1.address, city:'Brest', house: {...object1.address.house, flat: 15} }}
// console.log(object1)
// console.log(object5)


// ----------------------------------------------------------------------------------------------

//Array

// let array1 = [1, "Hi", true, 45, null, "Alex"]
// console.log(array1[0] + array1[3]) // Выведите в консоль 46
// console.log(array1[1] + ", " +array1[5]) //Выведите в консоль строку "Hi, Alex"
// console.log("--------------------------------------------")

// push
// pop
// shift
// unshift

// console.log(array1)
// array1.push(5)
// console.log(array1)
//
// array1.pop()
// console.log(array1)
//
// array1.shift()
// console.log(array1)
//
// array1.unshift("Hello")
// console.log(array1)


// let array2 = [2, -1, 23, 0, -9, 12, -7, 36, 49]
//
// let array3 = array2.map(el => el + 1)
// console.log(array2)
// console.log(array3)

// let array4 = array2.filter(el => el < -3)
// console.log(array2)
// console.log(array4)

// Три главных правила:
//     1) Видишь Объект - Делай копию!
//     2) Видишь Массив - Делай копию!
//     3) Видишь ключ - Создавай новый!
// © Игорь =)

// Задача 1: Вывести в консоль названия каждой модели телефона (title)
// const wishes = [
//     {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//     {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     {id: 3, title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
//     {id: 4, title: 'Xiaomi 13', OS: "Android", checked: true},
//     {id: 5, title: 'Iphone 14', OS: "iOS", checked: false},
// ]
//
// const wishes1 = wishes.map(el => el.title )
// console.log(wishes1)

// Задача 2: Вывести в консоль объекты, где значение checked - true

// const wishes = [
//     {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//     {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     {id: 3, title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
//     {id: 4, title: 'Xiaomi 13', OS: "Android", checked: true},
//     {id: 5, title: 'Iphone 14', OS: "iOS", checked: false},
// ]
//
// // console.log(wishes.filter(el => el.checked))
// console.log(wishes.filter(el => !el.checked))

// Задача 3: Вывести в консоль новый массив, в котором нужно каждый id увеличить на 1
// const wishes = [
//     {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//     {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     {id: 3, title: 'IPhone 13 ProMax', OS: "iOS", checked: true},
//     {id: 4, title: 'Xiaomi 13', OS: "Android", checked: true},
//     {id: 5, title: 'Iphone 14', OS: "iOS", checked: false},
// ]

// const wishes1 = wishes.map(el =>({...el, id: el.id + 1}))
// console.log(wishes1)


// Задача 4: Замените в ключе "phones" в объект с id:2 title с 'Huawei' на "Samsung Galaxy S7"

// const wishes = {
//     phones: [
//         {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//         {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     ],
//     books: [
//         {id: 1, title: 'Dark Tower', Author: "Stephen King", price: 15},
//         {id: 2, title: 'Flowers for Algernon', Author: "Daniel Keyes", price: 12},
//     ],
// }
//
// const wishes1 = {...wishes, phones: wishes.phones.map(el => el.id === 2 ? {...el, title: "Samsung Galaxy S7"} : el )}
// console.log(wishes1)

// Занятие от 26.05.2023

// Три главных правила:
//     1) Видишь Объект - Делай копию!
//     2) Видишь Массив - Делай копию!
//     3) Видишь ключ - Создавай новый!
// © Игорь =)

// Замените в books в id:1 title с 'Dark Tower' на "IT"

// const wishes = {
//     phones: [
//         {id: 1, title: 'Samsung Galaxy S23', OS: "Android", checked: true},
//         {id: 2, title: 'Huawei', OS: "Android", checked: false},
//     ],
//     books: [
//         {id: 1, title: 'Dark Tower', Author: "Stephen King", price: 15},
//         {id: 2, title: 'Flowers for Algernon', Author: "Daniel Keyes", price: 12},
//     ],
// }
// console.log({...wishes, books:wishes.books.map(el=> el.id === 1 ? {...el, title: "IT"} : el)})


// Задача: Поменять 'JS' на "Typescript"

// const tasks = {
// 		["todolistID1"]: [
// 			{id: 1, title: 'HTML&CSS', isDone: true},
// 			{id: 2, title: 'JS', isDone: true},
// 			{id: 3, title: 'ReactJS', isDone: false},
// 			{id: 4, title: 'Rest API', isDone: false},
// 			{id: 5, title: 'Graph SQL', isDone: false},
// 		],
// 		["todolistID2"]: [
// 			{id: 6, title: 'Milk', isDone: true},
// 			{id: 7, title: 'Fruits', isDone: true},
// 			{id: 8, title: 'Nuts', isDone: true},
// 			{id: 9, title: 'Bread', isDone: false},
// 			{id: 10, title: 'Sugar', isDone: false},
// 		]
// 	}
// console.log({...tasks, ["todolistID1"]: tasks["todolistID1"].map(el=>el.id === 2 ? {...el, title: "Typescript"} : el)})

// -----------------------------------------------------------------------------------


// Занятие от 02.06.2023

// Три главных правила:
//     1) Видишь Объект - Делай копию!
//     2) Видишь Массив - Делай копию!
//     3) Видишь ключ - Создавай новый!
// © Игорь =)


// Задача 1: Поменять в объекте с id: 8 значение isDone с 'true' на "false"

// const tasks = {
//     ["todolistID1"]: [
//         {id: 1, title: 'HTML&CSS', isDone: true},
//         {id: 2, title: 'JS', isDone: true},
//         {id: 3, title: 'ReactJS', isDone: false},
//         {id: 4, title: 'Rest API', isDone: false},
//         {id: 5, title: 'Graph SQL', isDone: false},
//     ],
//     ["todolistID2"]: [
//         {id: 6, title: 'Milk', isDone: true},
//         {id: 7, title: 'Fruits', isDone: true},
//         {id: 8, title: 'Nuts', isDone: true},
//         {id: 9, title: 'Bread', isDone: false},
//         {id: 10, title: 'Sugar', isDone: false},
//     ]
// }
// console.log()

// Задача 2:
// 1) В массиве по ключу ["todolistID1"] оставить таски только со значением false
// 2) В массиве по ключу ["todolistID2"] оставить таски только со значением true

// const tasks = {
//     ["todolistID1"]: [
//         {id: 1, title: 'HTML&CSS', isDone: false},
//         {id: 2, title: 'JS', isDone: true},
//         {id: 3, title: 'React', isDone: false},
//         {id: 4, title: 'Rest API', isDone: true},
//         {id: 5, title: 'Graph SQL', isDone: false},
//     ],
//     ["todolistID2"]: [
//         {id: 6, title: 'Bread', isDone: false},
//         {id: 7, title: 'Milk', isDone: true},
//         {id: 8, title: 'Nuts', isDone: true},
//         {id: 9, title: 'Fruits', isDone: true},
//         {id: 10, title: 'Sugar', isDone: false},
//     ]
// }
// console.log()

// Задача 3:
// 1) В массиве по ключу ["todolistID1"] с id: 3 поменять title с 'React' на 'React + Typescript'
// 2) В массиве по ключу ["todolistID2"] с id: 7 поменять title с 'Milk' на 'Butter'

// const tasks = {
//     ["todolistID1"]: [
//         {id: 1, title: 'HTML&CSS', isDone: false},
//         {id: 2, title: 'JS', isDone: true},
//         {id: 3, title: 'React', isDone: false},
//         {id: 4, title: 'Rest API', isDone: true},
//         {id: 5, title: 'Graph SQL', isDone: false},
//     ],
//     ["todolistID2"]: [
//         {id: 6, title: 'Bread', isDone: false},
//         {id: 7, title: 'Milk', isDone: true},
//         {id: 8, title: 'Nuts', isDone: true},
//         {id: 9, title: 'Fruits', isDone: true},
//         {id: 10, title: 'Sugar', isDone: false},
//     ]
// }
// console.log()

// Задача 4 (Hard):
// С помощью логического оператора "И" (&&):
// 1) В массиве по ключу ["todolistID1"] с id: 1 поменять title с 'HTML&CSS' на 'HTML + CSS + Bootstrap',
// И по ключу ["todolistID1"] с id: 3 поменять title с 'React' на 'React + Typescript';

// 2) В массиве по ключу ["todolistID2"] с id: 7 поменять title с 'Milk' на 'Watermelon',
// // И по ключу ["todolistID2"] с id: 10 поменять title с 'Sugar' на 'Water';

// const tasks = {
//     ["todolistID1"]: [
//         {id: 1, title: 'HTML&CSS', isDone: false},
//         {id: 2, title: 'JS', isDone: true},
//         {id: 3, title: 'React', isDone: false},
//         {id: 4, title: 'Rest API', isDone: true},
//         {id: 5, title: 'Graph SQL', isDone: false},
//     ],
//     ["todolistID2"]: [
//         {id: 6, title: 'Bread', isDone: false},
//         {id: 7, title: 'Milk', isDone: true},
//         {id: 8, title: 'Nuts', isDone: true},
//         {id: 9, title: 'Fruits', isDone: true},
//         {id: 10, title: 'Sugar', isDone: false},
//     ]
// }
//
// let result = //
//
// console.log(tasks)
// console.log(result)




