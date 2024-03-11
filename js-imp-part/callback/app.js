
function get(dataId, getNextData){
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
}, 2000);}

//callback hell
  getData(1, () => {
    console.log("loading getData2....")
    getData(2, () => {
        console.log("loading getData3....")
        getData(3, () => {

        });
    });
  });