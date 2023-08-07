/*
//- Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

   //Convert Calsius To Farenhite:
var Calsius: number = 16 ;
  // formula (Calcius * 9 / 5) - 32:
var result: number = (16 * 9 / 5) + 32 ;
//console.log(result) ;

   //Convert Farenhite to celcius:
  var Farenhite: number = 98;
   // formula (Farenhite -32) * 5 / 9 ;
var result1 : number = (60.8 - 32) * 5 / 9 ;
//console.log(result);

if(result1 == 16 &&  result == 60.8 ){
      console.log("true") ;
}

else if(result1 > 16 && result > 60.8){
     console.log("false");
     
}

else{ 
   console.log("Statement not true") ;
}
*/

//  - Write a program that calculates the percentage.
   // calculate percentage of student marks:
/*
var totalMarks: number = 1100 ;
var obtainedMarks: number = 789 ;
  // formula is : (obtainedMarks / totalMarks) * 100 ;

var result: number = (789 / 1100) * 100 ;
console.log(result);
if( result >80){
  console.log("Grade: A+");
  
}
else if(result > 70 ){
  console.log("Grade: A");
  
}
else if(result <70 && result>60){
  console.log("Grade: B");
  
}
else{
  console.log("Grade: C");
  
}
*/
/*
//- Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var days :number = 180 ;
var daysOfWeek : number = 7 ;
   // -formula : days / days of week ;
var result: number = 180 / 7 ;

if(result = 25.714){
  console.log("180 days = 25 Weeks and 5 days");
  
}
else{
  console.log("Wrong");
  
}
*/
/*
//- Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var productPrice:string= "$123" ;


if(productPrice > "$100" ){
  console.log("if:   Discount offer: 10%");
  
}
else if(productPrice < "$100"){
  console.log("Discount offer: 5%");
  
}
else{
  console.log("Undefined");
  
}
 
switch (productPrice) {
  case "$180 <= $150 ":
    console.log(" Switch:   Offer Discount : 10%");
    
    break;
  case "$120 >= $149":
    console.log("Offer Discount : 7%");
    break;
  case "$80":
    console.log("Offer Discount : 5%");
      
  default:
    console.log("Offer Discount : 5%");
    
    break;
}
*/
/*
//- Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

var age: number = 0
if(age >=0 && age <= 12){
  console.log("Print: Child");
  
}
else if(age >=13 && age <= 19){
  console.log("Print: Teen ager");
  
}
else{
  console.log("Print: Adult");
  
}
*/
/*
//- Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature: number=22 ;
if(temperature <= 5 ){
  console.log("Its Extreme cold, you should wear Too hot clothes");
  
}
else if(temperature <= 15 ){
  console.log("its cold, You should wear hot clothes ");
  
}
else if(temperature <= 25){
  console.log("its slightly cold, you should wear slightly hot clothes");
  
}
else{
  console.log("its normal you can wear normal clothes");
  
}
*/
/*
 // 3)  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

 var getDays:number = 45
 var convertIntoWeek:number = Math.floor(getDays/7)
 var convertIntodays:number = getDays%7
 console.log(`${convertIntoWeek} Weeks and ${convertIntodays} days`);*/
 /*
 //- Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly ;
var value : number = 61 ;
if(value % 3 == 0 && value % 5 == 0){
  console.log("its divisible on both 3 & 5");
  
}

else if(value % 3 == 0){
  console.log("Its divisble on 3");
  
}

else if(value % 5 == 0){
  console.log("Its divisble on 5");
  
}

else{
  console.log("Its not Divisible");
  
}
*/
/*
// - Write a program that checks if the given year is leap year or not.
var year:number= 2000;
var year2:number=2020;
if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
  console.log("The year will be leap year");
  
}
else{
  console.log("Year will not leap year");
  
}
if(year2 % 4 == 0 && year2 % 100 != 0 && year2 % 400 != 0){
  console.log("It will also Leap Year");
  
}
else{
  console.log("Else it will not");
  
}
*/
/*
// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var givenDayNum: number= 0 ;
switch (givenDayNum) {
  case 1:
    console.log("no 1: Monday");
    
    break;
    case 2 :
      console.log("no 2:Tuesday");
      break;
  case 3 :
    console.log("no 3: Wednesday");
    break;
    case 4 :
      console.log("no 4: Thursday");
      break;
      case 5 :
      console.log("no 5: Friday");
      break;
      case 6:
      console.log("no 6: Saturday");
      break;
      case 7  :
      console.log("no 7: Sunday");
      break;
      default:
        console.log("No day selected");
        break;
    
}
*/
/*
// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//Where the tax amount will be calculated by the amount of bill.
var units:number= 556;
var priceOfunit: number = 40 ;
 var calculated:number= (units * priceOfunit) ;
if(units >= 0 && units <= 100 ){
  // formula to add tax
  var billCalculation: number = calculated + (10 / 100) * calculated ;
  console.log(`Total units Consumed: ${units} and total bill with 10% tax:${billCalculation}`);
}

else if(units > 100 && units <= 200 ){
  // formula to add tax
  var billCalculation: number = calculated+(15/100)*calculated ;
  console.log(`Total units consumed: ${units} and total bill with 15% tax: ${billCalculation}`);
  
}
else if(units > 200 && units <= 500){
  var billCalculation: number = calculated + (25 / 100) * calculated ;
  console.log(`Total units consumed ${units} and total bill with 25% tax: ${billCalculation}`);
  
}
else{
  var billCalculation: number = calculated + (35 / 100) * calculated ;
  console.log(`Total units consumed ${units} and total bill with 35% tax: ${billCalculation}`);
}
*/