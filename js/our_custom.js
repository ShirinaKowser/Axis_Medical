$(document).ready(function () {
    
    // banner slider 
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        
    });
    
    // team slider 
    $('.team-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        
    });
    
    // team two slider 
    
     $('.text_slide').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.slide_img'
     });
     $('.slide_img').slick({
         slidesToShow: 5,
         slidesToScroll: 1,
         asNavFor: '.text_slide',
         arrows: true,
         prevArrow: '.team_arrow_left',
         nextArrow: '.team_arrow_right',
         dots: false,
         centerMode: true,
         centerPadding: '0px',
         focusOnSelect: true
     });
    
    
    // video popup
    $('.venobox').venobox(); 
});