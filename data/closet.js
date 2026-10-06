/* =========================================================
   모두의코디 - 나만의 옷장 데이터
   data/closet.js

   MVP 기본 제공
   - 상의 10장
   - 아우터 10장
   - 레깅스/스타킹 10장
   - 바지/치마 10장
   = 총 40장

   각 카테고리 10장 추가 시
   월 990원 추가
========================================================= */


/* =========================================================
   기본 설정
========================================================= */

window.MODU_CLOSET_CONFIG = {
  title: "나만의 옷장",

  /* 기본 실사형 모델 */
  baseModel: "images/models/my-model-01.png",

  /* 기본 저장공간 */
  freePerCategory: 10,
  totalFreeItems: 40,

  /* 추가 저장공간 */
  extraUnit: 10,
  extraMonthlyPrice: 990,

  extraStorageMessage:
    "기본 저장공간 10개를 모두 사용했습니다. 10개 추가 시 월 990원",

  categories: [
    {
      id: "tops",
      label: "상의",
      icon: "👕",
      layerOrder: 40
    },
    {
      id: "outer",
      label: "아우터",
      icon: "🧥",
      layerOrder: 50
    },
    {
      id: "leggings",
      label: "레깅스/스타킹",
      icon: "🩰",
      layerOrder: 20
    },
    {
      id: "bottoms",
      label: "바지/치마",
      icon: "👖",
      layerOrder: 30
    }
  ]
};

/* =========================================================
   AI 가상피팅 이용권 설정
========================================================= */

window.MODU_TRYON_CONFIG = {

  /* 매월 무료 가상피팅 */
  monthlyFreeLimit: 30,

  /* 유료 크레딧 */
  creditPackAmount: 100,
  creditPackPrice: 10000,

  /* 가상피팅 1회 사용 크레딧 */
  creditPerTryOn: 3,

  /* 브라우저 저장용 이름 */
  storageKey: "modu-tryon-usage"
};
/* =========================================================
   상의 10장
========================================================= */

var tops = [
  {
    id: "top-01",
    category: "tops",
    title: "화이트 데일리 티셔츠",
    image: "images/closet/tops/top-01.png",
    layerImage: "images/closet/tops/top-01.png"
  },
  {
    id: "top-02",
    category: "tops",
    title: "블랙 슬림 티셔츠",
    image: "images/closet/tops/top-02.png",
    layerImage: "images/closet/tops/top-02.png"
  },
  {
    id: "top-03",
    category: "tops",
    title: "스트라이프 셔츠",
    image: "images/closet/tops/top-03.png",
    layerImage: "images/closet/tops/top-03.png"
  },
  {
    id: "top-04",
    category: "tops",
    title: "크림 블라우스",
    image: "images/closet/tops/top-04.png",
    layerImage: "images/closet/tops/top-04.png"
  },
  {
    id: "top-05",
    category: "tops",
    title: "블랙 하이넥",
    image: "images/closet/tops/top-05.png",
    layerImage: "images/closet/tops/top-05.png"
  },
  {
    id: "top-06",
    category: "tops",
    title: "그레이 니트",
    image: "images/closet/tops/top-06.png",
    layerImage: "images/closet/tops/top-06.png"
  },
  {
    id: "top-07",
    category: "tops",
    title: "아이보리 스웨터",
    image: "images/closet/tops/top-07.png",
    layerImage: "images/closet/tops/top-07.png"
  },
  {
    id: "top-08",
    category: "tops",
    title: "그레이 집업",
    image: "images/closet/tops/top-08.png",
    layerImage: "images/closet/tops/top-08.png"
  },
  {
    id: "top-09",
    category: "tops",
    title: "핑크 니트",
    image: "images/closet/tops/top-09.png",
    layerImage: "images/closet/tops/top-09.png"
  },
  {
    id: "top-10",
    category: "tops",
    title: "화이트 포인트 탑",
    image: "images/closet/tops/top-10.png",
    layerImage: "images/closet/tops/top-10.png"
  }
];


/* =========================================================
   아우터 10장
========================================================= */

