$(window).on('resize',function(){
  // resize();
})
$(window).scroll(function(){
    if ($(window).scrollTop() >= 1400) {
        $('#header').addClass('fixed-header');
    }
    else {
        $('#header').removeClass('fixed-header');

    }
});

$("#js-menuButton").on("click", function() {
 $(this).toggleClass("active");
 $("#js-menu").slideToggle(400);
 if ($(window).width() < 768) {
   $("#js-menu li").hide();
   $("#js-menu li").each(function(i) {
     $(this)
       .delay(50 * i)
       .fadeIn(500);
   });
 }
 return false;
});


// photo slider/

$(function(){
  $('#list_photo').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: false,
    swipeToSlide: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 2000,
    fade: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false
  });

  //event_photo//
  $('#event_photo').slick({
    slidesToShow: 3,
    centerPadding: '2px',
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: 'linear',
    pauseOnFocus: false,
    arrows: false,
    dot: false
  });
});
