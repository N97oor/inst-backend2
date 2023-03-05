const yargs = require("yargs")
const  data10 = require("./data10")
yargs.command({
    command : "add" ,
    describe : "add person",
    builder : {
        fname : {
            describe : " first name",
            demandOption : true,
            type : "string"
        },
        lname : {
            describe : " last name",
            demandOption : true,
            type : "string"
        },
    },
    handler  : (x)=> {
        data10.addperson(x.id ,x.fname , x.lname , x.city , x.age,x.job , x.avg = (x.arabic + x.english + x.math + x.french + x.bilogy + x.chemctry) / 6);
    }
})
yargs.command({
    command : "delete" ,
    describe : "delete person",
    handler  : (x)=> {
       data10.deleted(x.id)
    }
})
// ////////  /////////////////////////// 
yargs.command({
    command : "read" ,
    describe : "read the info of person",
    builder  : {
        id : {
            describe : "read info",
            demandOption : true,
            type : "string"
        },
    },
        handler : (x) => {
            data10.read(x.id)
        }
        })
// //////////////// ////////////////////
yargs.command({
    command : "list" ,
    describe : "list info of person",
    handler : () =>{
        data10.list()
    }
})

console.log(yargs.argv);




