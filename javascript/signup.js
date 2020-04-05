function validate()
{    var name = document.getElementById("id1").value;
     var email = document.getElementById("id2").value;
     var password = document.getElementById("id3").value;

     if (name == "" || email == "" || password == "") {
         alert("Hmmm ! Something is missing...")
         return false;
     }
     else{
         return true;
     }
}