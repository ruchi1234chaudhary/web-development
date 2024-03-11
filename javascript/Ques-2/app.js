let DATA = " edit data "
class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
   
}
 class Admin extends User{
    editData(){
        console.log("data = ", DATA);
    }
 }
 let studentObj = new Admin("ruchi", "cruchi@123");

