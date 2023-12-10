// Arrays
// let marks = [ 97 , 82, 65 , 50 ];
// console.log(marks);
// console.log(marks.length);//property

//loops
// let heroes = [ "ironman" , "thor" , "hulk" , "shaktiman" , "spiderman" , "antman"];
// for (let idx=0; idx<heroes.length; idx++){
//     console.log(heroes[idx]);
// }

// for of
// for(let hero of heroes){
//     console.log(hero);
// }


// let cities = ["delhi" , "pune" , "mumbai" , "hyderbad" , "gurgaon"];
// for (let city of cities){
//     console.log(city.toUpperCase());
// }

//question
// for a given array with marks of students -> [85, 97, 44, 37, 76, 60]find the average marks of the entire class,

// let marks = [85, 97, 44, 37, 76, 60];
// let sum =0;
// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log (`avg marks of the class = ${avg}`);


// question2
// for a given array with prices of items -> [250, 645, 300, 900, 50] all items have an offer of 10% off on them. change the array to store final price after applying offer.

// let items = [250, 645, 300, 900, 50];
// let i = 0;

// for (let val of items){
//     console.log(`value at index ${val}`);
//     let offer = val/10;
//     items [i] = items[i]- offer;
//     console.log(`value after pffer = ${items[i]}`);
//     i++;
// }
// for (let i=0; i< items.length; i++){
//     let offer = items[i]/10;
//     items[i]-= offer;
// }
// console.log(items)
// push

// let foodItems=["potato"," litchi", "apple", "chips"];
//  console.log( foodItems);
// // foodItems.pop();
// // console.log( foodItems);// deleted from last
// console.log(foodItems.toString());
// let marvelHeroes =["thor" , "spiderman" , "ironman", ];
// let dcHeroes =["superman", "batman"];
// let heroes = marvelHeroes.concat(dcHeroes);
// console.log(heroes);

// let marvelHeroes =["thor" , "spiderman" , "ironman", ];
// let val= marvelHeroes.shift();
// console.log("deleted" , val);

//slice
// let arr =[1, 2, 3, 4, 5,6,7,];
// arr.slice(2,2,101,102);
// // add element
// arr.slice(2, 0,101);

// ///delete element
// arr.slice(3,1);

// //Replace element
// arr.slice (3,1,101);