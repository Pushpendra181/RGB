const react = document.querySelector("#center");

react.addEventListener("mousemove", function (details) {
  var reactAngle = react.getBoundingClientRect();
  var insiderect = details.clientX - reactAngle.left;

  if (insiderect < reactAngle.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      reactAngle.width / 2,
      255,
      0,
      insiderect
    );
    gsap.to(react, {
      backgroundColor: `rgb( ${redColor},0 ,0)`,
      ease: Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
      reactAngle.width / 2,
      reactAngle.width,
      0,
      255,
      insiderect
    );
    gsap.to(react, {
      backgroundColor: `rgb( 0,0 ,${blueColor})`,
      ease: Power4,
    });
  }

  react.addEventListener("mouseleave", function () {
    gsap.to(react, {
      backgroundColor: "white",
    });
  });
});
