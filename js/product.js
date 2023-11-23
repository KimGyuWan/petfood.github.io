$(document).ready(function () {
  $("body").on("click", "#section-item .tap a", function (e) {
    e.preventDefault();

    var pnum = $(this).parent().index();
    var targetnum = $(this).attr('href');

    taba(pnum, targetnum);

  });

  function taba(idx, cls) {
    $("#section-item .tap").removeClass("active");
    $("#section-item .tap").eq(idx).addClass("active");

    $("#section-item .listgroup .row li").removeClass("d-block");
    $("#section-item .listgroup .row li" + cls).addClass("d-block");
  }
})