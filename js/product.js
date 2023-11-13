$(document).ready(
  function () {

    $(".tap a").click(function (e) {
      e.preventDefault();
      $(".tap").removeClass("active");
      $(this).parent(".tap").addClass("active");

      var targetnum = $(this).attr('href');
      $(".listgroup .row li").removeClass("d-block");
      $(targetnum).addClass("d-block");
    });

    $(".tap").eq(0).find("a").click();
  }
)