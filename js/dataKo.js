const langKo = {
  slidebanner: [
    {
      h3: "반짝 배송 OPEN",
      p: "오늘 주문, 반짝하면 새벽 도착!",
      href: "",
      src: "./img/yeonsoo/slide1.png",
    },
    {
      h3: "설레는 봄 | 할인해 봄",
      p: "봄맞이 최대 50% 할인 혜택 받으세요",
      href: "",
      src: "./img/yeonsoo/slide2.png",
    },
    {
      h3: "신선함이 가득한 | 당일생산",
      p: "하림펫푸드는 사료가 아니다 | 음식이다",
      href: "",
      src: "./img/yeonsoo/slide3.png",
    },
    {
      h3: "댕냥이 | 동안 선발대회",
      p: "#하림팻푸드 댕냥이 동안선발대회 | 반려동물 자랑도 하고 간식도 받고!",
      href: "",
      src: "./img/yeonsoo/slide4.png",
    },
    {
      h3: "멍이냥이얌얌 | 리뷰 EVENT",
      p: "하림펫푸드 제품 리뷰 작성시 | 추첨을 통해 간식 샘플 증정",
      href: "",
      src: "./img/yeonsoo/slide5.png",
    },
  ],

  linebanner: {
    h2: "GOLD MEMBER | 골드멤버8가지혜택",
    i: [
      {
        cls: "bi bi-plus",
        span: "어린이날/크리스마스 연2회선물"

      },
      {
        cls: "bi-balloon-heart",
        span: "반려견/반려묘 생일케이크 쿠폰"
      },
      {
        cls: "bi bi-gift",
        span: "밥그릇+스쿱+턱받이 웰컴키트"
      },
      {
        cls: "bi bi-box2-heart",
        span: "제품 10개 구매시 8,000원 쿠폰"
      },
      {
        cls: "bi bi-ticket-perforated",
        span: "가장맛있는시간 30일 언제나 무료배송"
      },
      {
        cls: "bi bi-envelope-check",
        span: "생산과정 사진/영상 문자 발송 서비스"
      },
      {
        cls: "bi bi-cash-coin",
        span: "구매금액 5%적립"
      },
      {
        cls: "bi bi-headset",
        span: "펫파트너스 CS핫라인 서비스"
      },
    ]
  },

  footer: {
    box: [
      {
        h4: "COMPANY INFO",
        p: "㈜ 하림펫푸드 | 대표 : 민동기 | 충청남도 공주시 정안면 정안농공단지길 32-111 | 사업자 등록 번호 : 240-81-00698 | 통신판매업 신고 제 2017-충남공주-0042호 | 개인정보관리책임자 : 조준형 | FAX : 02-6933-4402"
      },
      {
        h4: "CUSTOMER CENTER",
        p: "080-850-0085 | Open : AM 09:00 ~ PM 05:00 | Lunch : PM 12:00 ~ PM 01:00 | 토,일,공휴일 휴무"
      }
    ],
    family: [
      {
        nm: "(주)하림",
        href: "https://www.harim.com/"
      },
      {
        nm: "하림몰",
        href: "https://harimmall.com/"
      },
      {
        nm: "선진",
        href: "https://www.sj.co.kr/"
      },
      {
        nm: "팜스코",
        href: "https://www.hypork.com/"
      },
      {
        nm: "주원산오리",
        href: "https://www.orimart.co.kr/"
      },
      {
        nm: "NS홈쇼핑",
        href: "http://nsmall.com/"
      },
      {
        nm: "맥시칸치킨",
        href: "http://www.mexican.co.kr/"
      },
      {
        nm: "디디치킨",
        href: "http://www.ddck.co.kr/"
      },
    ],
    tabicon: [
      {
        href: "",
        span: "페이스북",
        cls: "facebook"
      },
      {
        href: "",
        span: "인스타그램",
        cls: "ins"
      },
      {
        href: "",
        span: "유튜브",
        cls: "youtub"
      },
    ]
  }
}



$(document).ready(function () {

  let linebannerTag = ""; // 혜택 배너
  let linebannerText = "";

  let footerBox = ""; // footer 배너
  let footerFamily = "";
  let footerIcon = "";


  //라인베너 제목
  linebannerTag += `${langKo.linebanner.h2}`

  //라인베너 8가지 혜택관리

  for (x in langKo.linebanner.i) {
    linebannerText += `<li class="position-relative">
    <i class="${langKo.linebanner.i[x].cls}" class="ir-hidden">
    <span class="ir-hidden">${langKo.linebanner.i[x].span}</span>
    </i>
    </li>`
  }

  $("#line-banner h2").html(linebannerTag);
  $("#line-banner .eight").html(linebannerText);

  //footer
  for (x in langKo.footer.box) {
    footerBox += `<div><h4>${langKo.footer.box[x].h4}</h4><p>${langKo.footer.box[x].p}</p></div>`
  }

  for (x in langKo.footer.family) {
    footerFamily += `<li><a href="${langKo.footer.family[x].href}">${langKo.footer.family[x].nm}</a></li>`
  }

  for (x in langKo.footer.tabicon) {
    footerIcon += `<li class="langKo.footer.tabicon[x].cls"><a href="${langKo.footer.tabicon[x].href}"><span class="ir-hidden">${langKo.footer.tabicon[x].span}</span></a></li>`
  }

  $("#ft .info").html(footerBox);
  $("#family-list").html(footerFamily);
  $("#ft ul.icon").html(footerIcon);
})
