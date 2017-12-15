$(document).ready(function() {
  console.log("document is ready");
  // for aligning the footer at the right place when the page resizes
  var footerHeight = $(".footer").innerHeight();
  $("body").css("padding-bottom", footerHeight);
  $(window).on("resize", function() {
    // console.log("resize!!");
    footerHeight = $(".footer").innerHeight();
    console.log(footerHeight);
    $("body").css("padding-bottom", footerHeight - 1);
  });

  // for landing container animation
  // $(".landing-container").children('h1').css('display',"block");
  $(".landing-container")
    .children("h1")
    .addClass("slidel");
  //
  // $(".landing-container").children('p').css('display',"block");
  $(".landing-container")
    .children("p")
    .addClass("slider");

  //animation for members page
  $(".landing-container")
    .children("div")
    .addClass("slide-down");
  $(".landing-container")
    .children("div")
    .css("display", "inline-block");

  // for the discussion tab
  var el = document.getElementsByClassName("discussion-tab")[0];
  el.addEventListener("click", function() {
    console.log("clicked");
    this.classList.toggle("pullup");
  });
  $(window).scroll(function() {
    var e = $(this).scrollTop();
    if (e > 200) {
      // console.log("scroll" + e);
      $("#discussion").addClass("animate");
    }
  });
  // for the scrolling effect
  $("li a").localScroll({ duration: 1500 });
});
