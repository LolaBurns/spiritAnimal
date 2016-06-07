$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var personality = $("input:radio[name=personality]:checked").val();
    var weather = $("#weather").val();
    var activity = $("#activity").val();

    if (personality === "happy-go-lucky" && weather === "Hot") {
      $('#dog').show();
      $('#cat').hide();
      $('#polarbear').hide();
      $('#dodo').hide();
    } else if (personality === "uptight" && activity === "Sleeping") {
        $('#cat').show();
        $('#dog').hide();
        $('#polarbear').hide();
        $('#dodo').hide();
    } else if (weather === "Cold" && activity === "Swimming") {
        $('#polarbear').show();
        $('#cat').hide();
        $('#dog').hide();
        $('#dodo').hide();
      } else {
        $('#dodo').show();
        $('#cat').hide();
        $('#polarbear').hide();
        $('#dog').hide();
      }

    event.preventDefault();
});
});
