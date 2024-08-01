<<<<<<< HEAD
// const http = require("http");                   // another way of importing a module
// const fs = require("fs");                       // 1. to get in-built modules
// const name = require("./exportexample");        // 1.1. to import a single variable from another user-defined js file/module
// NOTE : if you are using any one type of importing a module , then use it only (make it constant)

//------------------------------------------------
// use this way for importing
// import http from "http"; 
// import fs from "fs"; 
// import path from "path";
// import express from "express";


//-------------------------------------------------------

// importing from other files

// import {name,name1,name2} from "./exportexample.js";    // 1.2.1. to import more than one variables from another user-defined js file/module
// import * as myOBJ from "./exportexample.js";            // 1.2.2. to import more than one variables from another user-defined js file/module in object form



// console.log(name);
// console.log(name1);
// console.log(name2);
// console.log(myOBJ);

//--------------------------------------------------
// without using express

// const vaibhav = fs.readFileSync("vaibhav.html");                  // to read file

// const server = http.createServer((req,res)=>{
//     if(req.url=="/")
//     {
//         res.end(vaibhav);
//     }
// });


// server.listen(8000,()=>{
//     console.log("server is live");
// });


//-------------------------------------------------------
// get => read database
// post => put in database
// put => update database
// delete => delete in database

//--------------------------------------------------------
// // using express

// const app = express();                                              // server created
//                                                                     // app is used insteaad of server (maje ke liye)

// const vaibhav = fs.readFileSync("vaibhav.html");              

// app.get("/products",(req,res)=>{
//     // res.send(vaibhav);                                            // to send a file is to be downloaded by user
    
//     // res.sendStatus(404);                                          // to send status of a sever
    
//     // res.json({                                                    // to send a json object
//     //     name:"vaibhav",
//     //     phone:"966540"
//     // });

//     // console.log(path.resolve());                                   // to get the path of current directory
    
//     // res.end(vaibhav);                                              // to send a file or text 
    

//     // 1. ejs is used to change info on a website according to user's info 
//     // 2. in .ejs file (present in views) , use <%=variable_name%>
//     // 3. render reads only the file present in views , file must be of ejs extension
//     //** res.render("example.ejs",{name:"chaman"});                     // .ejs (instead of pug) module is used to give variables dynamically 

// }); 


// app.listen(8000,()=>{
//     console.log("server is working");
// });

//------------------------------------------------------------------------
// taking input from user from expmle.ejs file


import path from "path";
import express from "express";
import mongoose from "mongoose";


//----
// database part 
mongoose.connect("mongodb://localhost:27017",{          // connecting to database
    dbName:"vaibhav"
})
.then(()=>{console.log("Database connected.")})
.catch((e)=> console.log(e));

const userdata = new mongoose.Schema({                   // creating a schema
    name : String,
    mobile : String,
    address : String
});


const exampledata = mongoose.model("exampledata",userdata);        // creating collection , collection name will be in plural form



//----
// express.js part
const app = express();
app.use(express.urlencoded({extended:true}));          // write as-it-is to form a middle-wayer to get data from user


app.get("/example",(req,res)=>{
    res.render("example.ejs",{name:"vaibhav"});
});

app.post("/example",(req,res)=>{
    console.log(req.body);                                      // all data taken from user is stored in (body of req)
    const data = {name : req.body.name , mobile : req.body.mobile , address : req.body.addr};      // storing data in form of json
    const presentdata = exampledata.find({mobile : data.mobile});
    if(presentdata.mobile= data.mobile)
    {
        console.log("mobile number already present");
    }
    else
    {
        exampledata.insertMany(data);                               // putting data in database
    }
    res.render("index.ejs",{name:data.name});                   // we can also use redirect
});









app.listen(8000,()=>{
 console.log("server is working");
 });




=======
//1. to install npm: npm i
//2. to create package.json file: npm init
//3. to install mongoose, express, nodemon, ejs: npm i mongoose express nodemon ejs
//4. (only if not present) , put "type": "module", (after: "main": "node.js") , in node.js 
//4. to run nodemon: nodemon [file_name].js
 









