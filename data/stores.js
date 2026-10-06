/* =========================================================
   모두의코디 - 셀러 추천 매장 데이터
   data/stores.js

   지역 필터:
   서울 / 수도권 / 강원권 / 충청권 / 전라권 / 경상권 / 제주도
========================================================= */

window.MODU_STORES = [

  /* =========================
     1. 부산
  ========================= */
  {
    id: "busan-haeundae",
    title: "해운대멋",
    businessName: "올리브샵",
    name: "올리브샵",

    regionGroup: "경상권",
    region: "부산",
    city: "부산",
    cityEnglish: "Busan",
    citySymbol: "🌉",

    description:
      "바다와 도시 분위기에 잘 어울리는 편안하고 세련된 데일리 코디를 추천합니다.",

    ownerImage: "images/stores/busan-owner.png",

    likes: 142,
    views: 1600,
    distance: 230,

    rewardEnabled: true,
    rewardRate: 0.05,

    /* 기존 코드 호환용 */
    products: [
      "linen-shirt",
      "wide-denim",
      "ivory-bag"
    ],

    /* 실제 셀러 추천코디 상품 */
    lookProducts: [
      {
        id: "busan-item-01",
        name: "스카이블루 가디건",
        category: "아우터",
        image: "images/stores/busan-owner-item-01.png",
        originalPrice: 49000,
        discountRate: 10
      },
      {
        id: "busan-item-02",
        name: "크림 플레어 스커트",
        category: "하의",
        image: "images/stores/busan-owner-item-02.png",
        originalPrice: 39000,
        discountRate: 0
      }
    ]
  },


  /* =========================
     2. 청주
  ========================= */
  {
    id: "cheongju-style",
    title: "청주 감성샵",
    businessName: "미씨클럽",
    name: "미씨클럽",

    regionGroup: "충청권",
    region: "청주",
    city: "청주",
    cityEnglish: "Cheongju",
    citySymbol: "🏯",

    description:
      "편안한 착용감과 자연스러운 체형 커버를 살린 데일리 코디를 추천합니다.",

    ownerImage: "images/stores/cheongju-owner.png",

    likes: 128,
    views: 1200,
    distance: 1.2,

    rewardEnabled: true,
    rewardRate: 0.05,

    products: [
      "beige-knit",
      "beige-slacks",
      "cream-cardigan"
    ],

    lookProducts: [
      {
        id: "cheongju-item-01",
        name: "베이지 소프트 블라우스",
        category: "상의",
        image: "images/stores/cheongju-owner-item-01.png",
        originalPrice: 48000,
        discountRate: 20
      },
      {
        id: "cheongju-item-02",
        name: "블루 와이드 데님",
        category: "하의",
        image: "images/stores/cheongju-owner-item-02.png",
        originalPrice: 59000,
        discountRate: 10
      }
    ]
  },


  /* =========================
     3. 서울
  ========================= */
  {
    id: "seoul-daily",
    title: "서울 데일리룩",
    businessName: "LOOK",
    name: "LOOK",

    regionGroup: "서울",
    region: "서울",
    city: "서울",
    cityEnglish: "Seoul",
    citySymbol: "🌳",

    description:
      "출근부터 주말까지 자연스럽게 활용할 수 있는 깔끔한 데일리룩을 제안합니다.",

    ownerImage: "images/stores/seoul-owner.png",

    likes: 196,
    views: 2150,
    distance: 120,

    rewardEnabled: true,
    rewardRate: 0.05,

    products: [
      "blue-shirt",
      "black-jacket",
      "white-sneakers"
    ],

    lookProducts: [
      {
        id: "seoul-item-01",
        name: "크림 데일리 블라우스",
        category: "상의",
        image: "images/stores/seoul-owner-item-01.png",
        originalPrice: 48000,
        discountRate: 20
      },
      {
        id: "seoul-item-02",
        name: "연청 와이드 데님",
        category: "하의",
        image: "images/stores/seoul-owner-item-02.png",
        originalPrice: 90000,
        discountRate: 15
      }
    ]
  },


  /* =========================
     4. 인천
  ========================= */
  {
    id: "incheon-urban",
    title: "인천 어반룩",
    businessName: "라라샵",
    name: "라라샵",

    regionGroup: "수도권",
    region: "인천",
    city: "인천",
    cityEnglish: "Incheon",
    citySymbol: "⚓",

    description:
      "도심과 주말 나들이에 함께 입기 좋은 편안한 스타일을 제안합니다.",

    ownerImage: "images/stores/incheon-owner.png",

    likes: 117,
    views: 1080,
    distance: 138,

    rewardEnabled: true,
    rewardRate: 0.05,

    products: [
      "linen-shirt",
      "beige-slacks",
      "ivory-bag"
    ],

    lookProducts: [
      {
        id: "incheon-item-01",
        name: "코랄 데일리 가디건",
        category: "아우터",
        image: "images/stores/incheon-owner-item-01.png",
        originalPrice: 42000,
        discountRate: 10
      },
      {
        id: "incheon-item-02",
        name: "아이보리 플레어 스커트",
        category: "하의",
        image: "images/stores/incheon-owner-item-02.png",
        originalPrice: 39000,
        discountRate: 0
      }
    ]
  },


  /* =========================
     5. 수원
  ========================= */
  {
    id: "suwon-modern",
    title: "수원 모던데이",
    businessName: "데일리온",
    name: "데일리온",

    regionGroup: "수도권",
    region: "수원",
    city: "수원",
    cityEnglish: "Suwon",
    citySymbol: "🏯",

    description:
      "차분한 색감과 깔끔한 핏을 살린 데일리 코디를 추천합니다.",

    ownerImage: "images/stores/suwon-owner.png",

    likes: 153,
    views: 1320,
    distance: 96,

    rewardEnabled: true,
    rewardRate: 0.05,

    products: [
      "pink-blouse",
      "wide-denim",
      "cream-cardigan"
    ],

    lookProducts: [
      {
        id: "suwon-item-01",
        name: "블루 스트라이프 셔츠",
        category: "상의",
        image: "images/stores/suwon-owner-item-01.png",
        originalPrice: 49000,
        discountRate: 15
      },
      {
        id: "suwon-item-02",
        name: "베이지 와이드 슬랙스",
        category: "하의",
        image: "images/stores/suwon-owner-item-02.png",
        originalPrice: 59000,
        discountRate: 10
      }
    ]
  },


  /* =========================
     6. 강릉
  ========================= */
  {
    id: "gangneung-sea",
    title: "강릉 바다룩",
    businessName: "블루밍",
    name: "블루밍",

    regionGroup: "강원권",
    region: "강릉",
    city: "강릉",
    cityEnglish: "Gangneung",
    citySymbol: "🌊",

    description:
      "여행지에서도 일상에서도 자연스럽게 입기 좋은 코디를 소개합니다.",

    ownerImage: "images/stores/gangneung-owner.png",

    likes: 174,
    views: 1480,
    distance: 185,

    rewardEnabled: true,
    rewardRate: 0.05,

    products: [
      "blue-shirt",
      "wide-denim",
      "white-sneakers"
    ],

    /* 실제 상품이 1개이므로 1개만 표시 */
    lookProducts: [
      {
        id: "gangneung-item-01",
        name: "그린 랩 원피스",
        category: "원피스",
        image: "images/stores/gangneung-owner-item-01.png",
        originalPrice: 79000,
        discountRate: 15
      }
    ]
  },


  /* =========================
     7. 대전
  ========================= */
  {
    id: "daejeon-city",
    title: "대전 시티룩",
    businessName: "어반제이",
    name: "어반제이",

    regionGroup: "충청권",
    region: "대전",
    city: "대전",
    cityEnglish: "Daejeon",
    citySymbol: "🌿",

    description:
      "편안함과 단정함을 함께 살린 실용적인 데일리 스타일입니다.",

    ownerImage: "images/stores/daejeon-owner.png",

    likes: 109,
    views: 940,
    distance: 43,

    rewardEnabled: true,
    rewardRate: 0.05,

    products: [
      "beige-knit",
      "beige-slacks",
      "black-jacket"
    ],

    lookProducts: [
      {
        id: "daejeon-item-01",
        name: "베이지 모던 재킷",
        category: "아우터",
        image: "images/stores/daejeon-owner-item-01.png",
        originalPrice: 79000,
        discountRate: 20
      },
      {
        id: "daejeon-item-02",
        name: "블랙 슬리브리스",
        category: "상의",
        image: "images/stores/daejeon-owner-item-02.png",
        originalPrice: 29000,
        discountRate: 0
      },
      {
        id: "daejeon-item-03",
        name: "블랙 와이드 팬츠",
        category: "하의",
        image: "images/stores/daejeon-owner-item-03.png",
        originalPrice: 59000,
        discountRate: 10
      }
    ]
  },


  /* =========================
     8. 전주
  ========================= */
  {
    id: "jeonju-emotion",
    title: "전주 감성룩",
    businessName: "온더데이",
    name: "온더데이",

    regionGroup: "전라권",
    region: "전주",
    city: "전주",
    cityEnglish: "Jeonju",
    citySymbol: "🏯",

    description:
      "부드러운 색감과 여성스러운 분위기를 살린 코디를 추천합니다.",

    ownerImage: "images/stores/jeonju-owner.png",

    likes: 136,
    views: 1160,
    distance: 112,

    rewardEnabled: true,
    rewardRate: 0.05,

    products: [
      "pink-blouse",
      "cream-cardigan",
      "ivory-bag"
    ],

    lookProducts: [
      {
        id: "jeonju-item-01",
        name: "버건디 셔링 블라우스",
        category: "상의",
        image: "images/stores/jeonju-owner-item-01.png",
        originalPrice: 52000,
        discountRate: 15
      },
      {
        id: "jeonju-item-02",
        name: "크림 플레어 스커트",
        category: "하의",
        image: "images/stores/jeonju-owner-item-02.png",
        originalPrice: 49000,
        discountRate: 10
      }
    ]
  },


  /* =========================
     9. 대구
  ========================= */
  {
    id: "daegu-style",
    title: "대구 스타일픽",
    businessName: "메이룸",
    name: "메이룸",

    regionGroup: "경상권",
    region: "대구",
    city: "대구",
    cityEnglish: "Daegu",
    citySymbol: "🌅",

    description:
      "포인트 아이템 하나로 분위기를 살린 세련된 데일리룩입니다.",

    ownerImage: "images/stores/daegu-owner.png",

    likes: 163,
    views: 1390,
    distance: 174,

    rewardEnabled: true,
    rewardRate: 0.05,

    products: [
      "black-jacket",
      "wide-denim",
      "ivory-bag"
    ],

    lookProducts: [
      {
        id: "daegu-item-01",
        name: "라벤더 니트 재킷",
        category: "아우터",
        image: "images/stores/daegu-owner-item-01.png",
        originalPrice: 69000,
        discountRate: 20
      },
      {
        id: "daegu-item-02",
        name: "화이트 데일리 블라우스",
        category: "상의",
        image: "images/stores/daegu-owner-item-02.png",
        originalPrice: 42000,
        discountRate: 10
      },
      {
        id: "daegu-item-03",
        name: "블랙 스트레이트 팬츠",
        category: "하의",
        image: "images/stores/daegu-owner-item-03.png",
        originalPrice: 59000,
        discountRate: 15
      }
    ]
  },


  /* =========================
     10. 제주
  ========================= */
  {
    id: "jeju-daily",
    title: "제주 데일리",
    businessName: "오름샵",
    name: "오름샵",

    regionGroup: "제주도",
    region: "제주",
    city: "제주",
    cityEnglish: "Jeju",
    citySymbol: "🍊",

    description:
      "제주 여행부터 평범한 일상까지 편하게 즐길 수 있는 코디입니다.",

    ownerImage: "images/stores/jeju-owner.png",

    likes: 188,
    views: 1820,
    distance: 460,

    rewardEnabled: true,
    rewardRate: 0.05,

    products: [
      "linen-shirt",
      "wide-denim",
      "cream-cardigan"
    ],

    lookProducts: [
      {
        id: "jeju-item-01",
        name: "블루 데님 재킷",
        category: "아우터",
        image: "images/stores/jeju-owner-item-01.png",
        originalPrice: 69000,
        discountRate: 10
      },
      {
        id: "jeju-item-02",
        name: "옐로 플라워 원피스",
        category: "원피스",
        image: "images/stores/jeju-owner-item-02.png",
        originalPrice: 79000,
        discountRate: 20
      }
    ]
  }

];


