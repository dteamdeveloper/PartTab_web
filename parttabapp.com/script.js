// owl
$(document).ready(function () {
  $(".owl-image").owlCarousel({
    loop: true,
    dots: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });
});
$(document).ready(function () {
  $(".owl-testimonial").owlCarousel({
    loop: true,
    dots: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// torch
const hero = document.querySelector(".hero");
const light = hero.querySelector(".span-class");

function shine(e) {
  const {
    offsetWidth: width,
    offsetHeight: height,
    offsetLeft: left,
    offsetTop: top,
  } = this;
  let { offsetX: x, offsetY: y } = e;

  const xCenter = (left + width) / 2;
  const yCenter = (top + height) / 2;
  const angle =
    Math.atan2(e.pageX - xCenter, -(e.pageY - yCenter)) * (180 / Math.PI);

  light.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}

hero.addEventListener("mousemove", shine);
// animation
AOS.init();

// second tourch

$(document).on("mousemove", function (e) {
  const center = $(".center");
  const triangleWrapper = $(".triangle-wrapper");
  const triangle = $(".triangle");
  const centerOffset = center.offset();
  const centerX = centerOffset.left + center.width() / 2;
  const centerY = centerOffset.top + center.height() / 2;

  // Calculate the angle between the mouse position and the center of the circle
  const angle =
    Math.atan2(e.pageY - centerY, e.pageX - centerX) * (180 / Math.PI);

  // Move triangle along the orbit (rotate the wrapper to position it along the path)
  triangleWrapper.css({
    transform: `translate(-50%, -50%) rotate(${
      angle - 90
    }deg) translateX(90px)`, // Orbit with fixed angle
  });

  // Ensure the triangle always faces the center of the circle by rotating it accordingly
  triangle.css({
    transform: `translateX(-1155deg) translateY(15%) rotate(${160}deg)`, // Rotate triangle to always face center
  });
});
// mobile view navbar
function openNav() {
  document.getElementById("sideNav").style.left = "0";
  document.getElementById("overlay").classList.add("active");
}

// Function to close the side navigation
function closeNav() {
  document.getElementById("sideNav").style.left = "-100%";
  document.getElementById("overlay").classList.remove("active");
}
// remove class
$(document).ready(function () {
  function updateAOSAttributes() {
    // Check if the window width is 768px or less
    if ($(window).width() <= 768) {
      $(
        '[data-aos="fade-right"], [data-aos="fade-left"], [data-aos="fade-up"]'
      ).each(function () {
        $(this).removeAttr("data-aos-offset").removeAttr("data-aos-easing");

        $(this).attr("data-aos", "fade-up").attr("data-aos-duration", "1000");
      });
    }
  }

  // Run the function on document ready
  updateAOSAttributes();

  // Run the function on window resize
  $(window).resize(function () {
    updateAOSAttributes();
  });
});
