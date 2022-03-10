//Generics
const getter = (data: any): any => data

getter(13).length //undefined
getter('test').length //4

const getter2 = <T>(data: T): T => data //ES 6
function getter3<T>(data: T): T {
	return data
} //ES 5

getter2(13).length
getter3('test').length

getter2<number>(31).length
getter3<string>('test').length

const list: Array<number> = [1, 2, 3]

//Interfaces
// interface User {
// 	readonly name: string
// 	age: number
// }

// interface SuperUser extends User {
// 	getPass(): string
// }

// const user1: User = {
// 	name: 'username',
// 	age: 31,
// 	someProp: false,
// 	someProp2: 13,
// }

// class Admin implements SuperUser {
// 	name: string = 'admin'
// 	age: number = 31
// 	nickName: string = 'Nic'

// 	getPass(): string {
// 		return `${this.name}${this.age}${this.name}`
// 	}
// }

//Namespaces & Modules
// namespace Utils {
// 	export const SECRET: string = '12345678'
// 	const Pi: number = 3.14

// 	export const getPass = (name: string, age: number): string => `${name} ${age}`
// 	export const isEmpty = <T>(data: T): boolean => !data
// }

// const mySecret = Utils.SECRET

//Inheritance
//Static
// class User {
// 	static secret = 12345678

// 	constructor(public name: string, public age: number) {}
// }

// console.log(User.secret)

//Classes
// class User {
// 	public nickName: string
// 	private name: string
// 	protected age: number = 20
// 	readonly passwd: string = 'passwd'

// 	constructor(nickName: string, name: string) {
// 		this.nickName = nickName
// 		this.name = name
// 	}
// }

// const user = new User('UserNick', 'UserName')

// console.log(user.passwd)

// class User0 {
// 	constructor(
// 		public nickName: string,
// 		private name: string,
// 		protected age: number = 20,
// 		readonly passwd: string = 'passwd0'
// 	) {}
// }

// const user0 = new User0('UserNick0', 'UserName0')

// console.log(user0.nickName)
// console.log(user0.passwd)

// class User1 {
// 	constructor(public nickName: string, private age: number) {}

// 	setMyAge(age: number): void {
// 		this.age = age
// 	}

// 	getMyAge(): number {
// 		return this.age
// 	}

// 	set myAge(age: number) {
// 		this.age = age
// 	}

// 	get myAge(): number {
// 		return this.age
// 	}
// }

// const user1 = new User1('UserNick1', 31)

// console.log(user1.nickName)
// console.log(user1.getMyAge())
// user1.setMyAge(20)
// console.log(user1.myAge)
// user1.myAge = 18
// console.log(user1.getMyAge())

//Objects
// let user0: any = {
// 	name: 'Radik',
// 	age: 31,
// }

// let user1: { name: string; age: number } = {
// 	name: 'Radik',
// 	age: 31,
// }

// let admin: { name: string; age: number } = {
// 	name: 'Admin',
// 	age: 35,
// }

// type User = {
// 	name: string
// 	age: number
// 	nickName?: string
// 	getPass?: () => string
// }

// let admin0: User = {
// 	name: 'Admin',
// 	age: 35,
// 	nickName: 'adam',
// }

// let user3: User = {
// 	name: 'Radik',
// 	age: 31,
// 	getPass(): string {
// 		return `${this.name}${this.age}${this.name}`
// 	},
// }

// console.log(user3.getPass ? user3.getPass() : 'string')

//Functions
// const createPassword = (
// 	name: string = 'string',
// 	age: number | string = 13
// ): string => `${name}${age}${name}`
// const createPassword2 = (name: string = 'string', age?: number): string =>
// 	`${name}${age}${name}`

// const createSkills = (name: string, ...skills: string[]): string =>
// 	`${name} my skills: ${skills.join()}`

// createSkills('Radik', 'JS', 'React')

// //legacy func case
// let myFunc: (firstArg: string) => void

// function oldFunc(name: string): void {
// 	alert(`Hello ${name}, nice to see you! )`)
// }

// myFunc = oldFunc

// //Enum
// enum Directions {
// 	Up,
// 	Down,
// 	Left,
// 	Right,
// }

// console.log(Directions.Up)
// console.log(Directions.Down)
// console.log(Directions.Left)
// console.log(Directions.Right)

// console.log(Directions[0])
// console.log(Directions[1])
// console.log(Directions[2])
// console.log(Directions[3])

