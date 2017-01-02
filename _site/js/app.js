$(document).ready(function () {
  $('.app-google-map').addClass('google-map-scroll-off');

  $('.app-map-overlay').on("mouseup", function() {
    $('.app-google-map').addClass('google-map-scroll-off');
  });
  $('.app-map-overlay').on("mousedown", function() {
    $('.app-google-map').removeClass('google-map-scroll-off');
  });
  $(".app-google-map").on("mouseleave", function() {
    $('.app-google-map').addClass('google-map-scroll-off');
  });
});
