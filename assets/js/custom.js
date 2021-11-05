jQuery(function ($) {
  ("use strict");

  //Menu
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar-light").addClass("menu-shrink");
    } else {
      $(".navbar-light").removeClass("menu-shrink");
    }
  });
  $(".navbar-nav .nav-item .nav-link").on("click", function (event) {
    let anchor = $(this);
    $("html", "body").stop.animate(
      {
        scrollTop: $(anchor.attr("href")).offset().top - 50,
      },
      1500
    );
    event.preventDefault();
  });
  // $(document).on("click", ".navbar-collapse.show", function (e) {
  //   if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
  //     $(this).collapse("hide");
  //   }
  // });

  //Banner Slider
  $(".banner-slider").owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    singleItem: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    navText: [
      "<i class='bx bx-left-arrow-alt'></i>",
      "<i class='bx bx-right-arrow-alt'></i>",
    ],
  });

  // Preloader
  jQuery(window).on("load", function () {
    jQuery(".loader").fadeOut(500);
  });
});
