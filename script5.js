// function myFunction (msg){
//     //parameter ->input
//     console.log(msg);
    
// }
// myFunction( "i love js , 100");// argument


//function ->2  numbers , sum 
// function sum(x,y){
//     //local variable ->scope
//     s=x+y;
//     console.log("before return");
//     return s;
// }
// let val = sum(3,4);
// console.log(val);
//

// //sumfunction
// function sum(a,b){
//     return a+b;
// }
// //modern js
// const arrowSum = (a,b) => {
//     console.log (a+b);
// }

// //multiplication function
// function mul (a,b) {
//     return a*b;
// }

// const arrowMult = (a,b) => {
//     console.log (a*b);
// }

//question
// create a function using the "function "keyword that takes a  string as an argument & returns the number of vowels in the string

// function countVowels (str){
//     let count = 0;
//    for ( const char of str) {
//     if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         count++;
//     }
    
//    }
//    console.log(count);
// }


// const countVow = (str) => {
//     let count = 0;
//   for ( const char of str) {
//    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//         count++;
//     }
    
//   }
//   return count;
    
// }
 

// let arr = [ 1, 2, 3, 4, 5];
// arr.forEach(function printval(val){
//     console.log(val);
// });

// let arr =["pune" , "delhi" , "mumbai"];
// arr.forEach ((val , idx, arr) => {
//     console.log (val.toUppercase(), idx,arr)
// });


//for a given array of numbers, print the square of each value using the forEach loop 

// let nums = [2,3,4,5,6];
// nums.forEach( (num)=> {
//     console.log(num*num);//num**2
// });


//maps method ids used for print new array

// let nums = [ 67,52,39];
// let newArr = nums.map((val) => {
//     return val*2;

// });
// console.log(newArr);
// let calcsquare = (num) =>{
//     console.log (num*num)
// }


//filter
// let arr = [ 1,2,3,4,5,6,7];
// let evenArr = arr.filter((val) => {
//     return val % 2===0;
// });
// console.log(evenArr);


//reduce method

// let arr = [1,2,3,4];
// const output = arr.reduce((res,curr) => {
//     return res > curr ? res : curr;
// });
// console.log(output);


// let marks =[97,64,54,68,94];
// let toppers = marks.filter ((val) =>{
//     return val > 90;
// });
// console.log(toppers);

 let n = prompt ("enter a number: ");
 let arr =[];
 for ( let i=1; i<=n; i++){
    arr[i-1]=i;
 }
 console.log(arr);
 let sum =arr.reduce((res,curr) => {
    return res + curr;
 });
 console.log(sum);

 let mult =arr.reduce((res,curr) => {
    return res * curr;
 });
 console.log(mult);