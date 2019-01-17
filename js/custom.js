$('#html').circleProgress({
        value: 0.90,
        size: 200,
        fill: {
            color:"#30bae7"
        }
    }).on('circle-animation-progress',function(event,progress){
    $(this).find('span').html(parseInt(90*progress)+'<i>%</i>')
});
    
$('#css').circleProgress({
        value: 0.75,
        size: 200,
        fill: {
            color:"#d74680"
        }
    }).on('circle-animation-progress',function(event,progress){
    $(this).find('span').html(parseInt(75*progress)+'<i>%</i>')
});
 $('#java').circleProgress({
        value: 0.65,
        size: 200,
        fill: {
            color:"#15c7a8"
        }
    }).on('circle-animation-progress',function(event,progress){
    $(this).find('span').html(parseInt(65*progress)+'<i>%</i>')
});
 $('#php').circleProgress({
        value: 0.55,
        size: 200,
        fill: {
            color:"#eb7d4b"
        }
    }).on('circle-animation-progress',function(event,progress){
    $(this).find('span').html(parseInt(55*progress)+'<i>%</i>')
});


$(document).ready(

//**NICE SCROLL**//
  function() { 

    $("html").niceScroll({
        cursorcolor: "#d7d7d7",
			cursorwidth: "6px",
			cursorborder: "none",
			cursorborderradius: "8px",
			horizrailenabled: false,
			zindex: 10000
    });

  }

);
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });