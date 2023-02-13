// CONTROLLER FUNCTION
function getValues() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let revString = reverseString(userString);
    
    displayString(revString);

}

// LOGIC FUNCTION
function reverseString(userString) {

    let strArray = [];

    // reverse the string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {  
        
        strArray += userString[index];   
    }

    return strArray;

}

// VIEW FUNCTION
function displayString(rString) {

    // write to the page
    document.getElementById("msg").innerHTML = `On my world, you would say that like this: ${rString}`;

    // show the alert box
    document.getElementById("alert").classList.remove("invisible");
}