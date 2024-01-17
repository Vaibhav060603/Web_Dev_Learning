let initialtime=Date.now();       // refer line 433


// javascript code can also be written in html sheet , under <script> </script> , putting it just above the body ending tag (</body>).
// Errors in javascript code can be seen in 'console' section present in "inspect".


// variables are defined like this 
var a = 48;
var b = "hello";

// to print  on screen , we use console.log();
console.log(b);

// operators and operands
var num1 = 2, num2 = 3;
console.log("the value of num1 + num2 is " + (num1 + num2));
console.log("the value of num1 - num2 is " + (num1 - num2));
console.log("the value of num1 * num2 is " + (num1 * num2));
console.log("the value of num1 / num2 is " + (num1 / num2));
console.log("the value of num1 ** num2 is " + (num1 ** num2));
console.log("the value of num1++ is " + (num1++));  //print then increment
console.log("the value of ++num1 is " + (++num1));  // increment then print 
console.log("the value of num1-- is " + (num1--));
console.log("the value of --num1 is " + (--num1));

//
var name = "Vaibhav";
var college = "Sinhgad College of Engineering ";
var division = "TE-2";
// we can use ``(called as back-ticks) instead of "" or '' to write strings containing single and double cotation as string element
// we can add a variable in a variable (in a sentence) , like below example , by using ${}
var temp = ` I am ${name} of ${division} 'division' "of" ${college}.`;
console.log(temp);


// \n and \t 
console.log(`this is \n new line and\t this is tab(space)`);

//-----------------------------------

// string operations
// 1. index of a substring(first)
var index = college.indexOf("in");
console.log(index);

// 2. index of substring at last 
var index1 = college.lastIndexOf("in");
console.log(index1);

// 3. slice in javascript can be done by using : slice(start,end)(can take negative values) , substring(start,end) , substr(start,length) 
var substring = college.slice(3, 10); //takes value from 3 to 9
console.log(substring);

// 4. replace a substring with another substring 
var replace = college.replace('Engineering', 'majak');
console.log(college);
console.log(replace);

// 5. to make uppercase or lowercase
console.log(college.toUpperCase());
console.log(college.toLowerCase());
console.log(college.toUpperCase());

// 6. to concatenate
console.log(name + " is from " + college);

// 7. to remove blank spaces (indentation) from start and end of a line
var sospacy = "     it is taking     so much space     ";
console.log(sospacy.trim());

//8. to find a particular character at a position
var char = college.charAt(4);
console.log(char);
var charcode = college.charCodeAt(4);   // to find unicode of a character
var charanother = college[5];
console.log(charanother);

//9. length of a string in javascript
var length = college.length;
console.log(`Length of var college is ${length}.`); // This is same as using "+" to concatente to strings 


//--------------------------------------------------------------------------------

// we can declare a variable using 3 methods :
// 1. var (can be re-declared and updated)
//  eg: (i). var a = 5;
//           var a = 7;
//           console.log(a);   =>   7;
// 
//      (ii). var a = 5;                             (declaration)
//            a = 7;                                 (updating)
//            console.log(a);  =>   7;   
//
// 2. let (can only be updated , cannot be redeclared)
//  eg: (i). let a = 5;
//           let a = 7;
//           console.log(a);   =>   error;
//
//      (ii). let a = 5;                             (declaration)
//            a = 7;                                 (updating)
//            console.log(a);  =>   7; 
//
// 3. const (cannot be redeclared or updated )
//  eg: (i). let a = 5;
//           let a = 7;
//           console.log(a);   =>   error;
//
//      (ii). let a = 5;                             (declaration)
//            a = 7;                                 (updating)
//            console.log(a);  =>   error; 


//-----------------------------------------------------------------------------

// if-else loop is same as c++ and java
//eg:
let his_name = "Vaibhav";
if (his_name == "vaibhav") {
    console.log("Your are my friend");
}

else if (his_name == "akshay") {
    console.log("your are my best friend");
}
else {
    console.log("You are someone else");
}

//-------------------------------------------------------------------------------


// switch case is also same as c++ and java
// "break" is necessary after every case
// eg:
let her_name = "sunny leone";
switch (her_name) {
    case "richa":
        {
            console.log("Wo to mayur ki hai");
            break;
        }

    case "hasta-mukhda":
        {
            console.log("Wo to rohit ki hai");
            break;
        }

    case "rashi khanna":
        {
            console.log("Wo to meri hai bsdk");
            break;
        }

    case "shruti":
        {
            console.log("Wo to akshay ki hai");
            break;
        }

    case "sunny leone":
        {
            console.log("Wo to hum sab ki aukaad ke bahar hai");
            break;
        }
}

