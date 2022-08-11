// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let aVar = '';
aVar = 'sushi';
alert(aVar);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newVar = 'astring';
alert(newVar[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function product(num1, num2, num3){
    alert((num1 / num2) * num3);
}
product(1, 2, 3);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(num){
    console.log(Math.cbrt(num));
}
cubeRoot(4);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function monthConditional(month){
    let lcMonth = month.toLowerCase();
    if (lcMonth === 'june' || lcMonth === 'july' || lcMonth === 'august' || lcMonth === 'september') {
        alert('YAY');
    } else {
        alert('Booo');
    }
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skips(aNumber){
    for(let i = 1; i <= aNumber; i++){
        if(i % 5 !== 0){
            console.log(i);
        }
    }
}