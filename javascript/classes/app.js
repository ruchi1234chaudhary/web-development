class ToyotaCar {
    constructor(brand, mileage){
        console.log("Creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start")
    }
    end(){
        console.log("end")
    }
    setBrand(brand){
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar("fortuner" , 10);//constructor
console.log(fortuner);
let Lenuxs = new ToyotaCar("Lenux", 12);//constructor
console.log(Lenuxs);