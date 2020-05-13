function myFunction() {
    document.getElementById("myContent").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.items-btn')) {
      var botao = document.getElementsByClassName("btn-content");
      var i;
      for (i = 0; i < botao.length; i++) {
        var openDropdown = botao[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }