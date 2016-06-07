$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var personality = $("input:radio[name=personality]:checked").val();
    var weather = $("#weather").val();
    var activity = $("#activity").val();

    if (personality === "happy-go-lucky" && weather === "Hot") {
      $('#dog').show();

    } else {
        $('#cat').show();
      }

    event.preventDefault();
});
});
