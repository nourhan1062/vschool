var readlineSync = require("readline-sync");
//nb1
var word = readlineSync.question("GIVE me  your first name,Please?");
console.log(word.toUpperCase());
//nb2
var wordLength = readlineSync.question("GIVE me  your name first again,Please?");
console.log(wordLength.length);
//nb3
var firstname = readlineSync.question("GIVE me  your first name,Please?");
var secondname = readlineSync.question("GIVE me  your second name,Please?");
console.log(firstname.concat(" "+secondname));
//nb4
var longmsg = readlineSync.question("GIVE me  a  long msg: ");
var lengthMsg=longmsg.length;
console.log("the length of your msg is: "+lengthMsg);
if(lengthMsg >= 20){
    console.log(longmsg.slice(parseInt(lengthMsg/2),lengthMsg))
}else
    {
        console.log("your msg is small than 20 "+longmsg);
    }
//nb5
 console.log("your old msg is "+longmsg);
var indexWord = readlineSync.question("Please enter the index of world that you want to add: ");