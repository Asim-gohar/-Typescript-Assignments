                            /* Assignment Exercise */
/*                  
                        //Problem 02         
//-Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var message : string = "“Hello Eric, would you like to learn some Python today?"
console.log("Message =>",message);
*/
                                  //Problem 03 
/*
//-Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let userName : string = "asim gohar butt"
console.log(userName.charAt(0).toUpperCase() + userName.slice(1));
console.log(userName.charAt(0).toLowerCase() + userName.slice(1));
               //=> For Title Case
let words :string[] = userName.split(" ")
for(let index = 0 ; index < words.length ; index++){
  words[index] = words[index].charAt(0).toUpperCase() + words[index].slice(1).toLowerCase() ;

}
let titlecase : string = words.join(" ") ;
console.log(titlecase);
*/
                            //Problem 04
/*
//-Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let personName : string = "Thomas Jefferson" ;
let quote : string = "If you want something you never had, you have to do something you've never done" ;

console.log(` ${personName} once said, "${quote}".`);
*/
                                //Problem 05
/*
//-Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person : string = "Winston S. Churchill" ;
let message : string = "Success is not final; failure is not fatal: It is the courage to continue that counts"

console.log(`${famous_person} once said , "${message}".`);
*/
                                  //Problem 06
/*
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = "\tAsim\tGohar\t" ;
let stripped = "\nline 1\nline 2\nline 3\nline 4"
console.log(personName,stripped);
*/
                                    //Problem 07
/*
//-Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
let atrthimeticProblem : string = "Use arthimetic operator to print output 8" ;

let arthimeticNumber : number = 30 ;
let toSubtract : number = 30 - 22 ;
console.log(`Substraction > ${toSubtract}`);

let arthimeticNumber2 : number = 4 ;
let toSum : number = arthimeticNumber2 + 4 ;
console.log(`SUM > ${toSum}`);

let arthimeticNumber3 : number = 2 ;
let toMultiply : number = arthimeticNumber3 ** 3 ;
console.log(`Multiplication > ${toMultiply}`);

let arthimeticNumber4 : number = 32 ;
let toDevide :number = arthimeticNumber4 / 4 ;
console.log(`Divide > ${toDevide}`);
*/
                                //Problem 08
/*
//-You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
console.log(2 ** 3);
console.log(2+6);
console.log(10-2);
console.log(32 / 4);
*/
                                   //Problem 09
/*
//-Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber : number = 3 ;
let message : string = `My favourite number is ${favoriteNumber}, Because its my lucky Number `
console.log(message);
*/
                                   //Problem 10
/*
//-Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Example 01
let personName : string = "\tAsim\tGohar\t" ; // this variable add space at the start ,middle and end of person's name 
let stripped : string = "\nParagraph \nQuote \ntext \nMessage " ; // This variable add new line after every tag /n.
console.log(personName,stripped);

// Example 02
console.log(2 * 3); //This store Multiplication of Numbers
console.log(2+6);  // This store sum of Numbers
console.log(10-2); // This store substract of Numbers
console.log(32 / 4); //This store division of Numbers
*/
                                  //Problem 11
/*
//-Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let namesArray : string[] = ["Ali" , "Usman" , "Ahmad" , "Adnan" , "Taha"] ;
for(let index = 0; index < namesArray.length ; index++){
   let friendsName = namesArray[index]
   console.log(friendsName);
   }
*/
                                 //Problem 12
/*
//-Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let namesArray : string[] = ["Ali" , "Usman" , "Ahmad" , "Adnan" , "Taha"] ;
//for(let index = 0; index < namesArray.length ; index++){
   //let friendsName: any = namesArray[index]
   namesArray.forEach((elem: string) =>{ let greetings : string= `Hello , Good Morning "${elem}" ` ;
   console.log(greetings);
})
*/
                                //Problem 13
