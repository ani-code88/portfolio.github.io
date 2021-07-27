// Header Slider Script
      $("#partners-slider").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2500,
        nav: false,
        slideTransition: "linear",
        autoplaySpeed: 2500,
        dots: false,
        responsive: {
          0: {
            items: 3,
          },
          600: {
            items: 4,
          },
          1000: {
            items: 5,
          }
        }
      });