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

// 5. to make upeercase or lowercase
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
// 3. to push an element an element  at the end of an array :
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
alert("Their's a message for you!!!!!");






















