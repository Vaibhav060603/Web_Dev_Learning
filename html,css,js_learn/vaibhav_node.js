// Their are 2 types of runnaing a file:
// 1. Synchronous or blocking   (execution continuously , by blocking an I/O) , (executing I/O afterwards) , (eg-fs.readFileSync)
// 2. Asynchronus or non-blocking  (execution continuously , but not blocking an I/O) , (executing I/O on time) , (eg-fs.readFile)


// to import a built-in modules , we use require()

//--------------------------------------------------------------------------------------------------------------
// read and write on a file 

// const fs = require("fs");                                                  // file system, used for file handling
// let txt = fs.readFileSync("vaibhav.txt", "UTF-8");                          // present in fs module , to read a file 
// console.log(txt);

// let replaced = txt.replace("hello", "fellow", "UTF-8");
// console.log(replaced);
// fs.writeFileSync("2.txt", replaced);                                        // present in fs module , to write a file

//------------------------------------------------------------------------------------------------------------------
// to create a server

// const http = require('http');
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


//-----------------------------------------------------------------------------------------------------------------------
// opening a html file

// const http2 = require("http");
// const fs2 = require("fs");

// const html_data2 = fs2.readFileSync("vaibhav.html");
// const css_data2 = fs2.readFileSync("vaibhav.css");

// const server = http2.createServer((req, res) => {
//     res.writeHead(200, { 'Content-type': 'text/html' });
//     res.end(html_data2);
// });

// server.listen(80, '127.0.0.1', () => {
//     console.log("listening on port 80");
// });

//--------------------------------------------------------------------------------------------------------------------------
// for opening of different files , through links 


// const fs3 = require('fs');
// const http3 = require('http');

// const vaibhav3 = fs3.readFileSync('vaibhav.html');
// const bootstrap3 = fs3.readFileSync('bootstrap.html');
// const index3 = fs3.readFileSync('index.html');

// const hostname3 = '127.0.0.1';
// const port3 = 3000;

// const server3 = http3.createServer((req, res) => {
    //     res.statusCode = 200;
    //     url=req.url;
    
    //     res.setHeader('Content-Type', 'text/html');
    //     if(url=='/')
    //     {
    //         res.end(vaibhav3);
           //     }

    //     else if(url=='/bootstrap')
    //     {
                //         res.end(bootstrap3);   
    //     }
            
    //     else if(url=='/index')
    //     {
    //         res.end(index3);   
    //     }
    //     else{
    //         res.end("<h1>404 not found<h1>");
    //     }
    // });
                    
    // server3.listen(port3, hostname3, () => {
    //     console.log(`Server running at http://${hostname3}:${port3}/`);
    // });
                        
                        
// [we mainly use express.js (a js module) , instead of if-else]
                        
//-----------------------------------------------------------------------------------------------------------------------------















