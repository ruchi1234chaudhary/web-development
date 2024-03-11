const getPromise = () => {
     return new Promise((resolve,reject) => {
        console.log("Heyy I am a promise");
        //resolve("success");
        rejected("error")
    });

};
let Promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res)
})

promise.catch((err) => {
    console.log("rejected", err);
})

// function get(dataId, getNextData){
//     return new promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//            resolve("sucess");
//            if(getNext){
//             getNextData();
//            }
//     }, 5000);
   
//         });
// }