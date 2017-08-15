$(function() {

    var slider = $('.slider'),
        sliderItem = $('.slick-slider'),
        sliderItemLength = sliderItem.length,
        autoPlayTrue = slider.data("sliderAutoRotation");// pobieranie data-setu

    console.log(sliderItem.length); // sprawdzamy ile jest slidow


    slider.slick({
        autoplay: true,
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


    var x  = slider.slick('slickCurrentSlide'); // odczytywanie indexu aktualnego slidu
    console.log(x);

function getCurrentSlide() {

        if(typeof(Storage) !== "undefined") {

            if (localStorage.currentSlider) {

                localStorage.currentSlider = Number(localStorage.currentSlider)+1;

                console.log("currentSlider w local stoage " +" " + localStorage.currentSlider);

                if( localStorage.currentSlider > sliderItemLength -1  ){ // jezeli odwiedziny na stronie przekraczaja ilosc slidow

                    localStorage.currentSlider = 0;

                    // return localStorage.currentSlider;
                }
                // console.log("local current slider " + " " + localStorage.currentSlider);
            } else {
                console.log('zmiennej currentSlider nie ma jeszcze w local storage');
                localStorage.currentSlider = 0;
            }

        } else {
           console.log('zmien przegladerke mordo');
        }
    }


    function refreshRotationFirstSlide() {
    slider.slick('goTo',localStorage.currentSlider);
    // console.log('movefirstslide funkcja');
    }

    slider.on('init' , function () {
        console.log("eloo");
    });



    slider.on('afterChange', function(event, slick, direction){

        console.log(localStorage.currentSlider +' local storge');
        now = $(this).slick('slickCurrentSlide');
        // localStorage.currentSlider ++ ;
        console.log(now +" "+ 'now');
        if(localStorage.currentSlider>3){
            localStorage.currentSlider = 0 ;
        }


        if(  now == (localStorage.currentSlider) ){
            console.log(localStorage.currentSlider + "cuurentslider  w local storge");
            slider.slick("pause");

            console.log('stop');
        }



    });

    getCurrentSlide();
    refreshRotationFirstSlide();

   // localStorage.clear();

});