var outer = [
  {
    id: "outer-01",
    category: "outer",
    title: "크림 가디건",
    image: "images/closet/outer/outer-01.png",
    layerImage: "images/closet/outer/outer-01.png"
  },
  {
    id: "outer-02",
    category: "outer",
    title: "블랙 가디건",
    image: "images/closet/outer/outer-02.png",
    layerImage: "images/closet/outer/outer-02.png"
  },
  {
    id: "outer-03",
    category: "outer",
    title: "베이지 재킷",
    image: "images/closet/outer/outer-03.png",
    layerImage: "images/closet/outer/outer-03.png"
  },
  {
    id: "outer-04",
    category: "outer",
    title: "데님 재킷",
    image: "images/closet/outer/outer-04.png",
    layerImage: "images/closet/outer/outer-04.png"
  },
  {
    id: "outer-05",
    category: "outer",
    title: "블랙 재킷",
    image: "images/closet/outer/outer-05.png",
    layerImage: "images/closet/outer/outer-05.png"
  },
  {
    id: "outer-06",
    category: "outer",
    title: "그레이 가디건",
    image: "images/closet/outer/outer-06.png",
    layerImage: "images/closet/outer/outer-06.png"
  },
  {
    id: "outer-07",
    category: "outer",
    title: "아이보리 재킷",
    image: "images/closet/outer/outer-07.png",
    layerImage: "images/closet/outer/outer-07.png"
  },
  {
    id: "outer-08",
    category: "outer",
    title: "브라운 재킷",
    image: "images/closet/outer/outer-08.png",
    layerImage: "images/closet/outer/outer-08.png"
  },
  {
    id: "outer-09",
    category: "outer",
    title: "핑크 가디건",
    image: "images/closet/outer/outer-09.png",
    layerImage: "images/closet/outer/outer-09.png"
  },
  {
    id: "outer-10",
    category: "outer",
    title: "네이비 아우터",
    image: "images/closet/outer/outer-10.png",
    layerImage: "images/closet/outer/outer-10.png"
  }
];


/* =========================================================
   레깅스 / 스타킹 10장
========================================================= */

var leggings = [
  {
    id: "leggings-01",
    category: "leggings",
    title: "블랙 기본 레깅스",
    image: "images/closet/leggings/leggings-01.png",
    layerImage: "images/closet/leggings/leggings-01.png"
  },
  {
    id: "leggings-02",
    category: "leggings",
    title: "그레이 레깅스",
    image: "images/closet/leggings/leggings-02.png",
    layerImage: "images/closet/leggings/leggings-02.png"
  },
  {
    id: "leggings-03",
    category: "leggings",
    title: "네이비 레깅스",
    image: "images/closet/leggings/leggings-03.png",
    layerImage: "images/closet/leggings/leggings-03.png"
  },
  {
    id: "leggings-04",
    category: "leggings",
    title: "브라운 레깅스",
    image: "images/closet/leggings/leggings-04.png",
    layerImage: "images/closet/leggings/leggings-04.png"
  },
  {
    id: "leggings-05",
    category: "leggings",
    title: "아이보리 레깅스",
    image: "images/closet/leggings/leggings-05.png",
    layerImage: "images/closet/leggings/leggings-05.png"
  },
  {
    id: "leggings-06",
    category: "leggings",
    title: "블랙 스타킹",
    image: "images/closet/leggings/leggings-06.png",
    layerImage: "images/closet/leggings/leggings-06.png"
  },
  {
    id: "leggings-07",
    category: "leggings",
    title: "차콜 스타킹",
    image: "images/closet/leggings/leggings-07.png",
    layerImage: "images/closet/leggings/leggings-07.png"
  },
  {
    id: "leggings-08",
    category: "leggings",
    title: "베이지 스타킹",
    image: "images/closet/leggings/leggings-08.png",
    layerImage: "images/closet/leggings/leggings-08.png"
  },
  {
    id: "leggings-09",
    category: "leggings",
    title: "기모 레깅스",
    image: "images/closet/leggings/leggings-09.png",
    layerImage: "images/closet/leggings/leggings-09.png"
  },
  {
    id: "leggings-10",
    category: "leggings",
    title: "데일리 스타킹",
    image: "images/closet/leggings/leggings-10.png",
    layerImage: "images/closet/leggings/leggings-10.png"
  }
];


/* =========================================================
   바지 / 치마 10장
========================================================= */