//-------------------------------------------------------------------------
// objects in javascript is an key value pair
let f = {
    name1: "vaibhav",
    "add 1": "dcwjd",           // if we want to add space in variable name , then we have to give it in inverted comma 
    mobile1: 239423,
}

console.log(f);

// to get certain element from an object :
console.log(f.mobile1);
console.log(f["mobile1"]);
console.log(f[2]);


//----------------------------------
// array
let f1 = ["vaibhav", "sdkcls", 37923, undefined, true];      //array in javascript can contain any data type
console.log(f1);
console.log(f1[0]);

// another method to define an array is :
// eg:-
//        let f1 = new Array(2,"dfsad",undefined,true);


// 1. we can get the length of an array by :
// eg:-
//        let length = f1.length;
//
// 2. we can get the sorted array by :
// eg:-
//        f1=f1.sort();
//
// 3. to push an element an element at the end of an array :
// eg:-
//        f1.push("this is pushed at the end");

//---------------------------------------------------------------
// functions
// we can define a function using 'function' keyword :

function print(name, branch) {
    console.log(name + " is a tharki boy from " + branch + " branch.");
    return true;                 // retune statement also supported in javascript
}

let name1 = "vaibhav";
let name2 = "akshay";
let name3 = "mayur";
let name4 = "gomsale";

let branch1 = "computer";
let branch2 = "biotech";
let branch3 = "entc";
let branch4 = "entc";


print(name1, branch1);
print(name2, branch2);
print(name3, branch3);
print(name4, branch4);

let returnvar = print("ajalks", "adza");
console.log(returnvar);

//----------------------------------------------------------------------
// alert on a website is created using 'alert'
// alert is used only to give some infromation to user
alert("Their's a message for you!!!!!");

// we can accept input from user in alert window using 'promt'
//prompt is used to take input from user
let name5 = prompt("please enter your name :", 'guest');
console.log(name5);

// we can confirm an action to be completed or not by user , using "confirm"
// confrim asks user that are you confirm to procedd to following action
let confirmation = confirm("do you really want to perform this action?");       // returns boolean value 
console.log(confirmation);

if (confirmation == true) {
    alert("Thanks for confirmation , you action has been processed");
}

else {
    alert("Thanks for conforming , your action has not been processed");
}

//----------------------------------------------------------------------------------------
// for loop is same as c++ and java 
let arr = ["vaibhav", "akshay", "mayur", "krushna"];

for (i = 0; i < arr.length; i++) {
    console.log("Hello my friend " + arr[i] + ". How are you?");
}

// In modern javascript , it can also be written as :
// 1. eg: (for each loop)
//        arr.forEach(
//        function f(element)
//        {
//            console.log("Hello my friend " + element + ". How are you?");
//        }
//        )
//
// 2. eg: (for of loop)
//      for(element of arr)
//      {
//          console.log("Hello my friend " + element + ". How are you?");
//      }

//---------------------------------

// for iteration in object , we can use 'for-in' loop
let student = {
    name7: "vaibhav",
    add7: "pune",
    mobile7: "324232"
}

for (key in student) {
    console.log("The " + key + " of student is " + student[key]);
}

//-------------------------------

// while loop is also same as c++ and java
//     var i = 0;
//     while(i<5)
//     {
//         console.log(i + " is less than 5.");
//     }
// Don't use while loop in web development inn javascript , it reduces your website's responsiveness

//------------------------------
// do-while loop is also same as c++ and java
//      var i =0;
//      do
//      {
//          console.log("hello" +i );
//          i++;
//
//      }while(i<2);

//----------------------------------

// (Write the code for DOM manupulation always in script tag , below the HTML body tag)

// (Write the code for DOM manupulation always in script tag , below the HTML body tag)

// Document object model(DOM)

// 1. we can get an element from our website by id using "getElementById" 
let id26 = document.getElementById('id26');
console.log(id26);

// 2. we can get an element from our website by class using "getElementByClass"
let c3 = document.getElementsByClassName('c3');
console.log(c3);

// 3. we can get nth element from elements having same class by:
let c31 = document.getElementsByClassName('c3');
console.log(c3[0]);

// 4.  we can get element by class or id namr by:
let getit = document.querySelector('.c3');
let getit1 = document.querySelector('#id26');

// 5. we can manipulate (make changes) in html page by:
// id25.innerHTML = "sidfjcsoducffm";
// c3[0].innerHTML = '5hhgmjgfzvzcffm';

// 6. we can all elements by:
let ps = document.querySelectorAll('#id22>span');    // '>' to specify / point an element in an id or class 
console.log(ps[0]);

// 7. we can get the value of a button by using:
// let v= document.querySelector("#id27").value;

