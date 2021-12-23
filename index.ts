//---Typed Arrays--------------------------------------------------------------
const colors: string[] = ['red', 'green', 'black']

const dates = [new Date()]

const fruitsByColor: string[][] = [
    ['cherry'],
    ['apple'],
    ['lemon']
]

//Extracting values
const color: boolean = colors[0]
const color2 = colors.pop()

//Prevent incompatible values
colors.push(true)

//Help with 'map'
colors.map((color: string): string => {
    return color.toUpperCase()
})

//Flexible types
const impotantDates = [new Date(), '2021-11-11', true, 12]
const impotantDates2: (Date | string)[] = [new Date()]

impotantDates2.push('2021-11-11')
impotantDates2.push(13)



//---Type Annotations Obj's----------------------------------------------
// const profile = {
//     name: 'Jack',
//     age: 25,
//     coordinates: {
//         lat: 25.2654841212315,
//         lng: 44.7564689463133
//     },
//     setAge(age: number): void {
//         this.age = age
//     }
// }

// const {age}: {age: number} = profile

// const {coordinates: {lat, lng}}: {coordinates: {lat: number, lng: number}} = profile



//---Type Annotations Func's----------------------------------------------
// const addNumbers = (a: number, b: number): number => {
//     return a + b 
// }

// const subNumbers = (a: number, b: number): number => {
//     return a - b
// }

// function divNumbers(a: number, b: number): number {
//     return a / b
// }

// const mulNumbers = function(a: number, b: number): number {
//     return a * b
// }

// const logger = (msg: string): void => {
//     console.log(msg)
// }

// const throwError = (msg: string): never => {
//     throw new Error(msg)
// }

// const forecastToday = {
//     date: new Date(),
//     weather: 'sunny'
// }

// const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
//     console.log(date, weather)
// }

// logWeather(forecastToday)


//---Type Annotations-----------------------------------------------------
// let oranges: number = 5
// let speed: string = 'fast'
// let hasDog: boolean = true
// let nothing: null = null
// let nothing2: undefined = undefined

// //built-in objects
// let now: Date = new Date()

// //Array
// let colors: string[] = ['red', 'yellow']
// let numbers: number[] = [1, 3]
// let results: boolean[] = [true, false]

// //Class
// class Car {

// }

// let car: Car = new Car()

// //Object
// const point: {x: number; y: number} = {
//     x: 13,
//     y: 31
// }

// //Functions
// const logNumber: (i: number) => void = (i: number) => {
//     console.log(i)
// }

// //Type Inference
// let red = 'red' //TI works - Type 'String'

// let blue
// blue = 'blue' //TI does not work - Type 'Any'

// //When to use type annotations

// //1) Function returns the 'any' type
// const json = '{"x": 10, "y": 20}'
// const coordinates: {x: number; y: number} = JSON.parse(json) //JSON.parse return type 'any'

// console.log(coordinates)

// //2) Lazy initialization
// let words = ['one', 'two', 'three']
// let isTwo: number = -1

// words.forEach((item, index) => item === 'two' ? isTwo = index : null)

// console.log(isTwo)

// //3) Variables whose type cannot be inferred
// let myNumbers = [-10, -3, 13]
// let positiveNumb: number | boolean = false

// myNumbers.forEach(item => item > 0 ? positiveNumb = item : positiveNumb = false)

// console.log(positiveNumb)

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
