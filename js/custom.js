// RESPONSIVE NAVIGATION
  $(document).ready(function () {

    $("#navbar").on("click", function() {
      $(".nveMenu").addClass("is-opened");
      $(".overlay").addClass("is-on");
    });

    $(".overlay").on("click", function() {
      $(this).removeClass("is-on");
      $(".nveMenu").removeClass("is-opened");
    });
  });
  // RESPONSIVE NAVIGATION

  //banner slider js

  $('.banner-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<img src="PSD/v5-assets/left.png">', '<img src="PSD/v5-assets/right.png">'],
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

//fashion slider

$('.fashion-slider').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  dots:false,
  navText : ["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          margin:10
      },
      600:{
          items:3,
          margin:10
      },
      1000:{
          items:8,
          margin:10
      },
      1600:{
          items:8,
          margin:0
      }
  }
})

// RECOMMEND FOR YOU SLIDER
$('.Recommended').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:3
      }
  }
})