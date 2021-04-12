$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 800,
        adaptiveHeight: true,
        autoplay : true,
        autoplaySpeed: 500,
        fade: true,
        cssEase: "linear",
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"</button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      
    });
  });