// const http = require("http");                   // another way of importing a module
// const fs = require("fs");                       // 1. to get in-built modules
// const name = require("./exportexample");        // 1.1. to import a single variable from another user-defined js file/module
// NOTE : if you are using any one type of importing a module , then use it only (make it constant)

//------------------------------------------------
// use this way for importing
// import http from "http"; 
// import fs from "fs"; 
// import path from "path";
// import express from "express";


//-------------------------------------------------------

// importing from other files

// import {name,name1,name2} from "./exportexample.js";    // 1.2.1. to import more than one variables from another user-defined js file/module
// import * as myOBJ from "./exportexample.js";            // 1.2.2. to import more than one variables from another user-defined js file/module in object form



// console.log(name);
// console.log(name1);
// console.log(name2);
// console.log(myOBJ);

//--------------------------------------------------
// without using express

// const vaibhav = fs.readFileSync("vaibhav.html");                  // to read file

// const server = http.createServer((req,res)=>{
//     if(req.url=="/")
//     {
//         res.end(vaibhav);
//     }
// });


// server.listen(8000,()=>{
//     console.log("server is live");
// });


//-------------------------------------------------------
// get => read database
// post => put in database
// put => update database
// delete => delete in database

//--------------------------------------------------------
// // using express

// const app = express();                                              // server created
//                                                                     // app is used instead of server (maje ke liye)

// const vaibhav = fs.readFileSync("vaibhav.html");              

// app.get("/products",(req,res)=>{
//     // res.send(vaibhav);                                            // to send a file is to be downloaded by user
    
//     // res.sendStatus(404);                                          // to send status of a sever
    
//     // res.json({                                                    // to send a json object
//     //     name:"vaibhav",
//     //     phone:"966540"
//     // });

//     // console.log(path.resolve());                                   // to get the path of current directory
    
//     // res.end(vaibhav);                                              // to send a file or text 
    

//     // 1. ejs is used to change info on a website according to user's info 
//     // 2. in .ejs file (present in views) , use <%=variable_name%>
//     // 3. render reads only the file present in views , file must be of ejs extension
//     //** res.render("example.ejs",{name:"chaman"});                     // .ejs (instead of pug) module is used to give variables dynamically 

// }); 


// app.listen(8000,()=>{
//     console.log("server is working");
// });

//------------------------------------------------------------------------
// taking input from user from exapmle.ejs file


import path from "path";
const __dirname = path.resolve();
import express from "express";
import mongoose from "mongoose";


//----
// database part 
mongoose.connect("mongodb://localhost:27017",{          // connecting to database
    dbName:"vaibhav"
})
.then(()=>{console.log("Database connected.")})
.catch((e)=> console.log(e));

const userdata = new mongoose.Schema({                   // creating a schema
    name : String,
    mobile : String,
    address : String
});


const exampledata = mongoose.model("exampledata",userdata);        // creating collection , collection name will be in plural form



//----
// express.js part
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));          // write as-it-is to form a middle-wayer to get data from user
app.use(express.static(path.join(__dirname,'public')));  //to make the things inside the public folder available publically

app.get("/example",(req,res)=>{
    res.render("example.ejs",{name:"vaibhav"});
});

app.post("/example",(req,res)=>{
    console.log(req.body);                                      // all data taken from user is stored in (body of req)
    const data = {name : req.body.name , mobile : req.body.mobile , address : req.body.addr};      // storing data in form of json
    const presentdata = exampledata.find({mobile : data.mobile});
    if(presentdata.mobile= data.mobile)
    {
        console.log("mobile number already present");
    }
    else
    {
        exampledata.insertMany(data);                               // putting data in database
    }
    res.render("index.ejs",{name:data.name});                   // we can also use redirect
});









app.listen(8000,()=>{
 console.log("server is working");
 });




>>>>>>> 1285c54 (1st commit)
