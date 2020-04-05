function validate()
{
    var username = document.getElementById("user");
    var password = document.getElementById("pass");
    
    if(user.value == "" || pass.value == "")
    {
        alert("Hmmm ! Something is missing...");
        return false;
    }

    else{
        return true;
    }
}
