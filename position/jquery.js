$('#show-modal').on("click", function () {
  $(".overlay, .notice").show();
});

$('.overlay, .close').on("click", function () {
  $(".overlay, .notice").hide();
});