var bottoms = [
  {
    id: "bottom-01",
    category: "bottoms",
    title: "연청 와이드 데님",
    image: "images/closet/bottoms/bottom-01.png",
    layerImage: "images/closet/bottoms/bottom-01.png"
  },
  {
    id: "bottom-02",
    category: "bottoms",
    title: "블랙 슬랙스",
    image: "images/closet/bottoms/bottom-02.png",
    layerImage: "images/closet/bottoms/bottom-02.png"
  },
  {
    id: "bottom-03",
    category: "bottoms",
    title: "베이지 슬랙스",
    image: "images/closet/bottoms/bottom-03.png",
    layerImage: "images/closet/bottoms/bottom-03.png"
  },
  {
    id: "bottom-04",
    category: "bottoms",
    title: "블루 데님",
    image: "images/closet/bottoms/bottom-04.png",
    layerImage: "images/closet/bottoms/bottom-04.png"
  },
  {
    id: "bottom-05",
    category: "bottoms",
    title: "블랙 미디 스커트",
    image: "images/closet/bottoms/bottom-05.png",
    layerImage: "images/closet/bottoms/bottom-05.png"
  },
  {
    id: "bottom-06",
    category: "bottoms",
    title: "아이보리 스커트",
    image: "images/closet/bottoms/bottom-06.png",
    layerImage: "images/closet/bottoms/bottom-06.png"
  },
  {
    id: "bottom-07",
    category: "bottoms",
    title: "체크 스커트",
    image: "images/closet/bottoms/bottom-07.png",
    layerImage: "images/closet/bottoms/bottom-07.png"
  },
  {
    id: "bottom-08",
    category: "bottoms",
    title: "그레이 와이드 팬츠",
    image: "images/closet/bottoms/bottom-08.png",
    layerImage: "images/closet/bottoms/bottom-08.png"
  },
  {
    id: "bottom-09",
    category: "bottoms",
    title: "브라운 롱 스커트",
    image: "images/closet/bottoms/bottom-09.png",
    layerImage: "images/closet/bottoms/bottom-09.png"
  },
  {
    id: "bottom-10",
    category: "bottoms",
    title: "네이비 데일리 팬츠",
    image: "images/closet/bottoms/bottom-10.png",
    layerImage: "images/closet/bottoms/bottom-10.png"
  }
];


/* =========================================================
   전체 옷장 데이터
========================================================= */

window.MODU_CLOSET = {
  tops: tops,
  outer: outer,
  leggings: leggings,
  bottoms: bottoms
};


/* =========================================================
   편의 함수
========================================================= */


/* 카테고리 데이터 가져오기 */
window.getClosetCategory = function (categoryId) {
  return window.MODU_CLOSET[categoryId] || [];
};


/* 옷 ID로 옷 찾기 */
window.getClosetItem = function (itemId) {
  var categoryIds = ["tops", "outer", "leggings", "bottoms"];

  for (var i = 0; i < categoryIds.length; i++) {
    var categoryItems = window.MODU_CLOSET[categoryIds[i]];

    var foundItem = categoryItems.find(function (item) {
      return item.id === itemId;
    });

    if (foundItem) {
      return foundItem;
    }
  }

  return null;
};


/* 카테고리 정보 찾기 */
window.getClosetCategoryInfo = function (categoryId) {
  return (
    window.MODU_CLOSET_CONFIG.categories.find(function (category) {
      return category.id === categoryId;
    }) || null
  );
};


/* 제목 수정
   나중에 app.js에서 모바일 제목 수정하기 버튼과 연결
*/
window.updateClosetItemTitle = function (itemId, newTitle) {
  var item = window.getClosetItem(itemId);

  if (!item) {
    return false;
  }

  var cleanTitle = String(newTitle || "").trim();

  if (!cleanTitle) {
    return false;
  }

  item.title = cleanTitle;

  return true;
};


/* 각 카테고리 사용량 */
window.getClosetUsage = function (categoryId) {
  var items = window.getClosetCategory(categoryId);

  return {
    used: items.length,
    freeLimit: window.MODU_CLOSET_CONFIG.freePerCategory,
    isFull:
      items.length >= window.MODU_CLOSET_CONFIG.freePerCategory
  };
};


/* 추가 저장공간 안내 */
window.getClosetExtraStorageInfo = function () {
  return {
    addCount: window.MODU_CLOSET_CONFIG.extraUnit,
    monthlyPrice: window.MODU_CLOSET_CONFIG.extraMonthlyPrice,
    message: window.MODU_CLOSET_CONFIG.extraStorageMessage
  };
};

/* =========================================================
   AI 가상피팅 이용횟수 / 크레딧 관리
========================================================= */


