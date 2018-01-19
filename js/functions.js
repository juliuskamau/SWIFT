// JavaScript Document

$(document).ready(function () {
    $(".slider").hide();
    $(".slider:first").show();

    $("a.tab").click(function (event) {
        event.preventDefault();
        $("a.tab").removeClass('active');
        $("a.tab").addClass('inactive');
        $(this).removeClass('inactive').addClass('active');
        $(".slider").slideUp();
        var currSlider = $(this).attr('href');
        console.log("CUrr "+currSlider);
        $(".slider" + currSlider).slideDown();
    });


    /***** PAGE PRELOADER *******/

    // $('body').jpreLoader({

    // 		showSplash:false,
    // 		autoClose:true,
    // 		loaderVPos: '50%'

    // },function(){

    // 	initializePage();

    // });

    /***** END PAGE PRELOADER *******/

    $(window).resize(function (event) {

        if ($(window).width() > 810) {

            $(".mainNav").show();
            $(".menuOpener").removeClass("menuCloser");

        } else {

            if ($(".menuOpener").hasClass("menuCloser")) {

                $(".mainNav").show();

            } else {

                $(".mainNav").hide();

            }

        }


    });

    /***** INTIIALIZE FUNCTION *******/


    /***** PRODUCTS OVERLAY SECTION *******/

    $('.slider-pro').sliderPro({
        width: '100%',
        autoHeight: true,
        arrows: true,
        buttons: false,
        autoplay: true,
        breakpoints: {
            800: {
                width: '100%',
                autoHeight: true,
                height: 'auto'
            }

        }, init: function () {


        }

    });
    $('#mainSlider').sliderPro({
        width: '100%',
        height: '500',
        autoHeight: true,
        arrows: true,
        buttons: true,
        autoplay: true,
        breakpoints: {
            800: {
                width: '100%',
                autoHeight: true,
                height: 'auto'
            }
        }, init: function () {

        }
    });


    /***** END PRODUCTS OVERLAY SECTION *******/

    $(".menuOpener").click(function () {

        $(this).toggleClass("menuCloser");
        $(".mainNav").slideToggle();


    }, function () {

        $(this).toggleClass("menuCloser");
        $(".mainNav").slideToggle();

    });

    var smallCloud = $(".smallCloud");
    var smallShip = $(".smallShip");
    var largeCloud = $(".largeCloud");
    var largeShip = $(".largeShip");
    var yellowSun = $(".sun");
    var tractor = $(".tractor");

    var whiteCloud1 = $(".white1");
    var whiteCloud2 = $(".white2");
    var whiteCloud3 = $(".white3");
    var whiteCloud4 = $(".white4");
    var whiteCloud5 = $(".white5");

    TweenMax.to(smallCloud, 40, {left: "90%", repeat: -1, yoyo: true, repeatDelay: 0.5, ease: Linear.easeNone});
    TweenMax.to(largeCloud, 80, {right: "90%", repeat: -1, yoyo: true, repeatDelay: 0.5, ease: Linear.easeNone});
    TweenMax.to(smallShip, 1, {left: "15px", yoyo: true, repeat: -1, repeatDelay: 0.5, ease: Linear.easeNone});
    //TweenMax.to(largeShip, 2, {right:"60px", yoyo:true,repeat:-1, repeatDelay:0.5, ease:Linear.easeNone});
    TweenMax.to(yellowSun, 120, {right: "80%", repeat: -1, yoyo: true, repeatDelay: 0.5, ease: Linear.easeNone});

    // Check if skew is supported then animate tractor
    TweenMax.to(tractor, 20, {right: "100%", repeat: -1, yoyo: true, onRepeat: onRepeat, repeatDelay: 0.5, ease: Linear.easeNone});

    TweenMax.to(whiteCloud1, 40, {left: "90%", repeat: -1, yoyo: true, repeatDelay: 0.5, ease: Linear.easeNone});
    TweenMax.to(whiteCloud2, 50, {left: "90%", repeat: -1, yoyo: true, repeatDelay: 0.5, ease: Linear.easeNone});
    TweenMax.to(whiteCloud3, 30, {right: "400px", yoyo: true, repeat: -1, repeatDelay: 0.5, ease: Linear.easeNone});
    TweenMax.to(whiteCloud4, 55, {left: "85%", yoyo: true, repeat: -1, repeatDelay: 0.5, ease: Linear.easeNone});
    TweenMax.to(whiteCloud5, 60, {left: "80%", yoyo: true, repeat: -1, repeatDelay: 0.5, ease: Linear.easeNone});

    function onRepeat() {

        //alert("Animation Complete");

        tractor.toggleClass('reflect');

    }

});
