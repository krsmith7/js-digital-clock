$(document).ready(function() {

setInterval(function () {
  const clock = (new Date).toLocaleTimeString();

  let display = $('<p>' + clock + '</p>');

  $('#clock').html(display);

}, 500);

$('#left-button').click( function() {
  let target = $('#clock');
  console.log('left align?');
  target.removeClass('right-align');
  target.addClass('left-align')
});

$('#right-button').click( function() {
    let target = $('#clock');
    console.log('right align?');
  target.removeClass('left-align');
  target.addClass('right-align')
});

$('#pink-button').click( function() {
    let target = $('#clock');
  target.removeClass('green-text');
  target.addClass('pink-text')
});

$('#green-button').click( function() {
    let target = $('#clock');
  target.removeClass('pink-text');
  target.addClass('green-text')
});

});
