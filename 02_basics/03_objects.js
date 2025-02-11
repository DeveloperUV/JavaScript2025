// singleton
//Object.create
// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "utkarsh",
    age: 21,
    "full name": "Utkarsh Vardhan Sharma",
    [mySym]: "key1",
    location: "Mathura",
    email: "utjadhi123@gmail.com",
    isLOggedIn: false,
    lastLoggedIn: ["Monday", "saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// console.log(typeof jsUser[mySym]);


jsUser.email = "utkarhs@chatgpt.com"

// console.log(jsUser["email"]);

// Object.freeze(jsUser)

jsUser.email = "skibidi@dingdong.com"

// console.log(jsUser["email"]);
// console.log(jsUser);


jsUser.greeting = function() {
    console.log("hello JS user");
    
}


jsUser.greeting2 = function() {
    console.log(`hello ji, ${this.name}`);
    
}

console.log(jsUser.greeting);

console.log(jsUser.greeting());

console.log(jsUser.greeting2());





