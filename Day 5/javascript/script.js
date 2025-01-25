console.log("hello\nprem")
let a = 10
let b = 20
let c = a + b
console.log(c)

c = a * b
console.log(c)


c = a / b
console.log(c)
c = a - b
console.log(c)

// Kilometer to Miles Conversion

let km = 5
let miles = km * 0.621
console.log(km + " Km = " + miles + " Miles")


//  Degree to Farhenheit


let deg = 3
let far = (deg * (9 / 5)) + 32
console.log(deg + " Degree = " + far + " F")


// Kilometer to pounds Convrsion

a = 5
b = (a * 2.2046)
console.log(a + " Kg = " + b + " Pounds")

// 

// const x = prompt("Enter Weight")
// const y = prompt("Enter Height")
let x = 1
let y = 2
let weight = x/(y*y)

if (weight < 18.5) {
    console.log("Your Weight is" + weight)
    console.log("Underweight")
} else if (weight < 24.9) {
    console.log("Your Weight is" + weight)
    console.log("Normal Weight")
} else if (weight < 29.9) {
    console.log("Your Weight is" + weight)
    console.log("Over Weight")
} else if (weight >= 30 ) {
    console.log("Your Weight is " + weight)
    console.log("Obese")
}

// Unit calculator


// let unit = prompt ("Enter Electricity Unit")
let unit = 1
let charge = 0

if(unit <= 100){
    console.log("No charges")
} else if (unit > 100 && unit <= 200 ) {
    charge = (unit - 100) * 5
    console.log("charges = " + charge)

} else if (unit > 200){
    charge = (unit - 200) * 10
    console.log("charges: " + (charge + 500) + " Rs")
}


function func1() {
    // let input = document.getElementById("input1").value
    let input = document.querySelector("#input1").value;
    input = input * 0.621
    console.log(input)
    document.querySelector("#result").innerText = input;
    // alert("Buttonn is pressed")
}