
/*  popup-form javascript */

function openloginForm() {
  document.getElementById("popupform").style.display="block";
}

function closeloginForm() {
  document.getElementById("popupform").style.display="none";
}

// When the user clicks anywhere outside, close it

window.onclick = function(event) {
  var shut = document.getElementById("popupform");
  if (event.target == shut) {
    closeloginForm();
  }
}    

