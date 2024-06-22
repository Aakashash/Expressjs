const os = require('os');

const fs = require ('fs');

const xss = require("xss");

const log = require('./log');

log.Info('Server is up and running and this us second');

// console.log(__dirname);


//console.log(__filename);
//console.log(require);
// console.log(module);
// console.log(process);

// console.log(os.uptime())

// console.log(os.type());
// os.type();

// Modules- is like function encapsulating everything 
// few important module is path, os, filesystem

 
  function myDisplay() {
        return new Promise(function(resolve, reject) {
          resolve("I love You !!");
        });
    }

   async function my(){
        return "I love you !@!@";
    }

 //   myDisplay().then(res=>console.log(res));
  const test = async()=>{

try{
    const aa = await myDisplay();
    console.log(aa)
    const ab = await myDisplay();
    console.log(ab)
    const ac = await my();

    console.log(ac)
}
catch{}
   

  }

test();
  console.log("ram ram")

//console.log(__filename);
// console.log(require);
// console.log(module);
// console.log(process);  

const userInput = "<div>It is a working day__123</div>"

const sanitizedInput = xss(userInput);
 console.log(sanitizedInput.toString());

console.log(xss('<script></scipt>'))
var html = xss('<script>alert("xss");</script>');
console.log(html);
const userI = 'javascript'
const sqlstring = require("sqlstring")
const userQuery = 'SELECT * FROM users WHERE username = ' + sqlstring.escape(userInput);

const qu = `Select * from users where username ${userI} and public =1`
const qu1 = 'Select * from users where username '+ sqlstring.escape(userI)  + 'and public =1';

console.log (qu, "\n" , qu1);

const qu2 = null;
 console.log();

 // prevent multiple statements 
 //use placeholders ? / sqlstring package 
 // imput validation 

 // to prevent xss execute scripts 
 // we can use xss / xssclean 


const uu = require("uuid");



let myid = uu.v4();

console.log(myid);

 const str = "abe2a87e-3735-46b9-be34-168cf3aa26bb";

 console.log(str.length);
 
 console.log(Math.floor(Math.random()*900));

 const logging = " It is a test";

 try{

  log.Info("Just a test in the log ")
  throw logging;
 }
 catch{
  log.Info("Just a test in the log ")

  log.Info( console.error('something is wrong'));

 }