/*
//- Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

   //Convert Calsius To Farenhite:
var Calsius: number = 16 ;
  // formula (Calcius * 9 / 5) + 32:
var result: number = (16 * 9 / 5) + 32 ;
//console.log(result) ;

   //Convert Farenhite to celcius:
  var Farenhite: number = 98;
   // formula (Farenhite -32) * 5 / 9 ;
var result1 : number = (60.8 - 32) * 5 / 9 ;
//console.log(result1);

if(result1 == 16 ||  result == 60.8 ){
      console.log("true") ;
}

else if(result1 > 16 && result > 60.8){
     console.log("false");
     
}

else{ 
   console.log("Statement not true") ;
}
*/
/*
//  - Write a program that calculates the percentage.
   // calculate percentage of student marks:

var totalMarks: number = 1100 ; 
var obtainedMarks: number = 789 ;
  // formula is : (obtainedMarks / totalMarks) * 100 ;

var result : number = (789 / 1100) *100 ;
console.log(`${Math.floor (result) }`);

if( result >= 80 ){
  console.log("Grade: A+");
  
}
else if(result < 80 && result >= 70){
  console.log("Grade: A");
  
}
else if(result < 70 && result >= 60){
  console.log("Grade: B");
  
}
else{
  console.log("Grade: C");
  
}
*/
/*
//- Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var givenDays: number = 345 ;
var calculateIntoWeeks : number = Math.floor(345 / 7) ;
var calculateIntoDays : number = 345 % 7 ;
console.log(`345 days = ${calculateIntoWeeks} Weeks and ${calculateIntoDays} Days`);
*/

/*
//- Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

var productPrice:number= -345 ; // price in Dollar  , And it will not work on -ve price .

var discount :number= productPrice * (10 / 100);


if(productPrice >= 100 )// in dollar 
{
  var discountedPrice : number = productPrice - discount
  console.log("if:   Discount offer: 10%");
  
}
else if(productPrice > 0 && productPrice <= 99)// in dollar 
{
  console.log("Discount offer: 5%");
  
}
else{
  console.log("Error");
  
} 
*/

/*
//- Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

var age: number = 16
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
var temperature: number= -55;

if(temperature <=  5 ){
  console.log("Its Extremely cold, you should wear hot clothes");
  
}
else if(temperature > 5 && temperature <= 15 ){
  console.log("its cold, You should wear hot clothes ");
  
}
else if(temperature > 15 && temperature <= 25){
  console.log("its slightly cold, you should wear slightly hot clothes");
  
}
else{
  console.log("its normal you can wear normal clothes");
  
}
*/
/*
 // 3)  - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var givenDays: number = 345 ;
var convertIntoWeek: number = Math.floor(345/7) ;
var convertIntodays: number = 345 % 7 ;

console.log(`345 days = ${convertIntoWeek} Weeks and ${convertIntodays} Days`);

*/





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
var year:number= 2001;

if(year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
  console.log("The year will be leap year");
  
}
else{
  console.log("Year will not leap year");
  
}
var year2:number=2020;
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
var units:number= -17;
var priceOfunit: number = 40 ;
 var calculated:number= (units * priceOfunit) ;  

if( units >= 0 && units <= 100){
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
  var billCalculation: number =calculated+(15/100)*calculated ; 
  console.log(`Total units consumed ${units} and total bill with 25% tax: ${billCalculation}`);
  
}
else{
  var billCalculation: number = calculated + (35 / 100) * calculated ;
  console.log(`Total units consumed ${units} and total bill with 35% tax: ${billCalculation}`);
}
*/
/*
//- Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var givenDayNum: number= 7;
if(givenDayNum == 1){
  console.log(`Then, Day will selected "Monday" `);
  } 
   else if(givenDayNum == 2){
    console.log("Wednesday");
  }
 else if(givenDayNum == 3){
    console.log("Wednesday");
  } 
  else if(givenDayNum == 4){
    console.log("Thursday");
  }
  else if(givenDayNum == 5){
    console.log("Friday");
    
  }
  else if(givenDayNum == 6){
    console.log("Saturday");
  }
  else if(givenDayNum == 7){
    console.log("Sunday");
  }
  else{
    console.log("Error");
  }
  */
  // -Write a program that calculates the cost of a shopping cart. The cart contains items with their prices, and there's a discount applicable if the total cart value is above a certain threshold. For example, if the cart value is over $100, apply a 10% discount; if it's over $200, apply a 15% discount. Calculate the total cost including any applicable discounts.