$(document).ready(function(){
  var el = document.getElementsByClassName("discussion-tab")[0];
  el.addEventListener("click", function() {
    console.log("clicked");
    this.classList.toggle("pullup");
  });
  $(window).scroll(function() {
    var e = $(this).scrollTop();
    if (e > 200) {
      console.log("scroll" + e);
      $("#discussion").addClass("animate");
    }
  });

  $('li a').localScroll({duration:1500});
});