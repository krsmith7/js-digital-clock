$(document).ready(function() {

setInterval(function () {

  const clock = (new Date).toLocaleTimeString();

  let display = $('<p>' + clock + '</p>');


  $('#clock').html(display);

}, 500);




});
