$(document).ready(function() {
  var hover;
  $(".navbar-container ul li").hover(
    function() {
      // over
      // console.log("mouse in");
      hover = true;
      var height = $(this)
        .children(".sub_menu")
        .innerHeight();
      // console.log(height);
      height = height * -1;
      var prop = {
        bottom: height + "px",
        zIndex: 0
      };
      $(this)
        .children(".sub_menu")
        .css(prop);
    },
    function() {
      // out
      // console.log("mouse out");
      if (hover) {
        var prop = {
          bottom: "100%",
          zIndex: -2
        };
        $(this)
          .children(".sub_menu")
          .css(prop);
      }
    }
  );
  $(".sub_menu").hover(
    function() {
      // over
      // hover = true;
      console.log("mouse in");
    },
    function() {
      // out
      console.log("mouse out");

      if (hover) {
        var prop = {
          bottom: "100%",
          zIndex: -2
        };
        $(this).css(prop);
      }
      hover = false;
    }
  );
});
