function validate() {
    var name = document.getElementById("id1").value;
    var age = document.getElementById("id2").value;
    var bloodgroup = document.getElementById("id3").value;
    var phonenumber = document.getElementById("id4").value;
    var email = document.getElementById("id5").value;
    
    if (name == "" || age == "" || bloodgroup == "" || phonenumber == "" || email == "") {
        alert("Hmmm ! Something is missing...");
        return false;
    }
    else if (isNaN(age)) {
        alert("Enter Correct age...");
        return false;
    }
    else if (isNaN(phonenumber)) {
        alert("Enter Correct Phone Number...");
        return false;
    }
    else {
        return true;
    }
}