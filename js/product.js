$(".tap").click(function () {
  $("a", this).preventDefault();
  $(".tap").removeClass("active");
  $(this).addClass("active");
});