/*
//-your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
type transportationTypes =  {company : string , model : string, cc : number} ;
var favoriteTransports : transportationTypes[] = [{
  company :"Honda" ,
  model : "Civic" ,
  cc : 1000 

},{
  company : "Suzuki" ,
  model : "Wegonr",
  cc: 1500 
},{
  company : "United" ,
  model : "One two five" ,
  cc : 250 
}] ;

for(let index = 0 ; index < favoriteTransports.length ; index++){
  
  let vhical = favoriteTransports[index] ;
    if( vhical.company == "Honda"){
      console.log(`'I want to own ${vhical.company} "${vhical.model}" car'`);
    }
    if(vhical.company == "Suzuki"){
      console.log(`'I want to own ${vhical.company} "${vhical.model}" car'`);
    }
    if(vhical.company == "United"){
      console.log(`'I want to own ${vhical.company} "${vhical.model}" Bike'`); 
    }    
  } 
*/
/*
                                     //Problem 14
//-Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let liOfGuests : string[] = ["Adnan" , "Ahmad" , "Taha" , "Usama"] ;
liOfGuests.forEach(elem => {
  console.log(`Dear ${elem} , This year i decided to celebrate my birthday socially. So, It would be honoured to have your presence.\nDate: 31 Aug,2023 \nTime: 10:00 pm \nLocation: At my Home `);
  
}) 
*/
/*
                            //Problem 15

// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let liOfGuests : string[] = ["Adnan" , "Ahmad" , "Taha" , "Usama"] ;
console.log(liOfGuests);

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

liOfGuests.forEach(elem => {
  console.log(`Dear ${elem} , This year i decided to celebrate my birthday socially. So, It would be honoured to have your presence.\nDate: 31 Aug,2023 \nTime: 10:00 pm \nLocation: At my Home `);
  
  if(elem === "Usama")
    
      console.log(`${liOfGuests},Usama can't make this lunch`);
       
})

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//let liOfGuests1 : string[] = ["Adnan" , "Ahmad" , "Taha" , "Usama"] ;
liOfGuests.splice(3,1,"Shehroz")
console.log(liOfGuests);
// • Print a second set of invitation messages, one for each person who is still in your list.
liOfGuests.forEach(guests => {
  console.log(`Dear ${guests}, I decided this year to celebrate my birthday socially. so, It would be honoured to have your precence on a special day of my life.\nDate: 31 Aug,2023 \nTime: 10:00 pm \nLocation: At my Home `);
  
})
*/
/*
                             // PROBLEM 15 HAS FINISHED AND NOW ITS USING IN PROBLEM 16
                             //Problem 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let previousLiGuests : string[]= [ "Adnan", "Ahmad", "Taha", "Shehroz"]
previousLiGuests.splice(4,0,"Ali","Atif") ;
console.log(`Dear [${previousLiGuests}], Great news! We found a bigger dinner table.`);

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let newGuest : string[] = [previousLiGuests[4] , previousLiGuests[5]];
//let newGuest2 : string = liOfGuests[5] ;
//let result : string = newGuest1.concat(newGuest2);
newGuest.forEach((newMembers: any) => {
  console.log(`Dear ${newMembers}, I decided this year to celebrate my birthday socially. so, It would be honoured to have your precence on a special day of my life.\nDate: 31 Aug,2023 \nTime: 10:00 pm \nLocation: At my Home `);
  
});


// • Add one new guest to the beginning of your array.
previousLiGuests.splice(0,0,"Umair Butt") ;
console.log(previousLiGuests);


// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
          //Added new guest in middle
let middleIndex : number = Math.floor(previousLiGuests.length / 2) ;
previousLiGuests.splice(middleIndex,0,"Khurram butt") ;
console.log(previousLiGuests);
          //Added new guest at the end of array
previousLiGuests.push("Asim Butt")
console.log(previousLiGuests);
           //Printed a message for updated array
previousLiGuests.forEach(allGuests =>{
  console.log(`Dear [${allGuests}], I decided this year to celebrate my birthday socially. so, It would be honoured to have your precence on a special day of my life.\nDate: 31 Aug,2023 \nTime: 10:00 pm \nLocation: At my Home `);
  
})
*/
/*
                            //Problem 17

// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let guestsList : string[] = ['Umar Butt','Adnan','Ahmad','Khurram butt','Taha','Shehroz','Ali','Atif','Asim Butt'] ;
console.log(`Dear [${guestsList}], Sorry , The Dinner table won't arrive ontime, I apologies to cancle our dinner.`);

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I can invite only two peoples for dinner");

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

while(guestsList.length > 2){
  //guestsList.forEach((removeGuests:any) =>{
         let removeGuests = guestsList.pop()
        
          console.log(`Dear ${removeGuests}, "Iam sorry i can't invite you on dinner"`);
  
}
console.log(guestsList);
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guestsList.forEach(stilliedGuests => {
  console.log(`Dear ${stilliedGuests}, "Congratulations , you are  still invited", Be ready on \nDate:31 Aug,2023\nTime: 10:00 pm \nLocation: At my Home.`);
})
//console.log(`Dear ${guestsList}, "Congratulations , you are  still invited".`);

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
while(guestsList.length = 0){
 let emptyList = guestsList.pop()
 console.log(emptyList);
 
}
console.log(`Now, its empty${guestsList}`);
*/
/*
                //problem 18

// Seeing the World: Think of at least five places in the world you’d like to visit.
let dreamPlaces : string[] = ["Great wall of China","K2 Mountain","Twin tower","Blue Mosque","Egypt Ahram"] ;
console.log(dreamPlaces);

//• Store the locations in a array. Make sure the array is not in alphabetical order.
let originalArray = dreamPlaces.slice().sort() ;

console.log(originalArray);

// • Print your array in its original order.
console.log(`Original Order:\n \t[${dreamPlaces}]`);


// • Print your array in alphabetical order without modifying the actual list.
let sortedArray = dreamPlaces.slice().sort() ;
console.log(` Alphabetical Order:\n \t[${sortedArray}]`);


// • Show that your array is still in its original order by printing it.
console.log(`Original Array :\n \t[${dreamPlaces}]`);

// • Print your array in reverse alphabetical order without changing the order of the original list.
let reversedAlphabetically = dreamPlaces.slice().sort().reverse() ;
console.log(`Reversed Alphabetically : \n \t[${reversedAlphabetically}]`);

// • Show that your array is still in its original order by printing it again.
console.log(`Again in original order: \n \t[${dreamPlaces}]`);

// • Reverse the order of your list. Print the array to show that its order has changed.

dreamPlaces.reverse()

console.log(`Reverse order of list : \n \t[${dreamPlaces}]`);



// • Reverse the order of your list again. Print the list to show it’s back to its original order.

dreamPlaces.reverse()
console.log(`Again reverse Order List: \n \t[${dreamPlaces}]`);


// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
dreamPlaces.sort() ;
console.log(`Sorted in Alphabetical order: \n \t[${dreamPlaces}]`);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
dreamPlaces.sort().reverse() ;
console.log(`Sorted in Reverse Alphabetical order :\n \t [${dreamPlaces}] `);
*/
/*
                            //Problem 19
                          
//-Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let liOfGuests : string[] = ["Adnan" , "Ahmad" , "Taha" , "Usama"] ;
let numOfPeoples = liOfGuests.length

console.log(`Iam inviting ${numOfPeoples} peoples on Dinner,`);
*/
/*
                //Problem 20
               
//-Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let countries : string[] = ["Japan","Pakistan","South Korea","India","Malasiya","Indonesia","America","Russia","China","Italy","Saudi Arabia"] ;
for(let i = 0 ;i < countries.length ; i++){
  let countriesList = countries[i] ;
  console.log(`Country Name : "${countriesList}"`);
}  
*/
/*
                             // Problem 21                            
//-They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
type MobilePhonesType = {Company : string , model : any , memory : any , Battery : any , price : number} ;
let mobilePhones : MobilePhonesType[]= [
{
 Company : "Apple" ,
 model : "Iphone X" ,
 memory : "16gb ram , 500gb rom" ,
 Battery : "5000 mAh" ,
 price : 100000 
} ,
 {
  Company : "Samsung" ,
  model : "A32" ,
  memory : "6gb ram , 128gb rom" ,
  Battery : "5320 mAh" ,
  price : 37000
}  ,
{
  Company : "Oppo" ,
  model : "Reno 8" ,
  memory : "8gb ram , 256gb rom" ,
  Battery : "5000 mAh" ,
  price : 79000
} ,
 {
  Company : "Vivo" ,
  model : "V25" ,
  memory : "16gb ram , 556gb rom" ,
  Battery : "6000 mAh" ,
  price : 105000 
}  ,
 {
  Company : "infinix" ,
  model : "Hot 10 Play" ,
  memory : "4gb ram , 128gb rom" ,
  Battery : "3000 mAh" ,
  price : 22000
}]
for(let i = 0 ; i < mobilePhones.length ; i++){
  console.log(mobilePhones[i]);
  
}
*/
                            //Problem 22
