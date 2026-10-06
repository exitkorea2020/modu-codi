/* =========================================================
   모두의코디 - 상품 데이터
   data/products.js

   셀러 추천 / 참여런웨이 / 장바구니에서
   공통으로 사용할 기본 상품 데이터
========================================================= */

window.MODU_PRODUCTS = [
  {
    id: "linen-shirt",
    name: "화이트 린넨 셔츠",
    shortName: "린넨 셔츠",
    category: "상의",
    price: 39000,

    image: "images/runway/runway-item-01.png",

    color: "화이트",
    style: "데일리",
    description:
      "가볍고 깔끔하게 입기 좋은 화이트 린넨 셔츠입니다.",

    tags: ["데일리", "셔츠", "화이트"],

    rewardEnabled: true,
    rewardRate: 0.05
  },

  {
    id: "blue-shirt",
    name: "블루 데일리 셔츠",
    shortName: "블루 셔츠",
    category: "상의",
    price: 42000,

    image: "images/products/blue-shirt.png",

    color: "블루",
    style: "캐주얼",
    description:
      "청바지와 슬랙스 모두 편하게 코디하기 좋은 블루 셔츠입니다.",

    tags: ["블루", "셔츠", "캐주얼"],

    rewardEnabled: true,
    rewardRate: 0.05
  },

  {
    id: "beige-knit",
    name: "베이지 소프트 니트",
    shortName: "베이지 니트",
    category: "상의",
    price: 29000,

    image: "images/products/beige-knit.png",

    color: "베이지",
    style: "편안한룩",
    description:
      "부드러운 색감으로 다양한 하의와 자연스럽게 어울리는 니트입니다.",

    tags: ["니트", "베이지", "데일리"],

    rewardEnabled: true,
    rewardRate: 0.05
  },

  {
    id: "pink-blouse",
    name: "핑크 데일리 블라우스",
    shortName: "핑크 블라우스",
    category: "상의",
    price: 35000,

    image: "images/products/pink-blouse.png",

    color: "핑크",
    style: "여성스러운룩",
    description:
      "부드러운 핑크 색감으로 여성스러운 분위기를 살린 블라우스입니다.",

    tags: ["핑크", "블라우스", "여성스러운룩"],

    rewardEnabled: true,
    rewardRate: 0.05
  },

  {
    id: "wide-denim",
    name: "연청 와이드 데님",
    shortName: "와이드 데님",
    category: "하의",
    price: 49000,

    image: "images/runway/runway-item-02.png",

    color: "연청",
    style: "캐주얼",
    description:
      "여유 있는 실루엣으로 편안하게 입기 좋은 와이드 데님입니다.",

    tags: ["데님", "와이드", "연청"],

    rewardEnabled: true,
    rewardRate: 0.05
  },

  {
    id: "beige-slacks",
    name: "베이지 데일리 슬랙스",
    shortName: "베이지 슬랙스",
    category: "하의",
    price: 45000,

    image: "images/products/beige-slacks.png",

    color: "베이지",
    style: "모던",
    description:
      "단정한 핏으로 출근룩과 일상 코디에 모두 활용하기 좋은 슬랙스입니다.",

    tags: ["슬랙스", "베이지", "모던"],

    rewardEnabled: true,
    rewardRate: 0.05
  },

  {
    id: "cream-cardigan",
    name: "크림 데일리 가디건",
    shortName: "크림 가디건",
    category: "아우터",
    price: 36000,

    image: "images/products/cream-cardigan.png",

    color: "크림",
    style: "데일리",
    description:
      "상의 위에 가볍게 걸쳐 입기 좋은 부드러운 크림 컬러 가디건입니다.",

    tags: ["가디건", "크림", "아우터"],

    rewardEnabled: true,
    rewardRate: 0.05
  },

  {
    id: "white-sneakers",
    name: "화이트 데일리 스니커즈",
    shortName: "화이트 스니커즈",
    category: "신발",
    price: 59000,

    image: "images/products/white-sneakers.png",

    color: "화이트",
    style: "캐주얼",
    description:
      "다양한 데일리 코디에 편하게 매치하기 좋은 화이트 스니커즈입니다.",

    tags: ["스니커즈", "화이트", "캐주얼"],

    rewardEnabled: true,
    rewardRate: 0.05
  },

  {
    id: "ivory-bag",
    name: "아이보리 숄더백",
    shortName: "아이보리 가방",
    category: "액세서리",
    price: 48000,

    image: "images/runway/runway-item-03.png",

    color: "아이보리",
    style: "데일리",
    description:
      "밝은 컬러의 데일리 코디와 자연스럽게 어울리는 숄더백입니다.",

    tags: ["가방", "아이보리", "데일리"],

    rewardEnabled: true,
    rewardRate: 0.05
  },

  {
    id: "black-jacket",
    name: "블랙 모던 재킷",
    shortName: "블랙 재킷",
    category: "아우터",
    price: 69000,

    image: "images/products/black-jacket.png",

    color: "블랙",
    style: "모던",
    description:
      "깔끔한 실루엣으로 코디를 정돈해주는 블랙 데일리 재킷입니다.",

    tags: ["재킷", "블랙", "모던"],

    rewardEnabled: true,
    rewardRate: 0.05
  }
];


/* =========================================================
   편의 함수
========================================================= */

/* 상품 ID로 상품 하나 찾기 */
window.getModuProduct = function (productId) {
  return (
    window.MODU_PRODUCTS.find(function (product) {
      return product.id === productId;
    }) || null
  );
};


/* 가격을 한국 원화 형식으로 표시 */
window.formatModuPrice = function (price) {
  return Number(price || 0).toLocaleString("ko-KR") + "원";
};


/* 기존 코드와 새 코드 모두에서 사용할 수 있도록 별칭 제공 */
window.products = window.MODU_PRODUCTS;