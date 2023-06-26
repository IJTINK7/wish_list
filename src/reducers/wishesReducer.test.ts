import {WishesDataType} from "../App";
import {v1} from "uuid";
import {addWishAC, changeWishStatusAC, removeWishAC, wishesReducer} from "./wishesReducer";

let startState: WishesDataType

beforeEach( () => {

  startState =  {
            ['wishlistID1']: [
                {id: v1(), title: 'Samsung Galaxy S23', status: "usual", checked: true},
                {id: v1(), title: 'IPhone 13 ProMax', status: 'important', checked: true},
                {id: v1(), title: 'Xiaomi 13', status: "usual", checked: true},
                {id: v1(), title: 'Huawei', status: "usual", checked: false},
                {id: v1(), title: 'Iphone 14', status: 'important', checked: false}

            ],
            ['wishlistID2']: [

                {id: v1(), title: 'Hamlet ', status: "usual", checked: true},
                {id: v1(), title: 'The Odyssey ', status: "important", checked: true},
                {id: v1(), title: 'Sherlock Holmes', status: "usual", checked: true},
                {id: v1(), title: 'Don Quixote', status: "important", checked: false},
                {id: v1(), title: 'HeadFirst JS', status: "usual", checked: false}]


        }
       //  const action = removeWishAC("2", "wishlistID2");
       // const endState = wishesReducer(startState, action)
});

test('should delete wish', ()=> {

    // let endState = wishesReducer(startState, removeWishAC(startState['wishlistID1'][0].id, 'wishlistID1'))
    let endState = wishesReducer(startState, removeWishAC('wishlistID1', startState['wishlistID1'][0].id));

    expect(startState['wishlistID1'][0].id).toBeDefined()
    expect(startState['wishlistID1'][1].id).toBe(endState['wishlistID1'][0].id)
    expect(endState['wishlistID1'].length).toBe(4)



})

test('should add newWish', ()=>{
    const newWish = {id: v1(), title: 'Siemens', status: "usual", checked: true}

    let endState = wishesReducer(startState,addWishAC('wishlistID1', 'usual', 'Siemens'))

    expect(startState['wishlistID1'].length).toBe(5)
    expect(endState['wishlistID1'].length).toBe(6)
    expect(endState['wishlistID1'][0].title).toBe('Samsung Galaxy S23')
    // expect(endState['wishlistID1'].at(-1)).toEqual(startState['wishlistID1'].at(-1))
})


test('should be change status', ()=>{

    let endState = wishesReducer(startState, changeWishStatusAC('wishlistID1', startState['wishlistID1'][0].id, false))


    expect(endState['wishlistID1'][0].checked).toBe(false)



})
        //expect(endState["todolistId2"][0].id).toBe("1");
        //expect(endState["todolistId2"][1].id).toBe("3");



    // test('correct task should be added to correct array', () => {
    //     const startState: TasksStateType = {
    //         "todolistId1": [
    //             { id: "1", title: "CSS", isDone: false },
    //             { id: "2", title: "JS", isDone: true },
    //             { id: "3", title: "React", isDone: false }
    //         ],
    //         "todolistId2": [
    //             { id: "1", title: "bread", isDone: false },
    //             { id: "2", title: "milk", isDone: true },
    //             { id: "3", title: "tea", isDone: false }
    //         ]
    //     };
    //
    //
    //     const action = addTaskAC("juce", "todolistId2");
    //     const endState = tasksReducer(startState, action)
    //
    //     expect(endState["todolistId1"].length).toBe(3);
    //     expect(endState["todolistId2"].length).toBe(4);
    //     expect(endState["todolistId2"][0].id).toBeDefined();
    //     expect(endState["todolistId2"][0].title).toBe("juce");
    //     expect(endState["todolistId2"][0].isDone).toBe(false);
    // })
    //
    // test('status of specified task should be changed', () => {
    //     const startState: TasksStateType = {
    //         "todolistId1": [
    //             { id: "1", title: "CSS", isDone: false },
    //             { id: "2", title: "JS", isDone: true },
    //             { id: "3", title: "React", isDone: false }
    //         ],
    //         "todolistId2": [
    //             { id: "1", title: "bread", isDone: false },
    //             { id: "2", title: "milk", isDone: true },
    //             { id: "3", title: "tea", isDone: false }
    //         ]
    //     };
    //
    //     const action = changeTaskStatusAC("2", false, "todolistId2");
    //
    //     const endState = tasksReducer(startState, action)
    //
    //     expect(endState["todolistId2"][1].isDone).toBeFalsy();
    //     expect(endState["todolistId1"][1].isDone).toBeTruthy();
    // });
    //
    // test('title of specified task should be changed', () => {
    //     const startState: TasksStateType = {
    //         "todolistId1": [
    //             { id: "1", title: "CSS", isDone: false },
    //             { id: "2", title: "JS", isDone: true },
    //             { id: "3", title: "React", isDone: false }
    //         ],
    //         "todolistId2": [
    //             { id: "1", title: "bread", isDone: false },
    //             { id: "2", title: "milk", isDone: true },
    //             { id: "3", title: "tea", isDone: false }
    //         ]
    //     };
    //
    //     const action = changeTaskTitleAC("2", "Milkyway", "todolistId2");
    //     const endState = tasksReducer(startState, action)
    //
    //     expect(endState["todolistId2"][1].title).toBe("Milkyway");
    //     expect(endState["todolistId1"][1].title).toBe("JS");
    // });
    //
    // test('new property with new array should be added when new todolist is added', () => {
    //     const startState: TasksStateType = {
    //         "todolistId1": [
    //             { id: "1", title: "CSS", isDone: false },
    //             { id: "2", title: "JS", isDone: true },
    //             { id: "3", title: "React", isDone: false }
    //         ],
    //         "todolistId2": [
    //             { id: "1", title: "bread", isDone: false },
    //             { id: "2", title: "milk", isDone: true },
    //             { id: "3", title: "tea", isDone: false }
    //         ]
    //     };
    //
    //     const action = addTodolistAC("title no matter");
    //     const endState = tasksReducer(startState, action)
    //
    //
    //     const keys = Object.keys(endState);
    //     const newKey = keys.find(k => k != "todolistId1" && k != "todolistId2");
    //     if (!newKey) {
    //         throw Error("new key should be added")
    //     }
    //
    //     expect(keys.length).toBe(3);
    //     expect(endState[newKey]).toStrictEqual([]);
    // });
    //
    // test('propertry with todolistId should be deleted', () => {
    //     const startState: TasksStateType = {
    //         "todolistId1": [
    //             { id: "1", title: "CSS", isDone: false },
    //             { id: "2", title: "JS", isDone: true },
    //             { id: "3", title: "React", isDone: false }
    //         ],
    //         "todolistId2": [
    //             { id: "1", title: "bread", isDone: false },
    //             { id: "2", title: "milk", isDone: true },
    //             { id: "3", title: "tea", isDone: false }
    //         ]
    //     };
    //
    //     const action = removeTodolistAC("todolistId2");
    //     const endState = tasksReducer(startState, action)
    //
    //
    //     const keys = Object.keys(endState);
    //
    //     expect(keys.length).toBe(1);
    //     expect(endState["todolistId2"]).toBeUndefined();
    //
    //






// })