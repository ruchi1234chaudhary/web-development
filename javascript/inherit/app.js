class person {
    constructor(){
        this.species = "homo sapiens";
        console.log("Enter parents constructor")
    }
    eat(){
        console.log("eat");
    }
    
}
 class Engineer extends person {
    constructor(branch){
        console.log("Enter child constructor");
        super();//to invoke parents constructor
        this.branch =  branch;
        console.log("Exit child constructor");
    }
    work(){
        console.log("work");
    }

 }
 let engObj = new Engineer("chemical engineer");