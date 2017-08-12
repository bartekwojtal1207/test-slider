$(function() {

    var slider = $('.slider');
console.log(slider);
    slider.slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true

    });

console.log('slider')


});