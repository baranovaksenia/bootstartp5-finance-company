jQuery(function ($) {
  ("use strict");

  //   //Menu
  //   $(window).on("scroll", function () {
  //     if ($(this).scrollTop() > 50) {
  //       $(".navbar-light").addClass("menu-shrink");
  //     } else {
  //       $(".navbar-light").removeClass("menu-shrink");
  //     }
  //   });
  //   $(".navbar-nav .nav-item .nav-link").on("click", function (event) {
  //     let anchor = $(this);
  //     $("html", "body").stop.animate(
  //       {
  //         scrollTop: $(anchor.attr("href")).offset().top - 50,
  //       },
  //       1500
  //     );
  //     event.preventDefault();
  //   });
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

  // Accordion
  const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });

  // Preloader
  jQuery(window).on("load", function () {
    jQuery(".loader").fadeOut(500);
  });

  // Smoth Scroll and PageUp
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });
  $("a[href^='#]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top + 400,
    });
  });
});

// // Smoth Scroll and pageup
// let anchors = document.querySelectorAll('#navbarSupportedContent a[href*="#"]');
// for (anchor of anchors) {
//   if (anchor) {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       anchorId = this.getAttribute("href");
//       document.querySelector(anchorId).scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     });
//   }
// }
