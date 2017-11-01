var paras = document.getElementsByClassName("paragraph");

for(var i = 0; i <paras.length; i++){
    paras[i].style.color = "#CCCCCC";
}

var thediv = document.getElementById("myid");
thediv.href = "www.trentross.com";
thediv.setAttribute("class", "Something");
thediv.style.backgroundColor = "#2a2a2a";