function asyncFunc1(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    })
}
function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    })
}
//promise chaining
console.log("fetching data.....");
let p1 = asyncFunc1();
p1.then((res) =>{
    console.log("fetching data.....");
    let p2 = asyncFunc1();
    p2.then((res) =>{
    console.log(res);
});
});