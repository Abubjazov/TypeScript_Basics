//---Metadata-----------------------------------------------------------------
import 'reflect-metadata'

const box = {
    color: 'black'
}

Reflect.defineMetadata('note', 'hello', box)

console.log(Reflect.getMetadata('note', box))

//---Decorators---------------------------------------------------------------
// @classDec
// class Car {
//     @propDec
//     color: string = 'white'

//     @propDec
//     get formattedColor(): string {
//         return `This car color is: ${this.color}`
//     }

//     @logError('Car is crashed')
//     drive(@paramDec speed: number): void {
//         if (speed > 90) {
//             console.log(`It's too fast`)
//         } else {
//             console.log(`It's OK`)
//         }
//     }
// }

// function classDec(constructor: Function | typeof Car) {
//     console.log(constructor)
// }

// function paramDec(target: any, key: string, index: number) {
//     console.log(key, index)
// }

// function propDec(target: any, key: string) {
//     console.log(key)
// }

// function logError(errMsg: string) {
//     return function(target: any, key: string, desc: PropertyDescriptor): void {
//         const method = desc.value
    
//         desc.value = function() {
//             try {
//                 method()
//             } catch (error) {
//                 console.log(errMsg)
//             }
//         }
//     }
// }

// const car = new Car()
// car.drive()

//---Generics-----------------------------------------------------------------

//For Classes
// class ArrayOfNumbers {
//     constructor(public collection: number[]) {}

//     get(idx: number): number {
//         return this.collection[idx]
//     }
// }

// class ArrayOfStrings {
//     constructor(public collection: string[]) {}

//     get(idx: number): string {
//         return this.collection[idx]
//     }
// }

// class ArrayOfAny<T> {
//     constructor(public collection: T[]) {}

//     get(idx: number): T {
//         return this.collection[idx]
//     }
// }

// new ArrayOfAny<number>([1, 2, 3])
// new ArrayOfAny<string>(['1', '2', '3'])
// new ArrayOfAny(['1', '2', '3'])
// const arr = new ArrayOfAny([1, 2, 3])


// //For Fuctions
// function printString(strings: string[]): void {
//     strings.forEach((string: string) => console.log(string))
// }

// function printNumbers(numbers: number[]): void {
//     numbers.forEach((number: number) => console.log(number))
// }

// function printAny<T>(arr: T[]): void {
//     arr.forEach((item: T) => console.log(item))
// }

// printAny<number>([1, 2, 3])
// printAny(['1', '2', '3'])


//Generics Constraints
// class Human {
//     print() {
//         console.log('I am a human')
//     }
// }

// class Robot {
//     print() {
//         console.log('I am a robot')
//     }
// }

// interface Printable {
//     print(): void
// }

// function printAnyClass<T extends Printable>(arr: T[]): void {
//     arr.forEach(item => item.print())
// }

// printAnyClass<Human>([new Human(), new Human()])
// printAnyClass([new Human(), new Robot()])

//---Classes------------------------------------------------------------------
// class Vehicle {
//     mode: string = 'Parking'
//     // color: string

//     // constructor(color: string) {
//     //     this.color = color
//     // }
    
//     constructor(public color: string) {}

//     protected print(): void {
//         console.log(`${this.mode} mode activated`)
//     }

//     protected drive(): void {
//         this.mode = 'Drive'
//         this.print()
//     }

//     public stop(): void {
//         this.mode = 'Stop'
//         this.print()
//     }

//     public parking(): void {
//         this.mode = 'Parking'
//         this.print()
//     }

//     start() {
//         this.drive()
//     }
// }

// class Car extends Vehicle {
//     constructor(public wheels: number, color: string) {
//         super(color)
//     }

//     private beep(): void {
//         console.log('Beep')
//     }

//     startDrive(): void {
//         this.beep()
//         this.drive()
//     }

//     public parking(): void {
//         console.log('Car parking mode activated')
//     }
// }

// const vehicle = new Vehicle('red')
// vehicle.start()
// vehicle.stop()
// console.log(vehicle.color)

// const car = new Car(4, 'silver')
// car.startDrive()
// car.stop()
// car.parking()
// console.log(car.color)
// console.log(car.wheels)

//---Interfaces---------------------------------------------------------------
// interface Reportable {
//     summary(): string
// }

// const printReport = (item: Reportable): void => {
//     console.log(item.summary())
// }

// const civic = {
//     name: 'Civic',
//     year: 2000,
//     broken: true,
//     summary() {
//         return `
//             Name: ${this.name}
//             Year: ${this.year}
//             Broken: ${this.broken}
//     `
//     }
// }

// const drink = {
//     color:'brown',
//     carbonated: true,
//     sugar: 40,
//     summary() {
//         return `
//             Drink color: ${this.color}
//             Drink carbonated: ${this.carbonated}
//             Sugar content: ${this.sugar}
//     `
//     }
// }

// printReport(civic)
// printReport(drink)

//---Tuples-------------------------------------------------------------------
// const drink = {
//     color: 'brown',
//     carbonated: true,
//     sugar: 40
// }

// const drinkTuple: [string, boolean, number] = ['brown', true, 40]

// drinkTuple[0] = true

// type Drink = [string, boolean, number] //Type alias

// const cola: Drink = ['brown', true, 40]

// cola[1] = true


// const carSpecs: [number, number] = [400, 3354]

// const carSpecsObj = {
//     hp: 400,
//     weight: 3354
// }

//---Typed Arrays--------------------------------------------------------------
// const colors: string[] = ['red', 'green', 'black']

// const dates = [new Date()]

// const fruitsByColor: string[][] = [
//     ['cherry'],
//     ['apple'],
//     ['lemon']
// ]

// //Extracting values
// const color: boolean = colors[0]
// const color2 = colors.pop()

// //Prevent incompatible values
// colors.push(true)

// //Help with 'map'
// colors.map((color: string): string => {
//     return color.toUpperCase()
// })

// //Flexible types
// const impotantDates = [new Date(), '2021-11-11', true, 12]
// const impotantDates2: (Date | string)[] = [new Date()]

// impotantDates2.push('2021-11-11')
// impotantDates2.push(13)



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
