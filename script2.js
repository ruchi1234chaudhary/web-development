//conditional sstTEMENTS
// 
// let mode= "light";
// let color;
// if (mode ==="dark"){
//     color="black"
// }
// else{
//     color = "white";
// }
// console.log(color);
// let age = 16;
// if (age >= 18){
//     console.log("vote");
// }
// else{
//     console.log("not vote");
// }

//ternary operator
// console.log(age>18? "adult" : " not adult");
//  let name = prompt(" hello")
//  console.log( name);

// get user to input a number prompt ("enter a number :").  check if the number is a multiple of 5 or not.

// let num = prompt("enter a number");
// if(num % 5 ===0){
//     console.log(num, "is a MULTIPLE of 5");
// }else{
//     console.log(num, " is NOT a multiple of 5");
// }
//

//Write a code which can gives grades to students according to their scores
let score = 75;
let grade;
if( score>= 90 && score <= 100){
    grade= "A";
}
 else if( score>= 70 && score <= 89){
    grade= "B";
}
else if( score>= 50 && score <= 59){
    grade= "C";
}
else if( score>= 0 && score <= 49){
    grade= "D";
}
console.log("according to your scores, your grade was : " , grade)