/* =========================================================
   가격 자동 계산
========================================================= */

/* 정상가와 할인율을 이용해서 판매가 계산 */
window.getStoreSalePrice = function (product) {

  if (!product) {
    return 0;
  }

  var originalPrice = Number(product.originalPrice || 0);
  var discountRate = Number(product.discountRate || 0);

  return Math.round(
    originalPrice * (100 - discountRate) / 100
  );

};


/* 정상가 또는 할인율 수정 */
window.updateStoreProductPrice = function (
  storeId,
  productId,
  originalPrice,
  discountRate
) {

  var store = window.MODU_STORES.find(function (item) {
    return item.id === storeId;
  });

  if (!store || !store.lookProducts) {
    return false;
  }

  var product = store.lookProducts.find(function (item) {
    return item.id === productId;
  });

  if (!product) {
    return false;
  }

  product.originalPrice = Number(originalPrice || 0);
  product.discountRate = Math.max(
    0,
    Math.min(100, Number(discountRate || 0))
  );

  return true;
};


/* 코디 전체 정상가 */
window.getStoreLookOriginalTotal = function (store) {

  if (!store || !store.lookProducts) {
    return 0;
  }

  return store.lookProducts.reduce(function (total, product) {
    return total + Number(product.originalPrice || 0);
  }, 0);

};


/* 코디 전체 할인 판매가 */
window.getStoreLookSaleTotal = function (store) {

  if (!store || !store.lookProducts) {
    return 0;
  }

  return store.lookProducts.reduce(function (total, product) {
    return total + window.getStoreSalePrice(product);
  }, 0);

};


/* 기존 코드와 새 코드 모두에서 사용할 수 있도록 별칭 제공 */
window.stores = window.MODU_STORES;