window.addEventListener("load", function () {
  var familyInfo = {
    button: "KOR",
    subList: [
      {
        text: "KOR",
        href: "#kr",
        activeClass: "on"
      },
      {
        text: "ENG",
        href: "#en",
        activeClass: ""
      }
    ]
  }

  // 1. 언어 출력
  // console.log(familyInfo.button);

  // 2. 중국어
  // console.log(familyInfo.subList[1].text);

  // 3. <a href="#kr" class="on">한국어</a>
  console.log(`<a href="${familyInfo.subList[0].href}" class="${familyInfo.subList[0].activeClass}">${familyInfo.subList[0].text}</a>`);

  // for (x in familyInfo.subList) {
  //   console.log(familyInfo.subList[x].text);
  // }

  $(function () {
    $("#gnb a, #popup a").click(function (e) {
      e.preventDefault();
      var targetSection = $(this).attr("href"); //this 즉 a의 href는 #slide의 값을 문자열로 준다 변수에
      console.log(targetSection);
      $("body, html").stop(true, true).animate({ scrollTop: $(targetSection).offset().top }); //그리고 여기서 $(변수)를 해주는 순간 문자열에서 객체로 변한다
      $("#gnb a").removeClass('on');
      $(this).addClass('on');
    })

    $(window).scroll(function () {
      if ($(window).scrollTop() > 10) {
        $("body").addClass("scroll");
      } else {
        $("body").removeClass("scroll");
      }
    })
  })


  let familyTag = "";
  familyTag += `
        <button>${familyInfo.button}</button>
        <ul>
        `;
  for (i in familyInfo.subList) {
    const x = familyInfo.subList[i];
    familyTag +=
      `<li><a href= "${x.href}" class="${x.activeClass}">
          ${x.text}</a></li>`;
  }

  familyTag += `</ul>`;

  document.getElementById("family").innerHTML = familyTag;

  /////////////////데이터를 가져와서 태그 완성하기 -> 동적개체/////////////////

  // html 페이지 안에 작성한 상태이고, 외부 페이지로 작성한 것이 아니기 때문에 생략해도 괜찮다.


  $("#family button").click(function () {
    $("#family").toggleClass("show");
  })

  let lengtext = "";

  $("#family a").click(function (e) {
    // 여기서 e는 click을 의미합니다.
    e.preventDefault(); // 태그가 가지고 있는 고유 기능을 제한시키는 함수
    lengtext = $(this).html();
    // $(this) : function을 실행시킨 객체를 의미
    // html() : 비어있다면 태그객체 가져와
    $("#family button").html(lengtext);
    // html(lengtext) : lengtext를 넣어서 출력
    $("#family").removeClass("show");
  })

  $("#logo").attr({ "src": "naver.jpg", "alt": "logo" });

})