// function api(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         },2000);
   

//     });
//}
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
    }, 2000);});
}
   

//Async-AWAIT
 async function getAllData(){
    await getData(1);//first call
    await getData(2);//second call
    await getData(3);
    await getData(4);
    await getData(5);
 }