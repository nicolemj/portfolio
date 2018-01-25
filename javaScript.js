// Carousel Auto-Cycle
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 6000
  })
});

$('a[rel=popover]').popover({
  html: true,
  trigger: 'hover',
  placement: 'bottom',
  content: function(){return '<img src="'+$(this).data('img') + '" />';}
});