//-----------------------------------------------------------------
//(event-listner)
// some events are : click , contextmenu , mouse , mouseover/mouseout ,mouseup/mousedown , mousemove , keydown , submit , focus ,  DOMcontentloaded , transitioned , load

// we can use 'onclick = function_name()' in tag , instead of using eventlistener


//-------------------------------------------------------------------------------------------

// If we want to run a function after some specified time , we can use setTimeout and setInterval and to stop the we use clearTimeout :

// 1. setTimeout - it is used to run a function , only once , after a specified time.
// 2. clearTimeout - it is used stop the execution of setTimeout.

// 3. setInterval  - it is used to run a function , repeatedly , after a specified time interval.
// 4. clearInterval - it is used stop the execution of setInterval.

function print(name, age) {
    console.log("His name is " + name + " and his age is " + age + ".");
}

// 1. eg-
//setTimeout(print, 2000, "Vaibhav", "20");         // - only the function name is written , no parenthisis.
                                                    // - time is in milliseconds.
                                                    // - setTimeout(function,milliseconds,arguments).


// 2. eg-
timeout=setTimeout(print, 2000, "Vaibhav", "20");    // - it will also run the function after specified time.  //

clearTimeout(timeout);                               // - to stop execution of setTimeout().

// - example for use of clearTimeout():
//        Suppose you want to display a signup page to user after 10sec , but user has already signed up ,
//        so you have to stop the execution of setTimeout , in that case you will use clearTimeout. 


// 3. eg-
interval=setInterval(print,2000, "Vaibhav","20");    // - only the function name is written , no parenthisis.
                                                     // - time is in milliseconds.
                                                     // - setTimeout(function,milliseconds,arguments).
                                                     // - interval will contain the id of setInterval.

// 4. eg-
clearInterval(interval);                             // - to stop execution of setInterval().

//-----------------------------------------------------------------------------
// Use of setInterval to display time on your website:
function displaytime()
{
    time=new Date();
    document.querySelector('#time').innerHTML=("Time is : "+time);
}

setInterval(displaytime,1000);


//---------------------------------------------------------------------------------

// Date and Time:
let dat=new Date();
console.log(dat);

// new Date(year,month,date,hours,minutes,seconds);
let date1=new Date(2030,6,6,3,34,56);
console.log(date1);

// to get year, month,date,hours,minutes,seconds
let year=date1.getFullYear();
console.log(year);

let month=date1.getMonth();
console.log(month);

let date=dat.getDate();
console.log(date);

// UTC timezone for london
// setDate() , to set a date
dat.setDate(22);
console.log(dat);

// to get time difference:
// initiatime declared at starting of code 
let aftertime=Date.now();
console.log(aftertime-initialtime);

//-----------------------------------------------------------------------------------


// Math object
let maths=Math;
console.log(maths);

let n=5.266668;
let o=9.32541;
console.log("Value of a and b is :",n,o);
console.log("Rounded value of a and b is :"+Math.round(n),Math.round(o));

console.log("Value of 2 power 3 is :"+ Math.pow(2,3));
console.log("Value of square root of 16 is :",Math.sqrt(16));

console.log("Value of 5.8 when rounded up is:",Math.ceil(5.8));                    // round-off to bigger value 
console.log("Value of 5.8 when rounded down is:",Math.floor(5.8));                 // round-off to smaller value 

console.log("Absolute Value of 5.8 is:",Math.abs(5.8));
console.log("Absolute Value of -5.8 is:",Math.abs(-5.8));                          // gives positive value

console.log("value of sin(pi/2) is:",Math.sin(Math.PI/2));                         // value of angle must be given in radian

console.log("maximum from 2,3,8,1,10 is :",Math.max(2,3,8,1,10));                  // maxiumum value 
console.log("mainimum from 2,3,8,1,10 is :",Math.min(2,3,8,1,10));                 // mainimum value 

let p=2;
let q=8;
let ran=p+(q-p)*Math.random();                                                      // formula to generate random number between 2 numbers
console.log("A random number is :",ran);

//------------------------------------------------------------------------------------------------------------------
// JSON

let jsonobj={name:"Vaibhav", age:"20",mobile:75688,addr:"maharashtra"};              // creating a JSON Object
console.log(jsonobj);

let jsonstr=JSON.stringify(jsonobj);                                                 // stringify, used to convert JSON into string
console.log(jsonstr);

let jsonagain=JSON.parse(jsonstr);                                                    // parse, used to convert string into JSON
console.log(jsonagain);

//string.replace(identifier,replacement);
let newjsonstr=jsonstr.replace("Vaibhav","Harsh");                                    // to replace a word in a json string
console.log(newjsonstr);

//---------------------------------------------------------------------------------------------------------------------






















