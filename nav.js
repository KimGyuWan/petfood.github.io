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

  $(function(){
    $("#gnb a, #popup a").click(function(e){
        e.preventDefault();
        var targetSection = $(this).attr("href"); //this 즉 a의 href는 #slide의 값을 문자열로 준다 변수에
        console.log(targetSection)
        $("body, html").stop(true, true).animate({ scrollTop : $(targetSection).offset().top }) //그리고 여기서 $(변수)를 해주는 순간 문자열에서 객체로 변한다
        $("#gnb a").removeClass('on')
        $(this).addClass('on')

        
    })

    $(window).scroll(function(){
            if(  $(window).scrollTop() > 10    ){
                 $("body").addClass("scroll")
            }else{
                $("body").removeClass("scroll")
            }
    })
  })
  