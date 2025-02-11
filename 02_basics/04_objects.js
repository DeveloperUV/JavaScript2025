//Singleton

// const tinderUser = new Object()  -> it  is a singeton object
const tinderUser = {} // it is a  non singleton object

tinderUser.id = "123abc"
tinderUser.name = "utkarsh"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Utkarsh",
            lastname: "sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

// console.log(regularUser.fullname?.userfullname.firstname); // advance level  topic  we'lll discuss it later.


const  obj1 = {1: "a", 2: "b"};
const  obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


const user = [
    {
        id: "12ab",
        name: "utk"
    },
    {
        id: "34cd",
        name: "dindonng"
    },
    {
        id: "56ef",
        name: "bingchilling"
    },
    {
        id: "78gh",
        name: "hoshihoshi"
    }
]



// console.log(user[3].name)

// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// console.log(tinderUser.hasOwnProperty('isLogged'));
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// Destructuring in Object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh Choudhary"
}


// course.courseInstructor

// const {courseInstructor} = course

// console.log(courseInstructor);

const {courseInstructor: instructor} = course;
console.log(instructor);