/*
//-Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
            //Problem To received and solve error
//- Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let sum = 0;
for(let i = 0; i <= 20 ; i++){
  // let sum = 0;
  if(i % 2 == 0){
   sum += i 
  
    }   
}
console.log(sum);
                      // Its another problem
//- Write a program that uses a for loop to print the first 25 integers.
 for(let i = 1; i <= 25 ; i++){
  console.log(i);
}                   
*/  
/*                   
                                   // Problem 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
   
                      //Test 01

let age : number = 17 ;
console.log(`Is Age >= 18 ? I predict its "False"`);

if(age >= 18){
  console.log(`Eligible for vote :`,"true");
}
else{
  console.log(`Eligible for vote :`,"False");
}
*/
/*
                        //Test 02
//-Implement a programe that describe Part of life going according to age .
let age : number = 56 ;
console.log(`if age == 56 , I predict Older`);
if(age > 0 && age <= 12){
  console.log("Child"); 
}               
else if(age > 12 && age <= 21){
  console.log("Younger"); 
}
else if(age > 21 && age <= 40){
  console.log("Adult"); 
}
else if(age > 40 && age <= 50){
  console.log("Senior citizen");
}
else{
  console.log("Older") ; 
} */
                                  //Test 03
/*
//-Write a programme to check if given number prime number.
console.log("It will show false");

let integerNum : number = 12 ;
function isPrimeNum(integer : number):boolean{
  if(integerNum <= 1){
    return false ;
  }
  for(let i = 0 ; i * i <= integer ; i++){
    if(integer % 2 == 0){
      return false
    }
    
  }
  return true ;
}
let result : boolean = isPrimeNum(integerNum) ;
console.log(result);
*/
/*
                           //test 04
//-Think a random number and input some true or false condition.
let num : number = 100 ;
if(num > 70){
  console.log(true);
  
}
else{
  console.log(false);
}  */
/*
                       //Test 05
let num : number = 1 ;
//function isPrimeNum(integer : number):boolean{ 
if(num<= 1){
  console.log(false);
    
} 
else{ 
 let isPrime = true ; 

for(let i = 2 ; i *  i <= num ; i++){
 if(num % i === 0){
    isPrime = false ;
   break ;
 } 
}

if(isPrime){
 console.log(true);
 
}
else{
 console.log(false);
 
}
}
*/   /*
                            //test 06
//- Check if a value is a string:
function isString(value : any):boolean{
  return typeof value == "string" ;
}
// let userName : string = "Asim butt"
// let 
console.log(isString("AsimButt"));
console.log(isString(123));
*/ /*
                   //test 07
//-Check if a number is negative:
function isNegative(value : number):boolean{
  return value < 0 ;
}
console.log(isNegative(-100));
console.log(isNegative(100));
*/  /*
                     //Task 8
//-Your task is to implement a function that counts the number of unique elements in the array.
function numOfUnique(value : number[]){
  let uniqueElements = new Set(value) ;
  return uniqueElements.size < 5;
}
let array : number[] = [1,2,2,3,4,5,5] ;
console.log(numOfUnique(array));
*/   /*
                      //Task 09
//Check if its statement is null :
let statement:null = null ;
console.log(`I predict true`);

if(statement == null){
  console.log(true); // I predict true
  
} else{
  console.log(false);
  
}
*/
/*
                             //Task 10
//Check if statement is false
let yearOfBirth : number = 2003 ;
if(yearOfBirth <= 2000){
  console.log(true);
  
}else{
  console.log(false);
  
}
*/ 
/*
                              //Problem 24                                         
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let spellingOfWord : string = "Window" ;
console.log("I predict false");
             //Inequality Test
if(spellingOfWord != "window"){
  console.log(false);
  
}
else{
  console.log(true);
  
};
               //Equality Test
if(spellingOfWord == "Window"){
  console.log(true);
}                   
else{
  console.log(false);
  
}           
// • Tests using the lower case function
let testStatement1 : string = "asim gohar butt" ;
          
function checkLowerCase(inputString : string):boolean{
  
  return inputString === inputString.toLowerCase() ;
} ;
               //To check true statement
console.log("I predict true");
console.log(checkLowerCase(testStatement1));
               //To check false statement
let testStatement2 : string = "Asim gohar butt" ;
console.log("I predict false");
console.log(checkLowerCase(testStatement2));
*/  /*
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let Num :number = 29 ;
function checkNumCondition(value : number){
   if(value > 1 && value < 30){
    return true
   }
   if(value > 1 && value <= 29){
    return true ;
   }
   if(value <= 29){
    return true
   }
   return false
}
console.log("In statement 1, I predict true");
console.log(checkNumCondition(Num));

let Num2 : number = 39 ;
console.log("In statement 2, I predict false");
console.log(checkNumCondition(Num2));
 */    /*                   
// • Tests using "and" and "or" operators 
let userName : string = "Asim gohar";
                  // Test OR condition
console.log(`I predict "true" for OR condition`);                  
if(userName.includes("Asim") || userName.includes("butt")){
  console.log(true);
  
}
else{
  console.log(false);
  
}
                   // Test And condition
console.log(`I predict "False" for And condition`);
                   
if(userName.includes("Asim") && userName.includes("Butt")){
  console.log(true);
  
}                   
else{
  console.log(false);
  
}
*/  /*
// • Test whether an item is in a array
let array : string[] = ["Laptop" , "Charger" , "AirBuds" , "Bag"] ;
console.log(`I predict "true" for Bag`);

if(array.includes("Bag")){
  console.log(true);
  
}
else{
  console.log(false);
  
}  */      /*                            
// • Test whether an item is not in a array
console.log(`I predict "True" for arrayOfItems:`);

let arrayOfItems : string[] = ["Laptop" , "Charger" , "AirBuds" , "Bag"] ;
if(!arrayOfItems.includes("Apple")){
  console.log(true);
  
}
if(!arrayOfItems.includes("Laptop")){
  console.log(false);
  
}   */
 /*
                                //problem 25
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color : string[] = ['green', 'yellow', 'red'] ;
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
alien_color.find(elem => {if(elem.includes("green")){
  console.log("Congratulations, You earned 5 points");
  
}   
})                     
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
                    //test 1
if(alien_color.includes("green")){
  console.log("Congratulations, You passed the test and earned 5 points");
  
}            
                    //Test 2
if(alien_color.includes("purple")){
  console.log("Sorry, You fail and have no output");
  
}       */
/*
                                   // Problem 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alien_color2 : string[] = ["Red","Green","Blue","Orange","purple"]
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if(alien_color2.includes("Green")){
  console.log("you earned 5 points for shooting the alien.");
  
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if(!alien_color2.includes("Green")){
  console.log("You earned 10 points.");
  
}
// • Write one version of this program that runs the if block and another that runs the else block.
                    //test 01
if(alien_color2.includes("Green")){
  console.log("Test 01 if block is running");
  
}
else{
  console.log("Test 01 else block is running");
  
} 
                           // test 02
if(alien_color2.includes("Black")){
  console.log("test 02 if block is runninig");
  
}
else{
  console.log("test 02 else block is running");
  
}
*/  
/*   
                                      //problem 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let alien_color3 : string[] = ["green","red","yellow"]
// • If the alien is green, print a message that the player earned 5 points.
if(alien_color3.includes("green")){
  console.log("You earned 5 points");
  
}
// • If the alien is yellow, print a message that the player earned 10 points.
if(alien_color3.includes("yellow")){
  console.log("you earned 10 points.");
  
}
// • If the alien is red, print a message that the player earned 15 points.
if(alien_color3.includes("red")){
  console.log("you earned 15 points.");
  
} 
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/
/*
                                  // Problem 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let personAge : any = 66 ;
// • If the person is less than 2 years old, print a message that the person is a baby.
if(personAge < 2){
      console.log(`The person is "Baby"`);
      
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if(personAge >= 2 && personAge < 4){
  console.log(`The person is "Toddler"`);
  
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if(personAge >= 4 && personAge < 13){
  console.log(`The person is "Kid"`);
  
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if(personAge >= 13 && personAge < 20){
  console.log(`The person is "Teenager`);
  
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if(personAge >= 20 && personAge < 65){
  console.log(`The person is "Adult`);
  
}
// • If the person is age 65 or older, print a message that the person is an elder.
else{
  console.log(`The person is "Elder`);
  
}  
 */  
