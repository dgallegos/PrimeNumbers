$( document ).ready(function() {
  $('#generate').on('click', function(e){
    $.ajax({
      url: "/prime_numbers.json?generate=1000", 
        success: function(result){
          // Clear Prime Numbers
          $("#prime-numbers").empty();
          
          var arrayLength = result.length;
          for(var p = 0; p < arrayLength; p++){
            var appendString = "";
            appendString +=  '<span class=\"col-md-1 prime-number\"">' + result[p] + "</span>";
            if((p != 0) && (((p + 1) % 10) == 0)) {
              appendString += "<br>";
            }
            $("#prime-numbers").append(appendString);
          }
        }
    });
  });
});