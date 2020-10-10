document.getElementById("edit-button").addEventListener("click", function() {
    input = document.getElementsByClassName("edit-form");
    for (i = 0; i < input.length; i++) {
        input[i].disabled = false;
      }

      document.getElementById("edit-button").innerHTML = "Guardar datos";

   
  },3000);

  