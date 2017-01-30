var numbers = function(number1, number2) {
    if (number1 > number2){
    console.log("the lower number is" + " " + number2);
    } else {
    console.log("the lower number is" + " " + number1);  
    }
}
var monkeysTrouble = function(smileA,smileB) {
  if ((smileA== true && smileB==true)||(smileA == false && smileB == false)){
    console.log (true);
  } else {
    console.log (false);
  }
}
numbers (1, 9);
monkeysTrouble (false, false);