"use strict";
/*
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
/*
//- Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
let myCart : any[] = ["Apple" , "Grapes","Orange" , "Dates" ," PineApple"] ;

 {
  function addItems(array : any[], index : number, toAdd : any[]):any[]{
  array.splice(index , 0 ,...toAdd ) ;

  return array;
}
// let myCart : any[] = ["Apple" , "Grapes","Orange" , "Dates" ," PineApple"] ;
let myindex: number = 3 ;
let addValue: string[] =  ["Mango"] ;
let result : any[] = addItems(myCart,myindex , addValue);
console.log(result);
 }
{
  function shoppingCart(array:any[] , index : number , toDelete2:number){
    array.splice(myIndex , toDelete2Value ) ;

    return array ;
  }

  
  let myIndex = 2 ;
  let toDelete2Value = 1 ;
  let result2 : any[] = shoppingCart(myCart ,myIndex , toDelete2Value) ;
  console.log(result2);
}
{
let myCart : any[]=[
  { item : "Apple", quantity : 3} ,
  { item : "orange", quantity : 3} ,
  { item : "Grapes", quantity : 3} ,
  { item : "Mango", quantity : 3} ,
  { item : "Dates", quantity : 3} ,
  { item : "PineApple", quantity : 3} ,
]
  function updateQuantity(array : any[] , updates : {myIndex : number , newQuantity:number}[]): any[]{
    //array.splice(myIndex , toDelete , addQuantity) ;
      updates.forEach((update)=>{
      const {myIndex , newQuantity} = update;
    if(myIndex >= 0 && myIndex < array.length ){
      array[myIndex].quantity = newQuantity ;
    }
    else{
      console.log("Invalid Index");
    }
    })
    return array ;
  }
  //let myIndex = 2 ;
  //let newQuantity = 3 ; //myIndex and newQuantity use for update single item quantity.
     
  let updates = [
    {myIndex : 2 , newQuantity : 5},
    {myIndex : 4 , newQuantity : 8},
  ]
  let updateCart : any[] = updateQuantity(myCart, updates) ;

  console.log(updateCart);
  
}
*/
/*
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
//- Write a program that uses a while loop to print the first 10 even numbers.
let firstNumbers : number = 1 ;
let toAdd : number = 1 ;
while(firstNumbers < 10){
  let firstEven : number = firstNumbers + toAdd ;
  console.log(firstEven);
  
  firstNumbers += 2
}
*/
//- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function forFactorial(integer) {
    if (integer < 0) {
        console.log("Intrger must be positive");
        return -1;
    }
    let factorialNum = 1;
    let currentNumber = 1;
    while (currentNumber <= integer) {
        factorialNum *= currentNumber;
        currentNumber++;
    }
    return factorialNum;
}
let integerNum = 4;
//let factorialNum : number = 1 ;
let result = forFactorial(integerNum);
console.log(result);
// function calculateFactorial(number: number): number {
//   if (number < 0) {
//     throw new Error("Input must be a positive integer.");
//   }
//   let factorial = 1;
//   let currentNumber = 1;
//   while (currentNumber <= number) {
//     factorial *= currentNumber;
//     currentNumber++;
//   }
//   return factorial;
// }
// // // Example usage:
//  const inputNumber = 5;
//  const factorialResult = calculateFactorial(inputNumber);
//  console.log(`Factorial of ${inputNumber} is: ${factorialResult}`);