// enum links {
// 	youtube = 'https://www.youtube.com/',
// 	hh = 'https://kazan.hh.ru/',
// 	github = 'https://github.com/',
// }

// console.log(links.github)
// console.log(links.hh)
// console.log(links.youtube)

// //Array Type
// let list: number[] = [1, 2, 3]
// let list2: Array<number> = [1, 2, 3]

// //Tuple
// let tuple: [string, number] = ['hello', 13]
// // tuple = [13, 'string']
// let y: [any, any] = ['string', 10]
// let z: Array<any> = ['string', 10]

// let notSure: any = false
// notSure = true
// notSure = 13
// notSure = 'string'

// //Enum
// enum Directions {
// 	Up,
// 	Down,
// 	Left,
// 	Right,
// }

// console.log(Directions.Up)
// console.log(Directions.Down)
// console.log(Directions.Left)
// console.log(Directions.Right)

// enum Directions2 {
// 	Up = 2,
// 	Down = 'S',
// 	Left = 6,
// 	Right,
// }

// console.log(Directions2.Up)
// console.log(Directions2.Down)
// console.log(Directions2.Left)
// console.log(Directions2.Right)

// //Never
// const msg = 'hello'
// const error = (msg: string): never => {
// 	throw new Error()
// }

// const infiniteLoop = (): never => {
// 	while (true) {}
// }

// //Object
// const create = (o: object | null): void => {}
// // create(1)
// // create('s')
// create([0])
// create({ o: 0 })
// create(null)

// //Type
// type Name = string | number

// let id: Name

// id = 43
// id = 's'
// // id = [0]

//---Generics-----------------------------------------------------------------
// function logTime<T>(num: T): T {
// 	console.log(new Date())

// 	return num
// }

// logTime<string>('a')
// logTime<number>(1)

// interface MyInterface {
// 	transform: <T, F>(a: T) => F
// }

// class MyClass<T> {
// 	value!: T
// }

// const a = new MyClass<number>()
// a.value

// interface TimeStamp {
// 	stamp: number
// }

// function logTimeStamp<T extends TimeStamp>(num: T): T {
// 	console.log(num.stamp)

// 	return num
// }

//---Enums--------------------------------------------------------------------
// enum Direction {
// 	Up = 'UP',
// 	Down = 'DOWN',
// 	Left = 'LEFT',
// 	Right = 'RIGHT'
// }

// enum Decision {
// 	Yes = 1,
// 	No = calcEnum()
// }

// function calcEnum(): number {
// 	 return 2
// }

// function runEnum(obj:{Up: string}) {

// }

// runEnum(Direction)

// enum Test {
// 	A,
// 	B
// }

// let test = Test.A
// let nameA = Test[Test.A]

// const enum CE {
// 	A,
// 	B
// }

// let c = CE.B

// enum Dice {
// 	one = 1,
// 	two,
// 	three
// }

// function runDice(dice: Dice) {
// 	switch (dice) {
// 		case Dice.one:
// 			return 1

// 		case Dice.two:
// 			return 2

// 		case Dice.three:
// 			return 2

// 		default:
// 			const a: never = dice
// 	}
// }

//---Metadata + Decorators----------------------------------------------------
// import 'reflect-metadata'

// @printMetaData class Car {
//     color: string = 'black'

//     @markFunc(13)
//     drive(): void {
//         console.log('DRIVE')
//     }
// }

// function markFunc(param: number) {
//     return function(target: Car, key: string) {
//         Reflect.defineMetadata('info', param, target, key)
//     }
// }

// const info = Reflect.getMetadata('info', Car.prototype, 'drive')
// console.log(info)

// function printMetaData(target: typeof Car) {
//     for (let key in target.prototype) {
//         const info = Reflect.getMetadata('info', target.prototype, key)
//         console.log(info)
//         console.log('in')
//     }
// }

//---Metadata-----------------------------------------------------------------
// import 'reflect-metadata'

// const box = {
//     color: 'black'
// }

// Reflect.defineMetadata('note', 'hello', box)
// Reflect.defineMetadata('width', 300, box)

// Reflect.defineMetadata('scale', 1.5, box, 'color')

// console.log(Reflect.getMetadata('note', box))
// console.log(Reflect.getMetadata('width', box))

// console.log(Reflect.getMetadata('scale', box, 'color'))

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
