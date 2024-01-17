// getting-started.js
const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/test');

 var db = mongoose.connection;

// db.on('error',console.error.bind(console,'connection error:'));

// db.once('open',function(){
//     console.log("We are connected bros");
// })


const kittySchema = new mongoose.Schema({
    name: String
});



kittySchema.methods.speak = function speak() {
    const greeting = `My name is ${this.name} ` + this.name;
    console.log(greeting);
  };
  
//-------------------------------------------------------------
const Kitten = mongoose.model('Kitten', kittySchema);                    // makes collection with a plural name , eg- kitten => kittens 

//-------------------------------------------------------------
const vaibhavkt = new Kitten({ name: 'vaibhav' });
console.log(vaibhavkt.name); // 'Silence'
vaibhavkt.speak();                                                       // prints value in console
vaibhavkt.save();                                                        // saves the name in document , in kittens(s) collection

//------------------------------------------------------------

const fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); 
fluffy.save();

//---------------------------------------------------------------

// Kitten.find({name:"vaibhav"},function(err,kittens)
// {
//     if(err) return console.error(err);
//     console.log(kittens);
// })

const kittens = Kitten.find({name:"vaibhav"});
console.log(kittens);












