"use strict";
//Assignment03 Start
/*
//- Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
       // First 20 Even Numbers
 
let sum : number = 0 ;
let allEvens : number[] = [];
  
for(let index : number = 2 ; index <= 20 ; index += 2){
     sum += index ;
    allEvens.push(index)
    
}
console.log("Sum of all Even Numbers", sum);
console.log("All Even Numbers" , allEvens);
*/
/*
//- Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let arrayOfNum : number[] = [11,12,13,14,15,16,17,18,19,20] ;
let sepratedEvenNum : number[] = [] ;
for(let index = 0 ; index <= arrayOfNum.length; index++){
    if(arrayOfNum[index] % 2 == 0){
        sepratedEvenNum.push(arrayOfNum[index])
    
    }
}
console.log("Seprate Even Numbers",sepratedEvenNum);
*/
/*
//- Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let arrayOfNum : number[] = [21,22,23,24,25,26,27,28,29,30] ;
let sepratedOddNum : number[] = [] ;
for(let index = 0 ; index <= arrayOfNum.length; index++){
    if(arrayOfNum[index] % 2 != 0){
        sepratedOddNum.push(arrayOfNum[index])
        
        
    }
}
console.log("Seprated odd numbers:",sepratedOddNum);
*/
/*
//- Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function toCalculateAreaOfCircle(radius : number){
    let pi : number = 3.14159 ;
    let area : number = pi * radius * radius ;
    return area ;
    
}
let radiusNum : number = 44 ;
console.log("Radius :",radiusNum);

console.log("Calculated Area of circle:",toCalculateAreaOfCircle(radiusNum));
*/
/*
//-Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let liOfGrades : number[] = [789,543,563,836,233,445,610] ;
for(let index = liOfGrades.length -1 ; index >= 0 ; index--){
    if(liOfGrades[index] < 550){
        liOfGrades.splice(index,1)
    }
}
console.log("Passed candidates:",liOfGrades);
*/
//- Write a program that uses a function to find the largest element in an array of numbers.
let arrayElement = [12, 13, 14, 16];
function toFindLargestElement(element) {
    let largestNum = element[0];
    for (let index = 1; index < arrayElement.length; index++) {
        if (arrayElement[index] > largestNum) {
            largestNum = element[index];
        }
    }
    return largestNum;
}
let largestElement = toFindLargestElement(arrayElement);
console.log(largestElement);
