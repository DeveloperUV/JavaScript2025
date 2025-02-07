// #Primitive Datatype

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


const bigNumber = 1314364898574342312n


// Reference Type (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
 let myObj = {
    name: "utkarsh",
    age: 21,

 }

 const myFunction = function() {
    console.log("Hello world");
    
 }

//  console.log(typeof bigNumber);



 //*****************************************

 // Stack Memory(Primitive), Heap Memory (Non Primitive)


 let myYoutubeName = "UtkarshTechie"

 let anotherName = myYoutubeName

 anotherName = "chaiaurcode"

 console.log(anotherName);

 console.log(myYoutubeName);

 let userOne = {
   email: "user@googlecom",
   upi: "dingdong@hdfcbank"

 }

 let userTwo = userOne

 userTwo.email = "Utkarsh@google.com"
console.log(userOne.email)

console.log(userTwo.email);


 

 
 