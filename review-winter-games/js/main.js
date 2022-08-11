//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evenNumberArray(anArray){
    let newArray = [];

    anArray.forEach((x, i) => {
        if(x % 2 === 0){
            newArray.push(x);
        }
    });

    return newArray;
}