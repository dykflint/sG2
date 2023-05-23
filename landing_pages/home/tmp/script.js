/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction_k(dropNumber) {
    document.getElementById(dropNumber).classList.toggle("show-k");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-k')) {
      var dropdowns = document.getElementsByClassName("dropdown-content-k");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-k')) {
          openDropdown.classList.remove('show-k');
        }
      }
    }
  }