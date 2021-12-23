//---Type Annotations-----------------------------------------------------
let oranges: number = 5
let speed: string = 'fast'
let hasDog: boolean = true
let nothing: null = null
let nothing2: undefined = undefined

//built-in objects
let now: Date = new Date()

//Array
let colors: string[] = ['red', 'yellow']
let numbers: number[] = [1, 3]
let results: boolean[] = [true, false]

//Class
class Car {

}

let car: Car = new Car()

//Object
const point: {x: number; y: number} = {
    x: 13,
    y: 31
}

//Functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

logNumber(oranges)



//------------------------------------------------------------------------
// import axios from 'axios'

// const url = 'https://jsonplaceholder.typicode.com/todos/14'

// interface Todo {
//     id: number
//     title: string
//     completed: boolean
// }

// const logTodo = (id: number, title: string, completed: boolean) => {

//     console.log(`
//         The Todo with ID: ${id}
//         Has title: ${title} 
//         Is finished: ${completed}
//     `)
// }

// axios.get(url)
//     .then(res => {
//         const {id, title, completed } = res.data as Todo

//         logTodo(id, title, completed)
//     })
