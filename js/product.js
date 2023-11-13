window.addEventListener("load", function () {
  $(".tap").click(function (e) {
    e.preventDefault();
    $(".tap").removeClass("active");
    $(this).addClass("active");
  });
})