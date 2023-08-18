"use strict";
/*
            // Problem 01
//- Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
function toModifiedArray(array : any[],index : number,values :any[],todelete : number ):any[]{
    array.splice(index,todelete,...myValue)
  return array
}

let myArray : number[] = [1,2,3,4,5,6] ;
let myIndex : number = 3 ;
let myValue : number[] = [100 ,122] ;
let todelete : number = 0
let modifiedArray : number[] = toModifiedArray(myArray,myIndex,myValue,todelete ) ;
console.log(modifiedArray);
*/
//Problem 02
//- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let myCart = ["Apple", "Grapes", "Orange", "Dates", " PineApple"];
{
    function addItems(array, index, toAdd) {
        array.splice(index, 0, ...toAdd);
        return array;
    }
    // let myCart : any[] = ["Apple" , "Grapes","Orange" , "Dates" ," PineApple"] ;
    let myindex = 3;
    let addValue = ["Mango"];
    let result = addItems(myCart, myindex, addValue);
    console.log(result);
}
{
    function shoppingCart(array, index, toDelete2) {
        array.splice(myIndex, toDelete2Value);
        return array;
    }
    let myIndex = 2;
    let toDelete2Value = 1;
    let result2 = shoppingCart(myCart, myIndex, toDelete2Value);
    console.log(result2);
}
let cartWithQuantity = ["Apple /3kg", "Mango /5kg", "Rice /2kg"];
let myIndex = 0;
let toDelete = 1;
let toUpdateQuantity = "Apple/10kg";
function editCartQuantity(array, myIndex, toDelete, toUpdateQuantity) {
    array.splice(myIndex, toDelete, toUpdateQuantity);
    return array;
}
console.log("Original cart", cartWithQuantity);
let updatedCart = editCartQuantity(cartWithQuantity, myIndex, toDelete, toUpdateQuantity);
console.log("Updated Cart", updatedCart);
/*
                    // problem 3
//- Write a program that uses a while loop to print the first 25 integers.
let integer : number = 0 ;
let toAdd :number = 1 ;
while(integer < 25){
  let sumOfintegers : number = integer + toAdd ;
  console.log("integer", sumOfintegers);

  integer += 1 ;
}
*/
/*
                      //Problem 04
//- Write a program that uses a while loop to print the first 10 even numbers.
let firstNumbers : number = 1 ;
let toAdd : number = 1 ;
while(firstNumbers < 10){
  let firstEven : number = firstNumbers + toAdd ;
  console.log(firstEven);
  
  firstNumbers += 2
}
*/
/*
                      //Problem 05
//- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function calculateFactorial(integerNum : number) : number{
  if(integerNum < 0){
  console.log("IntegerNum is Negative");

  return -1 ;
  }

  let factorialNum : number = 1 ;
  let currentNumber: number = 1 ;

  while(currentNumber <= integerNum){
    factorialNum *= currentNumber ;

    currentNumber ++ ;
  }
  return factorialNum ;
}
let integerNum : number = 5;
let result : number = calculateFactorial(integerNum);
console.log(result);
*/
/*
                       //Problem 06
//- Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
function removeNegativeNum(array : number[]): number[]{
        //Check if statement is not equal to zero
  //return array.filter(number => number != 0) ;
        //Check if statement is smaller than 0
  return array.filter(number => number >= 0) ;

        //Check if statement is grater than 0
  //return array.filter(number => number <= 0) ;
}
let arrayNum : number[] = [10,12,14,-10,19,-19] ;
let result :number[] = removeNegativeNum(arrayNum) ;

console.log(result);
*/
/*
                            //problem 07
//- Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.

function calculateSum(arrayToSum : number[]):number{
  let sum : number = 0 ;
  let index : number = 0 ;

  while(index < arrayToSum.length){
    sum += arrayToSum[index] ;
    
    index++
}
  return sum ;
}
let arrayNum : number[] = [10,15,20,25,30] ;
let result : number = calculateSum(arrayNum) ;
console.log(result);
*/
/*
//- Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.

function convertCalciusToFarenhite(calsius : number) : number{
  return (calsius * 9 / 5) + 32 ;
}

let calsiusToCalculate : number[] = [16,32,44] ;
let calculatedFarenhite : number[] = [];

let index = 0 ;
while(index < calsiusToCalculate.length){
  let calsius = calsiusToCalculate[index] ;
  let Fahrenheit = convertCalciusToFarenhite(calsius) ;

  calculatedFarenhite.push(Fahrenheit)
  index++
}

console.log(calsiusToCalculate);
console.log(calculatedFarenhite);
*/