/* 현재 연도-월 구하기 */
window.getTryOnMonthKey = function () {

  var now = new Date();

  var year = now.getFullYear();

  var month = String(
    now.getMonth() + 1
  ).padStart(2, "0");

  return year + "-" + month;
};


/* 저장된 가상피팅 상태 불러오기 */
window.getTryOnState = function () {

  var config = window.MODU_TRYON_CONFIG;

  var defaultState = {
    month: window.getTryOnMonthKey(),
    freeUsed: 0,
    credits: 0
  };

  try {

    var saved = window.localStorage.getItem(
      config.storageKey
    );

    if (!saved) {
      return defaultState;
    }

    var state = JSON.parse(saved);

    /*
       새로운 달이 되면
       무료 이용횟수만 다시 30회 제공
       구매한 크레딧은 그대로 유지
    */
    if (
      state.month !==
      window.getTryOnMonthKey()
    ) {

      state.month =
        window.getTryOnMonthKey();

      state.freeUsed = 0;

      window.saveTryOnState(state);
    }

    return {
      month: state.month,
      freeUsed: Number(state.freeUsed || 0),
      credits: Number(state.credits || 0)
    };

  } catch (error) {

    return defaultState;
  }
};


/* 가상피팅 상태 저장 */
window.saveTryOnState = function (state) {

  try {

    window.localStorage.setItem(
      window.MODU_TRYON_CONFIG.storageKey,
      JSON.stringify(state)
    );

    return true;

  } catch (error) {

    return false;
  }
};


/* 현재 가상피팅 이용현황 */
window.getTryOnStatus = function () {

  var config = window.MODU_TRYON_CONFIG;
  var state = window.getTryOnState();

  var freeRemaining = Math.max(
    0,
    config.monthlyFreeLimit -
      state.freeUsed
  );

  return {

    monthlyFreeLimit:
      config.monthlyFreeLimit,

    freeUsed:
      state.freeUsed,

    freeRemaining:
      freeRemaining,

    credits:
      state.credits,

    creditPackAmount:
      config.creditPackAmount,

    creditPackPrice:
      config.creditPackPrice,

    creditPerTryOn:
      config.creditPerTryOn,

    /*
       100크레딧이면
       최대 33회 사용 가능
    */
    availableCreditTryOns:
      Math.floor(
        state.credits /
        config.creditPerTryOn
      )
  };
};


/* 가상피팅 1회 사용 */
window.useTryOn = function () {

  var config = window.MODU_TRYON_CONFIG;
  var state = window.getTryOnState();

  var freeRemaining =
    config.monthlyFreeLimit -
    state.freeUsed;


  /* 1. 무료 횟수가 남아있을 때 */
  if (freeRemaining > 0) {

    state.freeUsed += 1;

    window.saveTryOnState(state);

    var remainingAfterUse =
      Math.max(
        0,
        config.monthlyFreeLimit -
          state.freeUsed
      );

    return {

      success: true,

      paymentType: "free",

      freeRemaining:
        remainingAfterUse,

      credits:
        state.credits,

      /*
         30번째 무료 이용 직후
         0회가 되었는지 확인
      */
      justExhaustedFree:
        remainingAfterUse === 0,

      showCreditPopup:
        remainingAfterUse === 0
    };
  }


  /* 2. 무료 횟수 소진 후 크레딧 사용 */
  if (
    state.credits >=
    config.creditPerTryOn
  ) {

    state.credits -=
      config.creditPerTryOn;

    window.saveTryOnState(state);

    return {

      success: true,

      paymentType: "credit",

      freeRemaining: 0,

      credits:
        state.credits,

      justExhaustedFree: false,
      showCreditPopup: false
    };
  }


  /* 3. 무료도 없고 크레딧도 부족 */
  return {

    success: false,

    paymentType: "none",

    freeRemaining: 0,

    credits:
      state.credits,

    reason: "credit_required",

    showCreditPopup: true
  };
};


/*
   100크레딧 충전

   실제 서비스에서는
   결제 성공 후 이 함수를 실행
*/
window.addTryOnCreditPack = function () {

  var config = window.MODU_TRYON_CONFIG;
  var state = window.getTryOnState();

  state.credits +=
    config.creditPackAmount;

  window.saveTryOnState(state);

  return window.getTryOnStatus();
};
/* 기존 코드에서도 간단하게 접근할 수 있도록 별칭 */
window.closet = window.MODU_CLOSET;