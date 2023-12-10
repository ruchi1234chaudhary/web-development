//  For loops
// for(let i =1; i<=5; i++){
//     console.log("i=" , i);
//  }//5
//  let i;
// console.log("i");//6


// calculate sum of 1 to 5
// let sum=0;
// for(let i=1; i<=5; i++){
//     sum=sum+i;

// }
// console.log("sum = " ,sum);
// console.log("loop has ended");

//while loop
// let i=1;
// while(i<=5){
//     console.log("Radhe radhe");
// }

//do while loop
// let i= 1;
// do{
//     console.log("Radhe radhe");
//     i++;

// } while(i<=10);// condition no true so  it will print one time

//for of loop
// let str="Radhe radhe";
// let size=0;
// for(let i of str ){//iterate -> character
//     console.log("i=", i);
//     size++;
// }
// console.log("string size =" , size);

// for in loop

// let student={
//     name : "Ruchi chaudhary",
//     age:18,
//     cgpa:8.02,
//     ispass: true,

// };
// for( let key in student){
//     console.log("key=", key, "value=", student[key]);
// }

// print all the even numbers from 0to 100

// for( let i=0; i<=100; i=i+2){
//     console.log("i=", i);
// }

// question 2
//create a game where you start with any random game number .Ask the user to keep gur=essing the game number until the user enters correct value.

// let gameNum=25;
// let userNum= prompt("guess the game number : ");
// while( userNum !== gameNum){
//     userNum = prompt("you entered wrong number.guess again:");

// }
// console.log("congratulation, you entered the right number");

//string

// 
// let str="Ruchi";
// console.log (str[1]); //u


//templates liiterals
// let obj = {
//     item: "pen",
//     price: 10,
// }
// let output= `the costt of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// // console.log ("the cost of", obj.item, "is" , obj.price, "rupees");

// let specialstring =`this is a template literal`;
// console.log(typeof specialstring);

// console.log(" apna\ncollege");
// console.log(str.length);

//string methods

// let str= " ruchi";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);

//(remove whitespace)


// let str="       Ruchi" ;//spaces not printed
// console.log ( str.trim());

//(returns  part of string)

// let str="hello";
// console.log(str.slice(0, 3 ));//print from 0 to 3


//join str1 with str2

// let str1 = "Ruchi ";
// let str2 = "Chaudhary";
// console.log(str1.concat(str2));
//OR 
// let str1="Ruchi";
// let str2="chaudhary";
// let res = str1 + str2;
// console.log (res);

// search anad  put

// let str ="hello";
// console.log (str.replace("h" , "y"));

//finding character   
//  

//question 
// prompt the user to enter their full name. generate a username for them based on the input . start username with @, followed by their full name and ending with the fullname length.

// let fullName = prompt("enter your fullName without spaces");
// let userName = "@"+ fullName + "13"
// console.log(fullName);
// console.log(userName);
