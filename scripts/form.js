// A $( document ).ready() block.
$( document ).ready(function() {
  
  $("#custom").hide();  
  $(document).on("change", "#t-shirt", checkTshirt);
  
  function checkTshirt() {
    
    var tshirt = $("#t-shirt").val();
    //alert(tshirt);
    
      if(tshirt == "CUSTOM") {

        $("#custom").removeAttr("disabled");
        $("#custom").attr("required", true);
        $("#custom").show();

      } // End if tshirt
    
      else {
        
        $("#custom").hide();
        $("#custom").attr("disabled", true);
        $("#custom").val("");
        $("#custom").removeAttr("required");
        
      } // End of else-if tshirt
    
  } // End check T shirt
  
});


// bootstrap validation from URL
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();