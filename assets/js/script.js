$(function() {

    var slider = $('.slider'),
        sliderItem = $('.slick-slider');

    // console.log(sliderItem.length); // sprawdzamy ile jest slidow


    var autoPlayTrue = slider.data("sliderAutoRotation");// pobieranie data-setu

    // console.log(autoPlayTrue);
    // console.log('dlugosc' + slider.slick('getSlick'));
    //
    // if(autoPlayTrue == true){
    //     console.log('dziala');
    // }else{
    //     console.log('nie dziala')
    // }
    // // autoPlayTrue = false;






    slider.slick({
        autoplay: autoPlayTrue,
        autoplaySpeed: 1000,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        accessibility: true,//Enables tabbing and arrow key navigation
        asNavFor: null, // Set the slider to be the navigation of other slider (Class or ID Name)
        fade: true
});
    var currentSlider = slider.slick('slickCurrentSlide'); // odczytywanie indexu aktualnego slidu
// console.log('slider');

console.log('current slider'+ " " + currentSlider);

function setFirstSlide() {
        if(typeof(Storage) !== "undefined") {
            if (localStorage.currentSlider) {
                localStorage.currentSlider = Number(localStorage.currentSlider)+1;
                console.log("currentSlider + 1" );
                if(localStorage.currentSlider > 4){
                    localStorage.currentSlider = 0 ;
                }
            } else {
                localStorage.currentSlider = 0;
                console.log('nic');
            }

        } else {
            $('.container').innerHTML = "Sorry, your browser does not support web storage...";
        }
    }
function moveFirstSlide() {
    slider.slick('goTo',localStorage.currentSlider);
}
    setFirstSlide();
    moveFirstSlide();
    console.log(localStorage.currentSlider);

    // localStorage.clear();

});