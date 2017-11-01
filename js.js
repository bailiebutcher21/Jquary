 var input =('give me a number');
 var x = Math.floor((Math.random() * 10) + 1);
 console.log(x);
 parseInt(input);
 function mathRandom(){
   var x;
 }
 console.log(x);
 function runAnswer() {
     if (x === input) {
         document.getElementById("answer").innerHTML = "Well Done!"

     } else if (x !== input) {
         document.getElementById("answer").innerHTML = "Wrong"

     }
 }