/*
                              //Problem 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

// • Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits : string[] = ["Mango","Grapes","Orange"] ;

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if(favorite_fruits.includes("Mango")){
  console.log(`I really like "Mango"`);
  
}
if(favorite_fruits.includes("Orange")){
  console.log(`I really like "Orange"`);
  
}
if(favorite_fruits.includes("Grapes")){
  console.log(`I really like "Grapes"`);
  
}          
*/     
/*
                        //Problem 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var userNames : string[] = ["admin","Usman","Umair","Ahmad","Maviya"] ;
for(let i = 0 ; i < userNames.length ; i++){
 let userName = userNames[i] ;
 if(userName == "admin"){
  console.log(`Hello admin, would you like to see a status report?`);
  
 }
 else{
  console.log(`Hello ${userName}, thank you for logging in again.`);
  
 }
} 
*/     
 /*
                               //Problem 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
let users : any[] = []
//let users: string[] = ["admin", "Usman", "Umair", "Ahmad", "Maviya"];
if (users.length == 0) {
  console.log("We need to find some users!");
} 
for(let i = 0 ; i < users.length ; i++){ 
  let user = users[i]

if(user == "admin"){
    console.log("Hello admin, would you like to see a status report?");
    
  }
  else{
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
  
}
*/   
  /*
                              //Problem 32
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users : string[] = ["admin","Usman","Ahmad","Maviya","Khalid"]  ;
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users : string[] = ["Khurram","Usman","Atif"] ;
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
current_users = current_users.map(everyName => everyName.toLowerCase()) ;

for(let i = 0 ; i < new_users.length ; i++){
  let new_user = new_users[i].toLowerCase() ;
  if(current_users.includes(new_user)){
    console.log(`userName "${new_user}" is taken, enter a new username.`);
    
  }
  else{
    console.log(`uesrName "${new_user}" is available`);
    
  }
}
*/   
 /*
                                // Problem 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let ordinalNumbers : number[] = [1,2,3,4,5,6,7,8,9,] ;
for(let i = 0 ; i < ordinalNumbers.length ; i++){ 
  let ordinalNumber = ordinalNumbers[i] ;
if(ordinalNumber == 1){
  console.log(ordinalNumber + "st");
}
else if(ordinalNumber == 2){
  console.log(ordinalNumber + "nd");
  
}
else if(ordinalNumber == 3){
  console.log(ordinalNumber + "rd");
  
}
else if(ordinalNumber == 4){
  console.log(ordinalNumber + "th");
  
}
else if(ordinalNumber == 5){
  console.log(ordinalNumber + "th");
  
}
else if(ordinalNumber == 6){
  console.log(ordinalNumber + "th");
  
}
else if(ordinalNumber == 7){
  console.log(ordinalNumber + "th");
  
}
else if(ordinalNumber == 8){
  console.log(ordinalNumber + "th");
  
}
else if(ordinalNumber == 9){
  console.log(ordinalNumber + "th");
  
}
else{
  console.log("Empty");
  
}
}
*/   /*
                                    // Problem 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// let favorite_Pizzas : string[] = ["Chicken BBQ pizza","Malai Boti pizza","Chicken Fajita"] ;
// for(let i = 0 ; i < favorite_Pizzas.length ; i++){
//   let favorite_Pizza = favorite_Pizzas[i]
//    console.log(favorite_Pizza);
     
// }
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let favorite_Pizzas : string[] = ["Chicken BBQ pizza","Malai Boti pizza","Chicken Fajita"] ;
for(let i = 0 ; i < favorite_Pizzas.length ; i++){
  let favorite_pizza = favorite_Pizzas[i]
   console.log(`favorite_pizza :`);      // used to console single pizza name.
   if(favorite_pizza == "Chicken BBQ pizza"){
    console.log(`(I realy like "${favorite_pizza}" of Fork n Kinves)`);
    
   }
   if(favorite_pizza == "Chicken Fajita"){
    console.log(`(I realy like "${favorite_pizza}" of Pizza Hut)`);
    
   }
   if(favorite_pizza == "Malai Boti pizza"){
    console.log(`(I realy like "${favorite_pizza}" of Fork n Kinves)`);
    
   }
}
console.log(`1:"The Chicken BBQ pizza delights my taste buds with its smoky barbecue sauce, tender chicken, and melted cheese."

2:"Malai Boti pizza brings a creamy twist to pizza night, featuring succulent marinated chicken and a rich malai sauce."

3:"The Chicken Fajita pizza bursts with flavors, combining juicy chicken, colorful bell peppers, and zesty spices for a fiesta in every bite."\n
"I really love pizza"`);
*/    /*
                               //Problem 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animalsName : string[] = ["Cat","Dog","Rabbit"] ;
for(let i = 0 ; i < animalsName.length ; i++){
  let animalName = animalsName[i]
  console.log(`animalName :`);
 if(animalName == "Dog"){
  console.log(`A ${animalName} are known for their loyalty and companionship.`);
  
 } 
 if(animalName == "Cat"){
   console.log(`A ${animalName} is an independent and affectionate companion.`);
   
 }
 if(animalName == "Rabbit"){
  console.log(`A ${animalName} are gentle and social animals that enjoy human company.`);
  
 }
}
console.log("\nAny of these animals would make a great pet");
*/   /*
                      //Problem 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size : string , text : string){

return (`Your ordered size of shirt is "${size}" and message that will print on shirt is "${text}"`)
}
let shirtSize : string = "Large" ;
let message : string = "Apna time aye ga." ;
let result : string = make_shirt(shirtSize,message) ;
console.log(result);
*/      /*
                            //Problem 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size : string ){
  if(size == "  "){
    console.log(`Shirt size is "${defaultSize}" by default with a message "${defaultMessage}"`); 
  }
  else if(size == "Medium"){
    console.log(`Shirt size is "Medium" with a message "Apna Time Ayega"`);
  }
  else if(size == "Small"){
    console.log(`Shirt size is "Small" with a message "I love Pakistan"`);
  }
} 
let defaultMessage : string = "I love typescript" ;
let defaultSize : string = "Large" ;

let shirtSize1 : string = "  "
let shirtSize2 : string = "Medium" ;
let shirtSize3 : string = "Small" ;

console.log(make_shirt(shirtSize1));
console.log(make_shirt(shirtSize2));
console.log(make_shirt(shirtSize3));
*/      /*
                          //Problem 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city : string ,country : string){
  if(country == "Pakistan"){
    console.log(`${city} is in ${default_country}`);
    
  }
  else if(country != "Pakistan"){
    console.log(`${city} is not in a default country`);
       
  }
}
let default_country : string = "Pakistan" ;

console.log(describe_city("Lahore" , default_country));
console.log(describe_city("Peshawer" , default_country));
console.log(describe_city("New York" , "USA"));
*/      /*
                                 //Problem 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city : string , country : string){
  return` "${city}, ${country}"` ;
  
}
console.log(city_country("Faisalabad" , "Pakistan"));
console.log(city_country("Istanbul" , "Turkey"));
console.log(city_country("New York" , "USA"));
*/     /*
                          //Problem 40
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object.
// Make at least one new function call that includes the number of tracks on an album.


function make_album(artist_name : string , album_title : string){
  let album = {
    artist_name ,
    album_title
  }
  console.log(album); // to return object
  
}
make_album("Jubin Nautiyal" , "Bol kaffara")

// To return more than one dictionary
function makeAlbum(artist_name : string , album_title : string , tracks : number){
  let album : any = {
    artist_name ,
    album_title
  } 
  if(tracks !== undefined){
    album.tracks = tracks
  }
return album ;
}
console.log("New dictionaries");

console.log(makeAlbum("Atif Aslam" , "Meri khani" , 2));
console.log(makeAlbum("Taylor Swift", "Fearless (Taylor's Version)", 27));
*/      /*
                             //Problem 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magician_names : string[]){
  for(let i = 0 ; i < magician_names.length ; i++){
   console.log(magician_names[i] );
  
    
  }
  
}
let worlds_megician : string[] = ["David Blaine","Dynamo","Criss Angel","Derren Brown"]
console.log(show_magicians(worlds_megician));
*/   /*
                                //Programe 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

//Previous Prgramme
function show_magicians(magician_names : string[]){
  for(let i = 0 ; i < magician_names.length ; i++){
   console.log(magician_names[i] );
    
  }
 return magician_names ; //Used to get magicians name in the array
}
let worlds_megician : string[] = ["David Blaine","Dynamo","Criss Angel","Derren Brown"]
console.log(show_magicians(worlds_megician)) ;

//Start further next
function make_great(array : any[]){
  
  array.forEach((element) => element= console.log(`The Great to "${element}"`) )
  return array ; //Used to get magicians name in the array
}    
console.log(make_great(worlds_megician)) ;
*/   /*
                                    //Problem 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_great(magician_names : any[]){
magician_names.forEach(element => {element = console.log(`Great ${element}`);

  
})
return magician_names ;
}
console.log(make_great(worlds_megician));
*/     /*
                               //Problem 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
let orders: any[] = [];
function sandwich_type(Sandwiches_Ordered : number , spicy : string , which_flavour : string){
  let sandwich =  {
    Sandwiches_Ordered ,
    spicy ,
    which_flavour
  
  }
  
 orders.push(sandwich)
}

sandwich_type(3 , "normal" , "Chicken Club")
sandwich_type(2 , "Full" , "Spicy BBQ Pulled Pork")
sandwich_type(1 , "Low" , "Egg Salad")

console.log(orders);
*/         
                                   //Problem 45
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.
function car_obj(manufacturer : string , model : number , color? : string , extra_feature? : any){
  let car : any = {
    manufacturer ,
    model 
  } ;
  if(color){
    car["color"] = color ;
  } ;
  if(extra_feature){
    car["extra_feature"] = extra_feature ;
  } ;
  return car ;
} ;
console.log(car_obj("Honda" , 2021 ));
console.log(car_obj("Toyota" , 2023 , "White"));
console.log(car_obj("Kia" , 2018 , "Blue" , "Sun roof"));

