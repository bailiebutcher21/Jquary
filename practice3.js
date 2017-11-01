//Write a JavaScript program that gives you a random date in the future. Use the Date library.
function formatDate(date){
    var month = randomDate().getMonth();
    var day = randomDate().getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return string(date.getFullYear()) + month + day;
}
console.log( formatDate(randomDate()) );