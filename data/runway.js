/* =========================================================
   모두의코디 - 참여런웨이 데이터
   data/runway.js

   - 총 5명의 참여런웨이
   - 정면 / 오른쪽 / 뒷면 / 왼쪽 자동 전환
   - 참가자별 실제 착용상품 최대 3개
   - 모든 사진은 images/runway 사용
========================================================= */

window.MODU_RUNWAY = [

  /* =====================================================
     1번 참여자 - 기존 참여런웨이
  ===================================================== */
  {
    id: "runway-01",

    nickname: "코디러버",
    city: "청주",
    cityEnglish: "Cheongju",

    verifiedPurchase: true,

    rewardEnabled: true,
    rewardRate: 0.05,
    rewardText: "참여 리워드 최대 5%",

    frames: [
      {
        direction: "front",
        label: "정면",
        image: "images/runway/runway-front.png"
      },
      {
        direction: "right",
        label: "오른쪽",
        image: "images/runway/runway-right.png"
      },
      {
        direction: "back",
        label: "뒷면",
        image: "images/runway/runway-back.png"
      },
      {
        direction: "left",
        label: "왼쪽",
        image: "images/runway/runway-left.png"
      }
    ],

    autoplayInterval: 850,

    products: [
      {
        productId: "runway-01-item-01",
        name: "린넨 셔츠",
        role: "상의",
        image: "images/runway/runway-item-01.png",
        originalPrice: 49000,
        discountRate: 20,
        storeId: "cheongju-style"
      },
      {
        productId: "runway-01-item-02",
        name: "와이드 데님",
        role: "하의",
        image: "images/runway/runway-item-02.png",
        originalPrice: 59000,
        discountRate: 15,
        storeId: "seoul-daily"
      },
      {
        productId: "runway-01-item-03",
        name: "아이보리 가방",
        role: "액세서리",
        image: "images/runway/runway-item-03.png",
        originalPrice: 48000,
        discountRate: 10,
        storeId: "jeonju-emotion"
      }
    ],

    purchasedStores: [
      "cheongju-style",
      "seoul-daily",
      "jeonju-emotion"
    ],

    recommendationTitle: "이 코디를 추천하는 이유",

    recommendation:
      "화이트 셔츠와 와이드 데님 조합이라 편하게 입기 좋고 체형도 자연스럽게 커버돼요. 출근할 때와 주말 외출할 때 모두 활용하기 좋아서 자주 입는 코디예요.",

    shortReview:
      "편안하면서도 깔끔해서 자주 입는 코디예요!",

    likes: 286,
    views: 3240
  },


  /* =====================================================
     2번 참여자
  ===================================================== */
  {
    id: "runway-02",

    nickname: "데일리수아",
    city: "부산",
    cityEnglish: "Busan",

    verifiedPurchase: true,

    rewardEnabled: true,
    rewardRate: 0.05,
    rewardText: "참여 리워드 최대 5%",

    frames: [
      {
        direction: "front",
        label: "정면",
        image: "images/runway/runway-02-front.png"
      },
      {
        direction: "right",
        label: "오른쪽",
        image: "images/runway/runway-02-right.png"
      },
      {
        direction: "back",
        label: "뒷면",
        image: "images/runway/runway-02-back.png"
      },
      {
        direction: "left",
        label: "왼쪽",
        image: "images/runway/runway-02-left.png"
      }
    ],

    autoplayInterval: 850,

    products: [
      {
        productId: "runway-02-item-01",
        name: "데님 크롭 재킷",
        role: "아우터",
        image: "images/runway/runway-02-item-01.png",
        originalPrice: 69000,
        discountRate: 20,
        storeId: "busan-haeundae"
      },
      {
        productId: "runway-02-item-02",
        name: "화이트 데일리 티셔츠",
        role: "상의",
        image: "images/runway/runway-02-item-02.png",
        originalPrice: 29000,
        discountRate: 10,
        storeId: "seoul-daily"
      },
      {
        productId: "runway-02-item-03",
        name: "블랙 미니 스커트",
        role: "하의",
        image: "images/runway/runway-02-item-03.png",
        originalPrice: 39000,
        discountRate: 15,
        storeId: "incheon-urban"
      }
    ],

    purchasedStores: [
      "busan-haeundae",
      "seoul-daily",
      "incheon-urban"
    ],

    recommendationTitle: "이 코디를 추천하는 이유",

    recommendation:
      "데님 재킷과 화이트 티셔츠 조합이 가볍고 활동하기 좋아요. 블랙 미니 스커트로 포인트를 줘서 데이트나 주말 외출에도 잘 어울려요.",

    shortReview:
      "가볍게 입었는데 사진도 예쁘게 나와서 만족했어요!",

    likes: 241,
    views: 2870
  },


  /* =====================================================
     3번 참여자
  ===================================================== */
  {
    id: "runway-03",

    nickname: "오늘도예쁨",
    city: "전주",
    cityEnglish: "Jeonju",

    verifiedPurchase: true,

    rewardEnabled: true,
    rewardRate: 0.05,
    rewardText: "참여 리워드 최대 5%",

    frames: [
      {
        direction: "front",
        label: "정면",
        image: "images/runway/runway-03-front.png"
      },
      {
        direction: "right",
        label: "오른쪽",
        image: "images/runway/runway-03-right.png"
      },
      {
        direction: "back",
        label: "뒷면",
        image: "images/runway/runway-03-back.png"
      },
      {
        direction: "left",
        label: "왼쪽",
        image: "images/runway/runway-03-left.png"
      }
    ],

    autoplayInterval: 850,

    products: [
      {
        productId: "runway-03-item-01",
        name: "버건디 랩 원피스",
        role: "원피스",
        image: "images/runway/runway-03-item-01.png",
        originalPrice: 79000,
        discountRate: 20,
        storeId: "jeonju-emotion"
      },
      {
        productId: "runway-03-item-02",
        name: "베이지 숏 가디건",
        role: "아우터",
        image: "images/runway/runway-03-item-02.png",
        originalPrice: 49000,
        discountRate: 10,
        storeId: "cheongju-style"
      },
      {
        productId: "runway-03-item-03",
        name: "블랙 스타킹",
        role: "레깅스/스타킹",
        image: "images/runway/runway-03-item-03.png",
        originalPrice: 19000,
        discountRate: 0,
        storeId: "daejeon-city"
      }
    ],

    purchasedStores: [
      "jeonju-emotion",
      "cheongju-style",
      "daejeon-city"
    ],

    recommendationTitle: "이 코디를 추천하는 이유",

    recommendation:
      "버건디 원피스가 전체적인 분위기를 살려주고 가디건을 더하면 일교차가 있는 날에도 편해요. 스타킹까지 함께 코디하면 단정한 느낌으로 입을 수 있어요.",

    shortReview:
      "한 벌처럼 자연스럽게 잘 어울려서 특별한 날에도 좋아요!",

    likes: 318,
    views: 3610
  },


  /* =====================================================
     4번 참여자
  ===================================================== */
  {
    id: "runway-04",

    nickname: "공원산책룩",
    city: "강릉",
    cityEnglish: "Gangneung",

    verifiedPurchase: true,

    rewardEnabled: true,
    rewardRate: 0.05,
    rewardText: "참여 리워드 최대 5%",

    frames: [
      {
        direction: "front",
        label: "정면",
        image: "images/runway/runway-04-front.png"
      },
      {
        direction: "right",
        label: "오른쪽",
        image: "images/runway/runway-04-right.png"
      },
      {
        direction: "back",
        label: "뒷면",
        image: "images/runway/runway-04-back.png"
      },
      {
        direction: "left",
        label: "왼쪽",
        image: "images/runway/runway-04-left.png"
      }
    ],

    autoplayInterval: 850,

    products: [
      {
        productId: "runway-04-item-01",
        name: "베이지 트렌치 재킷",
        role: "아우터",
        image: "images/runway/runway-04-item-01.png",
        originalPrice: 89000,
        discountRate: 20,
        storeId: "gangneung-sea"
      },
      {
        productId: "runway-04-item-02",
        name: "화이트 소프트 블라우스",
        role: "상의",
        image: "images/runway/runway-04-item-02.png",
        originalPrice: 42000,
        discountRate: 10,
        storeId: "suwon-modern"
      },
      {
        productId: "runway-04-item-03",
        name: "블루 플레어 스커트",
        role: "하의",
        image: "images/runway/runway-04-item-03.png",
        originalPrice: 59000,
        discountRate: 15,
        storeId: "seoul-daily"
      }
    ],

    purchasedStores: [
      "gangneung-sea",
      "suwon-modern",
      "seoul-daily"
    ],

    recommendationTitle: "이 코디를 추천하는 이유",

    recommendation:
      "산책이나 여행할 때 편안하면서도 단정하게 입기 좋은 코디예요. 베이지 아우터와 블루 스커트의 색 조합이 자연스러워 야외에서도 잘 어울려요.",

    shortReview:
      "여행 사진에도 잘 어울리고 오래 입어도 편했어요!",

    likes: 205,
    views: 2520
  },


  /* =====================================================
     5번 참여자
  ===================================================== */
  {
    id: "runway-05",

    nickname: "오피스코디",
    city: "대전",
    cityEnglish: "Daejeon",

    verifiedPurchase: true,

    rewardEnabled: true,
    rewardRate: 0.05,
    rewardText: "참여 리워드 최대 5%",

    frames: [
      {
        direction: "front",
        label: "정면",
        image: "images/runway/runway-05-front.png"
      },
      {
        direction: "right",
        label: "오른쪽",
        image: "images/runway/runway-05-right.png"
      },
      {
        direction: "back",
        label: "뒷면",
        image: "images/runway/runway-05-back.png"
      },
      {
        direction: "left",
        label: "왼쪽",
        image: "images/runway/runway-05-left.png"
      }
    ],

    autoplayInterval: 850,

    products: [
      {
        productId: "runway-05-item-01",
        name: "네이비 테일러드 재킷",
        role: "아우터",
        image: "images/runway/runway-05-item-01.png",
        originalPrice: 99000,
        discountRate: 20,
        storeId: "daegu-style"
      },
      {
        productId: "runway-05-item-02",
        name: "핑크 새틴 블라우스",
        role: "상의",
        image: "images/runway/runway-05-item-02.png",
        originalPrice: 59000,
        discountRate: 15,
        storeId: "daejeon-city"
      },
      {
        productId: "runway-05-item-03",
        name: "블랙 슬랙스",
        role: "하의",
        image: "images/runway/runway-05-item-03.png",
        originalPrice: 69000,
        discountRate: 10,
        storeId: "incheon-urban"
      }
    ],

    purchasedStores: [
      "daegu-style",
      "daejeon-city",
      "incheon-urban"
    ],

    recommendationTitle: "이 코디를 추천하는 이유",

    recommendation:
      "재킷과 슬랙스를 기본으로 두고 핑크 블라우스로 밝은 포인트를 줬어요. 출근이나 미팅처럼 단정하게 입어야 하는 날 활용하기 좋은 코디예요.",

    shortReview:
      "격식은 갖추면서도 답답하지 않아서 출근할 때 좋아요!",

    likes: 267,
    views: 2980
  }

];


