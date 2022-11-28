$(function(){$('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:'<button type="button" class="slick-arrow slick-next"><img src="/images/forward.svg" alt="next"></img></button>',
    prevArrow:'<button type="button" class="slick-arrow slick-prev"><img src="/images/back.svg" alt="prev"></img></button>',
  });
});
$(function(){$('.response-slider').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});
});
$(document).ready(function(){
  $('.menu__btn').click(function(event){
    $('.menu__btn, .menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});
$(".menu__body a").click(function(){
  $(".menu__body.active").removeClass("active");
  $('body').removeClass('lock');
  $('.menu__btn').removeClass('active');
});
});