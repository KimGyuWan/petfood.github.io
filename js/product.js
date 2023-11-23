window.addEventListener("load", function () {
  $("#section-item .tap a").on("click", function (e) {
    e.preventDefault();
    $("#section-item .tap").removeClass("active");
    $(this).parent("#section-item .tap").addClass("active");

    var targetnum = $(this).attr('href');

    $("#section-item .listgroup .row li").removeClass("d-block");
    $(targetnum).addClass("d-block");
  });

  $("#section-item .tap").eq(0).find("a").click();

})