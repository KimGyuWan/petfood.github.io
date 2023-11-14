var familyInfo = {
    button: "KOR",
    subList: [
      {
        text: "KOR",
        href: "http://www.naver.com",
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
  