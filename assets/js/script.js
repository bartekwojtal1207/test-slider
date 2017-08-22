$(function() {

    var slider = $('.slider'),
        sliderItem = $('.slick-slider'),
        sliderItemLength = sliderItem.length,
        autoPlayTrue = slider.data("sliderAutoRotation");// pobieranie data-setu

    console.log(sliderItem.length); // sprawdzamy ile jest slidow
    console.log(slider);

    slider.slick({
        autoplay: false,
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

                localStorage.firstPosition = slider.slick('slickCurrentSlide');

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
    var a = $('a');
    console.log(a);

    // function test() {


    // console.log('before url' + before );

    // if(localStorage.before ){
    //     console.log('before url istnieje' + localStorage.before);
    // }else{
    //     console.log('before url nie istnieje !!!!');
    //     localStorage.before = document.URL;
    // }
    //
    // localStorage.current = document.URL;
    //
    // if(localStorage.before === localStorage.current){
    //     console.log('teraz linki sa takie same');
    // }else{
    //     console.log('teraz linki nie sa takiem same !!!!');
    //     localStorage.clear();
    //
    //     console.log('startujemy od zera')
    // }


    if(localStorage.zmiana) {
        console.log('jest zmiana dwa ');
        localStorage.zmiana = localStorage.zmiana + 1;

    }else {
        localStorage.setItem('zmiana',Number(1));
        console.log('nie ma zmiany')
    }

    a.each(function () {
        console.log($(this));
        a.on('click',function (e) {
            localStorage.clear();
            console.log('clik');

        })
    });


    console.log(localStorage);




    // }

    // test();







    slider.on('afterChange', function(event, slick, direction){




    });

    getCurrentSlide();
    refreshRotationFirstSlide();

   // localStorage.clear();

});