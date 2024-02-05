//* JSON - Javascript Object Notation
//* JSON parse, stringify, import json file into the js file.

import person from "../data/person.json" assert {type: "json"}

console.log(person)

const simpelJsonData = { "name": "John", "age": 30, "city": "New York" };
const jsonData = '{ "name": "John", "age": 30, "city": "New York" }'
console.log(simpelJsonData)
console.log(jsonData)

const parsedData = JSON.parse(jsonData)

console.log(parsedData)

const jsonString = JSON.stringify(simpelJsonData)

console.log(jsonString)

const dataArray = [5, 2, 8, 1, 7, 0, 321, 75]

console.log(dataArray)

const jsonArray = JSON.stringify(dataArray)

console.log(jsonArray)

const parsedArray = JSON.parse(jsonArray)

console.log(parsedArray)


//* Object.entries */

console.log("Object entries:")
for (const [key, value] of Object.entries(parsedData)) {
    console.log(`${key}: ${value}`)
}

const numEntries = Object.entries(parsedData).length

console.log(`Number of entries: ${numEntries}`)

//* Object.entries END */

//* Advanced array-methods */

const complexArrayWithObject = [
    {
        name: "John",
        age: 25,
        address: {
            city: "ExampleCity",
            country: "ExampleCountry"
        },

    },
    {
        name: "Jane",
        age: 30,
        address: {
            city: "AnotherCity",
            country: "AnotherCountry",
        },
    },
]

const address = complexArrayWithObject.map((person) => person.address);

console.log("Address:", address)

if (dataArray.includes(0)) {
    console.log("The array contains 0")
} else {
    console.log("The array does not contain 0")
}


const doubleArray = dataArray.map((number) => number * 2)
console.log(doubleArray)

const oddArray = dataArray.filter((number) => number % 2 !== 0)
console.log(oddArray)

const evenArray = dataArray.filter((number) => number % 2 === 0)
console.log(evenArray)

const sum = dataArray.reduce((sum, number) => sum + number, 0)

console.log(sum)

const sortedArray = dataArray.sort((a, b) => a - b)

console.log(sortedArray)

const sortedArrayDesc = dataArray.sort((a, b) => b - a)

console.log(sortedArrayDesc)
console.log(dataArray)

const modfiedObject = {
    ...parsedData,
    name: `Mr ${parsedData.name} Wick`
}

console.log(modfiedObject)
console.log(parsedData)

//* Find sum of dataArray * 3 with only odd numbers:
const result = dataArray.map((number) => number * 3).filter((number) => number % 2 !== 0).reduce((sum, number) => sum + number, 0)

console.log(result)


const colors = ["red", "blue", "green"]

colors.forEach(color => console.log(color))

const hasEvenNumber = dataArray.some(num => num % 2 === 0)

console.log(hasEvenNumber)

const someEvenNums = [2, 4, 6, 8]

const allEvenNumbers = dataArray.every(num => num % 2 === 0)

console.log(allEvenNumbers)


const length = 100

const randomNumArray = Array.from({ length }, () => Math.ceil(Math.random() * 99))

const randomNumber = Math.floor(Math.random() * 10)

console.log(randomNumber)

console.log(randomNumArray)

// const sorted = randomNumArray.sort((a, b) => a - b)

// console.log(sorted)




















