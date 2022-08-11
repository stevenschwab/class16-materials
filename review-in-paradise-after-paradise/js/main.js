// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function takesInArray(anArray){
    let firstNumber = anArray[0];
    let lastNumber = anArray[anArray.length - 1];

    if(firstNumber < lastNumber){
        alert('Hi');
    } else if(firstNumber > lastNumber){
        alert('Bye');
    } else if(firstNumber === lastNumber){
        alert('We close in an hour');
    }
}