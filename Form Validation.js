function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

function validateName(){
    var name = document.forms ["myforms"] ["myName"].value;
    if(name == null || name.trim().length < 0){
        alert("Name must be filled in");
        return false;
    }
}