/* =========================================================
   참여런웨이 가격 계산
========================================================= */

/* 상품 판매가 자동 계산 */
window.getRunwaySalePrice = function (product) {

  if (!product) {
    return 0;
  }

  var originalPrice = Number(product.originalPrice || 0);
  var discountRate = Number(product.discountRate || 0);

  return Math.round(
    originalPrice * (100 - discountRate) / 100
  );
};


/* =========================================================
   참여런웨이 편의 함수
========================================================= */

/* ID로 참여런웨이 찾기 */
window.getModuRunway = function (runwayId) {

  return (
    window.MODU_RUNWAY.find(function (runway) {
      return runway.id === runwayId;
    }) || null
  );
};


/*
   참여런웨이에 연결된 상품 가져오기

   기존 app.js와 호환되도록
   {
     product,
     role,
     storeId
   }
   구조로 반환
*/
window.getRunwayProducts = function (runway) {

  if (!runway || !Array.isArray(runway.products)) {
    return [];
  }

  return runway.products.map(function (item) {

    var salePrice = window.getRunwaySalePrice(item);

    return {

      product: {
        id: item.productId,
        name: item.name,
        shortName: item.name,
        category: item.role,

        /* 기존 화면에서 product.price를 사용하므로 판매가 연결 */
        price: salePrice,

        originalPrice: item.originalPrice,
        discountRate: item.discountRate,

        image: item.image
      },

      role: item.role,
      storeId: item.storeId
    };

  });
};


/*
   참여런웨이 구매 매장 가져오기
   한 참여자당 최대 3개
*/
window.getRunwayStores = function (runway) {

  if (!runway || !Array.isArray(runway.purchasedStores)) {
    return [];
  }

  var storeList = window.MODU_STORES || [];

  return runway.purchasedStores

    .slice(0, 3)

    .map(function (storeId) {

      return (
        storeList.find(function (store) {
          return store.id === storeId;
        }) || null
      );

    })

    .filter(Boolean);
};


/* 기존/새 코드 모두에서 사용할 별칭 */
window.runways = window.MODU_RUNWAY;