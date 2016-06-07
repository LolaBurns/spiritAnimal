$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var personality = $("input:radio[name=personality]:checked").val();
    var weather = $("#weather").val();
    var activity = $("#activity").val();

    if (personality === "happy-go-lucky" && weather === "Hot") {
      $('#dog').show();
    } else if (personality === "uptight" && activity === "Sleeping") {
        $('#cat').show();
    } else if (weather === "Cold" && activity === "Swimming") {
        $('#polarbear').show();
      } else {
        $('#dodo').show();
      }

    event.preventDefault();
});
});
