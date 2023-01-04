$(document).ready(function()
{
let pauseInterval= false;
let interval = window.setInterval(rotateSlides, 10000) 

function rotateSlides()
{
let $startingslide = $('#imageslider').find('div:first');
let width = $startingslide.width();
$startingslide.animate({marginLeft: -width}, 1000, function()
{
  let $theendgameslide = $('#imageslider').find('div:last')
  $theendgameslide.after($startingslide);
  $startingslide.css({marginLeft: 0})
});
}

$('#leftarrow').click(previmage);
$('#rightarrow').click(nextimage);
$('.slider').click(nextimage);

function previmage()
{
window.clearInterval(interval);
let $curr = $('#imageslider').find('div:first');
let width = $curr.width();
let $prev = $('#imageslider').find('div:last')
$prev.css({marginLeft: -width})
$curr.before($prev);
$prev.animate({marginLeft: 0}, 1000, function()
{
  interval = window.setInterval(rotateSlides, 10000);
});
}

function nextimage()
{
window.clearInterval(interval);
let $curr = $('#imageslider').find('div:first');
let width = $curr.width();
$curr.animate({marginLeft: -width}, 1000, function()
{
  let $theendgameslide = $('#imageslider').find('div:last')
  $theendgameslide.after($curr);
  $curr.css({marginLeft: 0})
  interval = window.setInterval(rotateSlides, 10000);
});
}

});

