$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();

    $('area').on('focus', function(e) {
      e.preventDefault();
      $('.selection p').html($(this).attr('class'));      
    });
});


var tooltipSpan = document.querySelectorAll('.tooltipimage');

window.onmousemove = function (e) {
  var x = e.clientX,    
    y = e.clientY;
    tooltipSpan.forEach(function(tooltipSpan) {
      tooltipSpan.style.top = (y + 20) + 'px';
      tooltipSpan.style.left = (x + 20) + 'px';    
    });
  };
