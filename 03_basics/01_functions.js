

function sayMyName() {
    console.log("U");
    console.log("T");
    console.log("K");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}


// sayMyName()


function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result;

    return number1 + number2
    
}

// addTwoNumbers(3, 4)

const result = addTwoNumbers(3, 4)

// console.log("result: ", result)

function loginUserMessage(username)  {
    if(username  === undefined) {
        console.log("Please enter a user name");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Utkarsh"))
console.log(loginUserMessage());




