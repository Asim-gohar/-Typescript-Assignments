"use strict";
// <==  Assignment Start ==>
/*
                    // Problem 01
//-Write a program that uses filter to remove all negative numbers from an array of numbers
let array : number[] = [-100,2,-300,1000,6,-1,5] ;

let removeNegativeNum = ()=>{
    array = array.filter(element => {
        if(element >= 0){
            return element ;
        }
    })
}
removeNegativeNum() ;
console.log(array);
*/
//Problem 02
/*
//-Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

let array : number[] =[1 , 2, 3, 4, 5, 6, 7, 100] ;

let multplyArray = ()=>{
    array = array.map(element =>{
        return element*2
    })
}
multplyArray()
console.log(array);
*/
//Problem 03
/*
//-Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let array : string[] = ["apple", "banana", "cherry", "date", "grape"] ;
let updateArray = () => {
    array=array.filter(element=>{
        if(element.length > 5){
            return element ;
    }
      })
     return array
}
updateArray() ;
console.log(array);
*/
// Problem 04
/*
//-Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let array : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,20] ;

let updateArray = () => {
    array = array.filter(elements => elements % 2 == 0)
                     .map(evenElements => evenElements * evenElements)
}
updateArray() ;
console.log(array);
*/
//problem 05
/*
//-Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let arrayOfTemp: number[] = [0, 10, 20, 30, 40] ;

let convertedInFarenhite = () => {
   arrayOfTemp = arrayOfTemp.map(temp => (temp * 9/5) + 32 )
}
convertedInFarenhite() ;
console.log(arrayOfTemp);
*/
//Problem 06
/*
//-Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let arrayOfNum : number[] = [3, 6, 9, 12, 15, 18] ;

let updateOddNum = () =>{
    arrayOfNum = arrayOfNum.filter(arrayNums => arrayNums % 2 !== 0)
                           .map(oddNum => oddNum * oddNum)
}
updateOddNum() ;
console.log(arrayOfNum);
*/
//Problem 07
//-Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let arrayOfNames = ["Alice", "Bob", "Charlie", "David", "Emily"];
arrayOfNames.forEach(names => {
    console.log([`${names}!`]);
});
