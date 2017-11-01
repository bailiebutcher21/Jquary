function multiply (){
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var x = input1 * input2;
    parseInt(x);
    document.getElementById('answer').innerHTML = x;
}
function divide(){
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var x = input1 / input2;
    parseInt(x);
    document.getElementById('answer').innerHTML = x;
}