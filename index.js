$(document).ready(function() {

setInterval(function () {
  const clock = (new Date).toLocaleTimeString();

  let display = $('<p>' + clock + '</p>');

  $('#clock').html(display);

}, 500);

$('#left-button').click( function() {
  let target = $('#clock');
  console.log('left align?');
  target.removeClass();
  target.addClass('left-align')
});

$('#right-button').click( function() {
    let target = $('#clock');
    console.log('right align?');
  target.removeClass();
  target.addClass('right-align')
});


});
