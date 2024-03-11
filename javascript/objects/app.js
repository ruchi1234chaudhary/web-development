const student = {
    fullName : "Ruchi Chaudhary",
    marks : 91.2,
    printMarks(){
        console.log("matks = ", this.marks);

    },
    printMarks : function(){
        console.log("marks = ", this.marks);
    },


};
const employee = {
    printMarks : function(){
        console.log("marks = ", this.marks);
    },

    salary:2000,

};


employee.__proto__ = student;
