

$(function(){
    $("#addbutton").click(function(){
        additem();
    });
    $("#addinput").keyup(function(event){
        if(event.keyCode ===13){
            additem();
        }
    });
});

function additem() {
    var thelabel = $("#addinput").val();

    if (thelabel !== "") {
        var inputdiv = "<div><span>" + thelabel + "</span><button onclick='deleteitem(this)'>DELETE</button></div>";
        $(".todocontainer").append(inputdiv);
        $("#addinput").val("");
    }
}
function deleteitem(element){
    //$(element)
    console.log($(element).parent());
    $(element).parent().remove();
}


function getinfo(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //$(".todocontainer").html(this.responseText);
            myobj = JSON.parse(this.responseText);
        }
    };

    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Provo&appid=cc8ef8e5c209d938ab3801daa42b5e31", true);
    xhttp.send();
}


var myjson= '{"Name":"Bailie", "Phone":"8010202022"}';
var obj = JSON.parse("getinfo");





