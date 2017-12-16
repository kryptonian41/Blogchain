$(document).ready(function() {
  var hover,flag=0;
  $(".navbar-container ul li").hover(
    function() {
      // over
      console.log("mouse in");
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
      console.log("mouse out");
      flag=1;
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
      // hover = false;
      console.log("mouse in submenu");
    },
    function() {
      // out
      console.log("mouse out submenu");
      // hover = true;      
      if (!hover && flag==1) {
        var prop = {
          bottom: "100%",
          zIndex: -2
        };
        $(this).css(prop);
      }
    }
  );
});
