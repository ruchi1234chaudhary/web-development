/* create a faulty calculator using javascript

this fault calculator does following:
1. it takes two numbers as input from the user
2. it performs wrong operations as follows:
 +--->-
*  ---->+
- ---->/
/ ----> **

*/
let a =number(prompt("enter your first number"));
let b=number(prompt("enter your second number"));
let random=math.random();
let addition=a+b;
let subtraction=a-b;
let multiplication=a*b;
let division=a/b;
let Expotential=a**b;
if(random<0.1){
   console.log("addition calculation:",a-b);
   console.log("Subtraction calculation:",a/b);
   console.log("Multiplication calculation:",a+b);
   console.log("Division calculation:",a**b);
   
}
else{
    console.log("addition calculation:",a+b);
   console.log("Subtraction calculation:",a-b);
   console.log("Multiplication calculation:",a*b);
   console.log("Division calculation:",a/b);
}

