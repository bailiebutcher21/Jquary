
    var mystring = document.getElementById("quote").innerHTML;

    function checkstring(thevalue){
        var re = new RegExp("\\b" + thevalue + "\\b");
        var thestring = mystring.toString();
        var result = thestring.search(re);

        if(result !== -1)
            document.getElementById("resultspan").innerHTML = "Found at:" + result;
        else{
            document.getElementById("resultspan").innerHTML = "Not Found";
        }
    }
