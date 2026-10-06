/* =========================================================
   모두의코디 - 최종 통합 JavaScript
   js/app.js
========================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    /* =====================================================
       1. 기본 데이터
    ===================================================== */
    var stores = Array.isArray(window.MODU_STORES) ? window.MODU_STORES : [];
    var products = Array.isArray(window.MODU_PRODUCTS) ? window.MODU_PRODUCTS : [];
    var runways = Array.isArray(window.MODU_RUNWAY) ? window.MODU_RUNWAY : [];
    var closet = window.MODU_CLOSET || {
      tops: [],
      outer: [],
      leggings: [],
      bottoms: []
    };
    var closetConfig = window.MODU_CLOSET_CONFIG || {
      baseModel: "images/models/my-model-01.png",
      freePerCategory: 10,
      totalFreeItems: 40,
      extraUnit: 10,
      extraMonthlyPrice: 990,
      categories: []
    };

    /* =====================================================
       2. 앱 상태
    ===================================================== */
    var state = {
      currentScreen: 1,
      selectedRegion: "전체",
      selectedSort: "likes",
      selectedStoreId: null,
      selectedProductId: null,
      pendingCartProductId: null,
      cart: [],
      selectedCloset: {
        tops: null,
        outer: null,
        leggings: null,
        bottoms: null
      },
      editingClosetItemId: null,
      runwayTimers: [],
      toastTimer: null
    };

    /* =====================================================
       3. DOM
    ===================================================== */
    var screenNodes = Array.from(document.querySelectorAll(".screen"));
    var bottomNavigation = document.getElementById("bottom-navigation");
    var storeList = document.getElementById("store-list");
    var shopProductList = document.getElementById("shop-product-list");
    var runwayFeed = document.getElementById("runway-feed");
    var closetCategoryContainer = document.getElementById("closet-category-container");
    var cartList = document.getElementById("cart-list");
    var cartConfirmModal = document.getElementById("cart-confirm-modal");
    var cartConfirmProductName = document.getElementById("cart-confirm-product-name");
    var cartModalCancel = document.getElementById("cart-modal-cancel");
    var cartModalConfirm = document.getElementById("cart-modal-confirm");
    var closetTitleModal = document.getElementById("closet-title-modal");
    var closetTitleInput = document.getElementById("closet-title-input");
    var closetTitleCancel = document.getElementById("closet-title-cancel");
    var closetTitleSave = document.getElementById("closet-title-save");
    var toastMessage = document.getElementById("toast-message");
    /* 회원가입 / 회원유형 선택 */
var signupIntroModal =
document.getElementById("signup-intro-modal");

var signupCloseButton =
document.getElementById("signup-close-button");

var quickSignupNaver =
document.getElementById("quick-signup-naver");

var quickSignupKakao =
document.getElementById("quick-signup-kakao");

var signupRoleIndividual =
document.getElementById("signup-role-individual");

var signupRolePartner =
document.getElementById("signup-role-partner");
/* 가상피팅 이용현황 */
var tryonFreeRemaining =
  document.getElementById("tryon-free-remaining");

var tryonProgressBar =
  document.getElementById("tryon-progress-bar");

var tryonUsageMessage =
  document.getElementById("tryon-usage-message");

var tryonCreditModal =
  document.getElementById("tryon-credit-modal");

var tryonCreditLater =
  document.getElementById("tryon-credit-later");

var tryonCreditBuy =
  document.getElementById("tryon-credit-buy");
    /* =====================================================
       4. 공통 도우미
    ===================================================== */
    function escapeHtml(value) {
      return String(value == null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function formatPrice(price) {
      if (typeof window.formatModuPrice === "function") {
        return window.formatModuPrice(price);
      }
      return Number(price || 0).toLocaleString("ko-KR") + "원";
    }

    function getProduct(productId) {

      /* 1. 기존 products.js 상품 찾기 */
      var basicProduct = null;
    
      if (typeof window.getModuProduct === "function") {
        basicProduct = window.getModuProduct(productId);
      }
    
      if (!basicProduct) {
        basicProduct = products.find(function (product) {
          return product.id === productId;
        }) || null;
      }
    
      if (basicProduct) {
        return basicProduct;
      }
    
    
      /* 2. 샵 파트너 실제 착장 상품 찾기 */
      for (var i = 0; i < stores.length; i += 1) {
    
        var lookProducts = Array.isArray(stores[i].lookProducts)
          ? stores[i].lookProducts
          : [];
    
        var storeProduct = lookProducts.find(function (product) {
          return product.id === productId;
        });
    
        if (storeProduct) {
    
          var storeOriginalPrice =
            Number(storeProduct.originalPrice || 0);
    
          var storeDiscountRate =
            Number(storeProduct.discountRate || 0);
    
          var storeSalePrice =
            Math.round(
              storeOriginalPrice *
              (100 - storeDiscountRate) /
              100
            );
    
          return {
            id: storeProduct.id,
            name: storeProduct.name,
            shortName: storeProduct.name,
            category: storeProduct.category || "상품",
    
            image: storeProduct.image,
    
            originalPrice: storeOriginalPrice,
            discountRate: storeDiscountRate,
            price: storeSalePrice,
    
            description:
              storeProduct.description ||
              "샵 파트너가 직접 착용하고 추천한 상품입니다."
          };
        }
      }
    
    
      /* 3. 참여런웨이 실제 구매 상품 찾기 */
      for (var r = 0; r < runways.length; r += 1) {
    
        var runwayProducts =
          Array.isArray(runways[r].products)
            ? runways[r].products
            : [];
    
        var runwayProduct = runwayProducts.find(function (product) {
          return product.productId === productId;
        });
    
        if (runwayProduct) {
    
          var runwayOriginalPrice =
            Number(runwayProduct.originalPrice || 0);
    
          var runwayDiscountRate =
            Number(runwayProduct.discountRate || 0);
    
          var runwaySalePrice =
            Math.round(
              runwayOriginalPrice *
              (100 - runwayDiscountRate) /
              100
            );
    
          return {
            id: runwayProduct.productId,
            name: runwayProduct.name,
            shortName: runwayProduct.name,
            category: runwayProduct.role || "상품",
    
            image: runwayProduct.image,
    
            originalPrice: runwayOriginalPrice,
            discountRate: runwayDiscountRate,
            price: runwaySalePrice,
    
            storeId: runwayProduct.storeId,
    
            description:
              "모두의코디 참여런웨이에서 실제 구매 인증된 코디 상품입니다."
          };
        }
      }
    
    
      return null;
    }

    function getStore(storeId) {
      return stores.find(function (store) {
        return store.id === storeId;
      }) || null;
    }

    function getClosetItem(itemId) {
      if (typeof window.getClosetItem === "function") {
        return window.getClosetItem(itemId);
      }

      var categoryIds = ["tops", "outer", "leggings", "bottoms"];
      for (var i = 0; i < categoryIds.length; i += 1) {
        var items = closet[categoryIds[i]] || [];
        var found = items.find(function (item) {
          return item.id === itemId;
        });
        if (found) return found;
      }
      return null;
    }

    function showToast(message) {
      if (!toastMessage) return;
      window.clearTimeout(state.toastTimer);
      toastMessage.textContent = message;
      toastMessage.classList.remove("hidden");
      state.toastTimer = window.setTimeout(function () {
        toastMessage.classList.add("hidden");
      }, 2200);
    }

    function setModalOpen(modal, isOpen) {
      if (!modal) return;
      modal.classList.toggle("hidden", !isOpen);
      modal.setAttribute("aria-hidden", isOpen ? "false" : "true");
    }

    function safeScrollTop() {
      try {
        window.scrollTo({ top: 0, behavior: "auto" });
      } catch (error) {
        window.scrollTo(0, 0);
      }
    }

    /* =====================================================
       5. 화면 이동 / 하단 메뉴
    ===================================================== */
    function getNavTargetForScreen(screenNumber) {
      if ([4, 5, 9].indexOf(screenNumber) !== -1) return 2;
      if ([6, 7, 8].indexOf(screenNumber) !== -1) return 7;
      if ([10, 11, 13, 16].indexOf(screenNumber) !== -1) return 16;
      if (screenNumber === 12) return 1;
      if ([14, 15].indexOf(screenNumber) !== -1) return null;
      return screenNumber;
    }

    function updateBottomNavigation(screenNumber) {
      if (!bottomNavigation) return;
      var target = getNavTargetForScreen(screenNumber);
      bottomNavigation.querySelectorAll(".bottom-nav-item").forEach(function (item) {
        item.classList.toggle(
          "active",
          target !== null && Number(item.dataset.navScreen) === target
        );
      });
    }

    function stopRunwayAutoplay() {
      state.runwayTimers.forEach(function (timerId) {
        window.clearInterval(timerId);
      });
      state.runwayTimers = [];
    }

    function showScreen(screenNumber, options) {
      options = options || {};
      var target = document.getElementById("screen-" + screenNumber);
      if (!target) return;

      if (state.currentScreen === 3 && screenNumber !== 3) {
        stopRunwayAutoplay();
      }

      screenNodes.forEach(function (screen) {
        screen.classList.remove("active-screen");
      });
      target.classList.add("active-screen");
      state.currentScreen = screenNumber;
      updateBottomNavigation(screenNumber);

      if (!options.keepScroll) safeScrollTop();
      if (screenNumber === 2) renderStores();
      if (screenNumber === 3) {
        renderRunwayFeed();
        window.setTimeout(startRunwayAutoplay, 80);
      }
      if (screenNumber === 10) {
        loadPartnerProductForm();
      }
      if (screenNumber === 4) renderShop();
      if (screenNumber === 7) {
        renderCloset();
        renderTryOnStatus();
      }
      if (screenNumber === 16) {
        renderMyPage();
      }
      if (screenNumber === 14) renderCart();
    }
    /* =====================================================
   회원 유형 / 마이페이지
===================================================== */
/* =====================================================
   첫 방문 회원가입 안내
===================================================== */

function getSavedUserRole() {

  try {

    var savedRole =
      window.localStorage.getItem(
        "modu-user-role"
      );

    if (
      savedRole === "individual" ||
      savedRole === "partner"
    ) {
      return savedRole;
    }

  } catch (error) {
    // 저장 불가 환경은 미가입으로 처리
  }

  return null;
}


function openSignupIntro() {

  if (!signupIntroModal) return;

  setModalOpen(
    signupIntroModal,
    true
  );
}


function closeSignupIntro() {

  if (!signupIntroModal) return;

  setModalOpen(
    signupIntroModal,
    false
  );
}


/* 회원 유형 선택 완료 */
function completeSignup(role) {

  if (
    role !== "individual" &&
    role !== "partner"
  ) {
    return;
  }


  if (
    typeof window.setModuUserRole ===
    "function"
  ) {

    window.setModuUserRole(role);

  } else {

    try {

      window.localStorage.setItem(
        "modu-user-role",
        role
      );

    } catch (error) {
      // 저장 실패 시 현재 세션에서만 진행
    }
  }


  try {
    window.localStorage.setItem(
      "modu-signup-complete",
      "yes"
    );

    /* 이전 개발 중 저장된 잘못된 가입 상태와 구분 */
    window.localStorage.setItem(
      "modu-signup-flow-version",
      "2026-08-25-v1"
    );
  } catch (error) {
    // 저장 불가 환경에서는 현재 세션만 진행
  }

  closeSignupIntro();

  renderMyPage();

  showScreen(16);


  if (role === "partner") {

    showToast(
      "샵 파트너로 시작했어요."
    );

  } else {

    showToast(
      "개인회원으로 시작했어요."
    );
  }
}
function getUserRole() {

  try {

    var savedRole =
      window.localStorage.getItem(
        "modu-user-role"
      );

    if (
      savedRole === "partner" ||
      savedRole === "individual"
    ) {
      return savedRole;
    }

  } catch (error) {
    // 저장 불가 환경은 기본 개인회원 사용
  }

  return "individual";
}


function renderMyPage() {

  var individualPanel =
    document.getElementById(
      "individual-my-panel"
    );

  var partnerPanel =
    document.getElementById(
      "partner-my-panel"
    );

  if (
    !individualPanel ||
    !partnerPanel
  ) {
    return;
  }


  var role =
    getUserRole();


  if (role === "partner") {

    individualPanel.classList.add(
      "hidden"
    );

    partnerPanel.classList.remove(
      "hidden"
    );

  } else {

    partnerPanel.classList.add(
      "hidden"
    );

    individualPanel.classList.remove(
      "hidden"
    );
  }
}


/*
   나중에 회원가입이 만들어지면
   회원가입 완료 시 이 함수를 사용
*/
window.setModuUserRole = function (role) {

  if (
    role !== "individual" &&
    role !== "partner"
  ) {
    return false;
  }

  try {

    window.localStorage.setItem(
      "modu-user-role",
      role
    );

  } catch (error) {
    return false;
  }

  renderMyPage();

  return true;
};
/* =====================================================
   가상피팅 이용현황 화면 표시
===================================================== */
function renderTryOnStatus() {

  if (typeof window.getTryOnStatus !== "function") {
    return;
  }

  var status = window.getTryOnStatus();


  /* 남은 무료 횟수 */
  if (tryonFreeRemaining) {
    tryonFreeRemaining.textContent =
      status.freeRemaining;
  }


  /* 진행바 */
  if (tryonProgressBar) {

    var percent =
      status.monthlyFreeLimit > 0
        ? (
            status.freeRemaining /
            status.monthlyFreeLimit
          ) * 100
        : 0;

    tryonProgressBar.style.width =
      Math.max(0, Math.min(100, percent)) + "%";
  }


  /* 안내 문구 */
  if (tryonUsageMessage) {

    if (status.freeRemaining > 0) {

      tryonUsageMessage.textContent =
        "이번 달 무료 가상피팅이 " +
        status.freeRemaining +
        "회 남아 있어요.";

    } else if (status.credits > 0) {

      tryonUsageMessage.textContent =
        "무료 이용을 모두 사용했어요. 현재 " +
        status.credits +
        "크레딧을 보유하고 있어요.";

    } else {

      tryonUsageMessage.textContent =
        "이번 달 무료 가상피팅을 모두 사용했어요.";
    }
  }
}
    window.showScreen = showScreen;

    /* =====================================================
       6. 셀러 추천 코디
    ===================================================== */
    function formatDistance(distance) {
      var value = Number(distance || 0);
      if (value < 10) {
        return value.toFixed(1).replace(/\.0$/, "") + "km";
      }
      return Math.round(value).toLocaleString("ko-KR") + "km";
    }

    function getFilteredSortedStores() {
      var list = stores.slice();

      if (state.selectedRegion !== "전체") {
        list = list.filter(function (store) {
          return store.regionGroup === state.selectedRegion;
        });
      }

      list.sort(function (a, b) {
        if (state.selectedSort === "distance") {
          return Number(a.distance || 0) - Number(b.distance || 0);
        }
        if (state.selectedSort === "views") {
          return Number(b.views || 0) - Number(a.views || 0);
        }
        return Number(b.likes || 0) - Number(a.likes || 0);
      });

      return list;
    }

    function renderStores() {

      if (!storeList) return;
    
      var list = getFilteredSortedStores();
    
    
      if (!list.length) {
    
        storeList.innerHTML =
          '<div class="feed-end-message">해당 지역의 셀러 코디를 준비 중입니다.</div>';
    
        return;
      }
    
    
      storeList.innerHTML = list.map(function (store, index) {
    
        var lookProducts =
          Array.isArray(store.lookProducts)
            ? store.lookProducts.slice(0, 3)
            : [];
    
    
        /*
          실제 등록된 상품만 표시
          1개면 1개
          2개면 2개
          3개면 3개
          빈칸은 만들지 않음
        */
        var lookProductHtml = lookProducts.map(function (product) {
    
          var originalPrice =
            Number(product.originalPrice || 0);
    
          var discountRate =
            Number(product.discountRate || 0);
    
          var salePrice =
            typeof window.getStoreSalePrice === "function"
              ? window.getStoreSalePrice(product)
              : Math.round(
                  originalPrice *
                  (100 - discountRate) /
                  100
                );
    
    
          var discountBadge =
            discountRate > 0
              ? `
                <span class="store-look-discount">
                  ${discountRate}%
                </span>
              `
              : "";
    
    
          return `
            <button
              type="button"
              class="store-look-product"
              data-store-product-id="${escapeHtml(product.id)}"
              aria-label="${escapeHtml(product.name)} 상품 보기"
            >
    
              <div class="store-look-image-wrap">
    
                <img
                  src="${escapeHtml(product.image)}"
                  alt="${escapeHtml(product.name)}"
                >
    
                ${discountBadge}
    
              </div>
    
              <span class="store-look-name">
                ${escapeHtml(product.name)}
              </span>
    
              <strong class="store-look-price">
                ${formatPrice(
                  discountRate > 0
                    ? salePrice
                    : originalPrice
                )}
              </strong>
    
            </button>
          `;
    
        }).join("");
    
    
        return `
          <article class="store-card pretty-store-card">
    
            <div class="store-photo-wrap">
    
              <img
                class="store-owner-image"
                src="${escapeHtml(store.ownerImage)}"
                alt="${escapeHtml(store.businessName)} 셀러 코디"
              >
    
              <div class="store-city-overlay">
    
                <span class="city-symbol">
                  ${escapeHtml(store.citySymbol || "📍")}
                </span>
    
                <span class="city-english">
                  ${escapeHtml(store.cityEnglish || store.city)}
                </span>
    
              </div>
    
            </div>
    
    
            <div class="store-info">
    
              <div class="store-rank-line">
    
                <span class="store-rank">
                  NO.${index + 1}
                </span>
    
                <span class="store-distance">
                  📍 ${formatDistance(store.distance)}
                </span>
    
              </div>
    
    
              <h3 class="store-title">
                ${escapeHtml(store.title)}
              </h3>
    
    
              <div class="store-badges">
    
                <span class="business-pill">
                  ${escapeHtml(store.businessName)}
                </span>
    
                <span class="region-pill">
                  ${escapeHtml(store.city)}
                </span>
    
              </div>
    
    
              <p class="store-description">
                ${escapeHtml(store.description)}
              </p>
    
    
              ${
                lookProducts.length
                  ? `
                    <div class="store-look-products">
                      ${lookProductHtml}
                    </div>
                  `
                  : ""
              }
    
    
              <div class="store-stats">
    
                <span>
                  ❤️ ${Number(store.likes || 0).toLocaleString("ko-KR")}
                </span>
    
                <span>
                  👀 ${Number(store.views || 0).toLocaleString("ko-KR")}
                </span>
    
              </div>
    
    
              <button
                type="button"
                class="store-enter-button"
                data-store-id="${escapeHtml(store.id)}"
              >
                온라인 매장 들어가기
              </button>
    
            </div>
    
          </article>
        `;
    
      }).join("");
    }

    /* =====================================================
       7. 온라인 매장
    ===================================================== */
    function setSelectedStore(storeId) {
      if (!getStore(storeId)) return;
      state.selectedStoreId = storeId;
      try {
        window.localStorage.setItem("modu-selected-store", storeId);
      } catch (error) {
        // 저장 불가 환경은 무시
      }
    }

    function restoreSelectedStore() {
      try {
        var saved = window.localStorage.getItem("modu-selected-store");
        if (saved && getStore(saved)) state.selectedStoreId = saved;
      } catch (error) {
        // 무시
      }

      if (!state.selectedStoreId && stores.length) {
        state.selectedStoreId = stores[0].id;
      }
    }

    function renderShop() {

      var store = getStore(state.selectedStoreId) || stores[0];
    
      if (!store) return;
    
      state.selectedStoreId = store.id;
    
    
      var cityLabel =
        document.getElementById("shop-city-label");
    
      var shopTitle =
        document.getElementById("shop-title");
    
      var businessName =
        document.getElementById("shop-business-name");
    
      var description =
        document.getElementById("shop-description");
    
    
      if (cityLabel) {
        cityLabel.textContent =
          (store.cityEnglish || store.city) +
          " · " +
          store.regionGroup;
      }
    
      if (shopTitle) {
        shopTitle.textContent = store.title;
      }
    
      if (businessName) {
        businessName.textContent = store.businessName;
      }
    
      if (description) {
        description.textContent = store.description;
      }
    
    
      if (!shopProductList) return;
    
    
      /* 새 셀러 착장상품 사용 */
      var storeProducts =
        Array.isArray(store.lookProducts)
          ? store.lookProducts
          : [];
    
    
      if (!storeProducts.length) {
    
        shopProductList.innerHTML =
          '<div class="feed-end-message">등록된 상품이 없습니다.</div>';
    
        return;
      }
    
    
      shopProductList.innerHTML =
        storeProducts.map(function (product) {
    
          var originalPrice =
            Number(product.originalPrice || 0);
    
          var discountRate =
            Number(product.discountRate || 0);
    
    
          var salePrice =
            typeof window.getStoreSalePrice === "function"
              ? window.getStoreSalePrice(product)
              : Math.round(
                  originalPrice *
                  (100 - discountRate) /
                  100
                );
    
    
          /*
            할인율 0%
            → 정상가만 표시
    
            할인율 있음
            → 판매가 + 할인율 + 정상가 표시
          */
          var priceInfo = "";
    
          if (discountRate > 0) {
    
            priceInfo = `
              <strong>
                ${formatPrice(salePrice)}
              </strong>
    
              <small>
                ${discountRate}% 할인 · 정상가 ${formatPrice(originalPrice)}
              </small>
    
              <small>
                ${escapeHtml(product.category || "상품")} · 최대 5% 적립
              </small>
            `;
    
          } else {
    
            priceInfo = `
              <strong>
                ${formatPrice(originalPrice)}
              </strong>
    
              <small>
                ${escapeHtml(product.category || "상품")} · 최대 5% 적립
              </small>
            `;
          }
    
    
          return `
            <button
              type="button"
              class="shop-product-card"
              data-product-id="${escapeHtml(product.id)}"
            >
    
              <img
                src="${escapeHtml(product.image)}"
                alt="${escapeHtml(product.name)}"
              >
    
              <h4>
                ${escapeHtml(product.name)}
              </h4>
    
              ${priceInfo}
    
            </button>
          `;
    
        }).join("");
    }

    /* =====================================================
       8. 상품 상세
    ===================================================== */
    function openProductDetail(productId) {

      var product = getProduct(productId);
    
      if (!product) return;
    
    
      state.selectedProductId = product.id;
    
    
      var image =
        document.getElementById("detail-product-image");
    
      var category =
        document.getElementById("detail-product-category");
    
      var name =
        document.getElementById("detail-product-name");
    
      var price =
        document.getElementById("detail-product-price");
    
      var description =
        document.getElementById("detail-product-description");
    
    
      /* 할인 표시용 */
      var discountRow =
        document.getElementById("detail-discount-row");
    
      var discountRateNode =
        document.getElementById("detail-discount-rate");
    
      var originalPriceNode =
        document.getElementById("detail-original-price");
    
    
      /* 기본 상품 정보 */
      if (image) {
        image.src = product.image;
        image.alt = product.name;
      }
    
      if (category) {
        category.textContent =
          product.category || "상품";
      }
    
      if (name) {
        name.textContent =
          product.name || "상품";
      }
    
    
      var salePrice =
        Number(product.price || 0);
    
      var originalPrice =
        Number(
          product.originalPrice ||
          product.price ||
          0
        );
    
      var discountRate =
        Number(product.discountRate || 0);
    
    
      /*
         할인상품
         → 할인율 + 정상가 + 판매가
    
         할인율 0%
         → 판매가만 표시
      */
      if (
        discountRate > 0 &&
        originalPrice > salePrice
      ) {
    
        if (discountRow) {
          discountRow.classList.remove("hidden");
        }
    
        if (discountRateNode) {
          discountRateNode.textContent =
            discountRate + "%";
        }
    
        if (originalPriceNode) {
          originalPriceNode.textContent =
            formatPrice(originalPrice);
        }
    
      } else {
    
        if (discountRow) {
          discountRow.classList.add("hidden");
        }
    
        if (discountRateNode) {
          discountRateNode.textContent = "";
        }
    
        if (originalPriceNode) {
          originalPriceNode.textContent = "";
        }
      }
    
    
      if (price) {
        price.textContent =
          formatPrice(salePrice);
      }
    
    
      if (description) {
        description.textContent =
          product.description ||
          "샵 파트너가 추천한 모두의코디 상품입니다.";
      }
    
    
      showScreen(5);
    }

    /* =====================================================
       9. 참여런웨이
    ===================================================== */
    function getRunwayProductsLocal(runway) {
      if (typeof window.getRunwayProducts === "function") {
        return window.getRunwayProducts(runway);
      }

      return (runway.products || []).map(function (item) {
        var product = getProduct(item.productId);
        if (!product) return null;
        return {
          product: product,
          role: item.role,
          storeId: item.storeId
        };
      }).filter(Boolean);
    }

    function getRunwayStoresLocal(runway) {
      if (typeof window.getRunwayStores === "function") {
        return window.getRunwayStores(runway);
      }

      return (runway.purchasedStores || [])
        .slice(0, 3)
        .map(getStore)
        .filter(Boolean);
    }

    function renderRunwayFeed() {
      if (!runwayFeed) return;
      stopRunwayAutoplay();

      if (!runways.length) {
        runwayFeed.innerHTML = '<div class="feed-end-message">참여런웨이 콘텐츠를 준비 중입니다.</div>';
        return;
      }

      runwayFeed.innerHTML = runways.map(function (runway, runwayIndex) {
        var frames = Array.isArray(runway.frames) ? runway.frames : [];
        var firstFrame = frames[0] || { image: "", label: "정면" };
        var runwayProducts = getRunwayProductsLocal(runway);
        var runwayStores = getRunwayStoresLocal(runway);

        var productHtml = runwayProducts.slice(0, 3).map(function (item) {
          return `
            <button
              type="button"
              class="runway-product-card"
              data-runway-product-id="${escapeHtml(item.product.id)}"
            >
              <img src="${escapeHtml(item.product.image)}" alt="${escapeHtml(item.product.name)}">
              <span class="runway-product-role">${escapeHtml(item.role)}</span>
              <span class="runway-product-name">${escapeHtml(item.product.shortName || item.product.name)}</span>
              <span class="runway-product-price">${formatPrice(item.product.price)}</span>
            </button>
          `;
        }).join("");

        var storeHtml = runwayStores.slice(0, 3).map(function (store) {
          return `
            <span class="runway-store-chip">
              ${escapeHtml(store.businessName)} · ${escapeHtml(store.city)}
            </span>
          `;
        }).join("");

        var purchaseBadge = runway.verifiedPurchase
          ? '<span class="purchase-verified">✓ 모두의코디 구매인증</span>'
          : "";

        var nextHint = runwayIndex < runways.length - 1
          ? "↓ 아래로 넘기면 다음 참여런웨이"
          : "새로운 참여런웨이가 계속 추가됩니다";

        return `
          <article
            class="runway-card"
            data-runway-id="${escapeHtml(runway.id)}"
            data-frame-index="0"
          >
            <div class="runway-visual">
              <img
                class="runway-frame-image"
                src="${escapeHtml(firstFrame.image)}"
                alt="${escapeHtml(runway.nickname + " 참여런웨이 " + firstFrame.label)}"
              >

              <div class="runway-overlay-top">
                <span class="runway-location">
                  📍 ${escapeHtml(runway.cityEnglish || runway.city)}
                </span>
                ${purchaseBadge}
              </div>

              <div class="runway-360-indicator">
                <span class="runway-360-dot"></span>
                <span class="runway-direction-label">
                  자동 360° · ${escapeHtml(firstFrame.label)}
                </span>
              </div>
            </div>

            <div class="runway-info-panel">
              <div class="runway-user-line">
                <div>
                  <strong>@${escapeHtml(runway.nickname)}</strong>
                  <div style="margin-top:4px;color:#9b8d94;font-size:9px;font-weight:700;">
                    ❤️ ${Number(runway.likes || 0).toLocaleString("ko-KR")}
                    · 👀 ${Number(runway.views || 0).toLocaleString("ko-KR")}
                  </div>
                </div>

                <span class="runway-reward-badge">
                  ${escapeHtml(runway.rewardText || "참여 리워드 최대 5%")}
                </span>
              </div>

              <div class="runway-products">
                ${productHtml}
              </div>

              <div class="runway-review-box">
                <strong>
                  ${escapeHtml(runway.recommendationTitle || "이 코디를 추천하는 이유")}
                </strong>

                <div class="runway-store-list">
                  ${storeHtml}
                </div>

                <p>
                  ${escapeHtml(runway.recommendation || runway.shortReview || "")}
                </p>
              </div>

              <div class="next-runway-hint">
                ${nextHint}
              </div>
            </div>
          </article>
        `;
      }).join("");
    }

    function startRunwayAutoplay() {
      stopRunwayAutoplay();
      if (state.currentScreen !== 3 || !runwayFeed) return;

      var reduceMotion = window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      var cards = Array.from(runwayFeed.querySelectorAll(".runway-card"));

      cards.forEach(function (card) {
        var runwayId = card.dataset.runwayId;
        var runway = runways.find(function (item) {
          return item.id === runwayId;
        });

        if (!runway || !Array.isArray(runway.frames) || runway.frames.length < 2) {
          return;
        }

        var frameImage = card.querySelector(".runway-frame-image");
        var directionLabel = card.querySelector(".runway-direction-label");
        var interval = Math.max(650, Number(runway.autoplayInterval || 900));

        var timerId = window.setInterval(function () {
          if (state.currentScreen !== 3) return;

          var currentIndex = Number(card.dataset.frameIndex || 0);
          var nextIndex = (currentIndex + 1) % runway.frames.length;
          var nextFrame = runway.frames[nextIndex];
          if (!frameImage || !nextFrame) return;

          frameImage.classList.add("frame-changing");

          window.setTimeout(function () {
            frameImage.src = nextFrame.image;
            frameImage.alt = runway.nickname + " 참여런웨이 " + nextFrame.label;
            card.dataset.frameIndex = String(nextIndex);

            if (directionLabel) {
              directionLabel.textContent = "자동 360° · " + nextFrame.label;
            }

            frameImage.classList.remove("frame-changing");
          }, 150);
        }, interval);

        state.runwayTimers.push(timerId);
      });
    }

    /* =====================================================
       10. 나만의 옷장
    ===================================================== */
    function getClosetCategoryInfoLocal(categoryId) {
      if (typeof window.getClosetCategoryInfo === "function") {
        return window.getClosetCategoryInfo(categoryId);
      }

      return (closetConfig.categories || []).find(function (category) {
        return category.id === categoryId;
      }) || null;
    }

    function getLayerElement(categoryId) {
      return document.getElementById("closet-layer-" + categoryId);
    }

    function syncClosetLayers() {
      ["leggings", "bottoms", "tops", "outer"].forEach(function (categoryId) {
        var layer = getLayerElement(categoryId);
        if (!layer) return;

        var selectedId = state.selectedCloset[categoryId];
        if (!selectedId) {
          layer.classList.add("hidden");
          layer.removeAttribute("src");
          return;
        }

        var item = getClosetItem(selectedId);
        if (!item) {
          layer.classList.add("hidden");
          layer.removeAttribute("src");
          return;
        }

        layer.src = item.layerImage || item.image;
        layer.alt = item.title + " 착장 레이어";
        layer.classList.remove("hidden");
      });
    }

    function renderCloset() {
      if (!closetCategoryContainer) return;

      var categoryIds = ["tops", "outer", "leggings", "bottoms"];

      closetCategoryContainer.innerHTML = categoryIds.map(function (categoryId) {
        var info = getClosetCategoryInfoLocal(categoryId) || {
          id: categoryId,
          label: categoryId,
          icon: "👗"
        };

        var items = Array.isArray(closet[categoryId]) ? closet[categoryId] : [];

        var itemHtml = items.map(function (item) {
          var isSelected = state.selectedCloset[categoryId] === item.id;

          return `
            <article
              class="closet-item-card${isSelected ? " selected" : ""}"
              data-closet-item-id="${escapeHtml(item.id)}"
              data-closet-category="${escapeHtml(categoryId)}"
            >
              <div class="closet-item-image-wrap">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.title)}">
              </div>

              <strong title="${escapeHtml(item.title)}">
                ${escapeHtml(item.title)}
              </strong>

              <div class="closet-item-actions">
                <button
                  type="button"
                  class="closet-wear-button"
                  data-wear-item="${escapeHtml(item.id)}"
                >
                  ${isSelected ? "벗기" : "입기"}
                </button>

                <button
                  type="button"
                  class="closet-edit-title-button"
                  data-edit-closet-title="${escapeHtml(item.id)}"
                >
                  수정
                </button>
              </div>
            </article>
          `;
        }).join("");

        return `
          <section class="closet-category-section" data-category-section="${escapeHtml(categoryId)}">
            <div class="closet-category-header">
              <div class="closet-category-title">
                <span>${escapeHtml(info.icon || "👗")}</span>
                <strong>${escapeHtml(info.label)}</strong>
              </div>

              <span class="closet-category-count">
                ${items.length} / ${Number(closetConfig.freePerCategory || 10)} · 옆으로 밀어보기 →
              </span>
            </div>

            <div class="closet-items-scroll">
              ${itemHtml}
            </div>
          </section>
        `;
      }).join("");

      syncClosetLayers();
    }
    function applyClosetLayer(categoryId, itemId) {

      var item = getClosetItem(itemId);
      var layer = getLayerElement(categoryId);
    
      if (!item || !layer) return;
    
    
      /* =====================================================
         이미 입고 있는 같은 옷을 누르면 벗기
         → 벗는 것은 가상피팅 횟수 차감 없음
      ===================================================== */
      if (state.selectedCloset[categoryId] === itemId) {
    
        state.selectedCloset[categoryId] = null;
    
        layer.classList.add("hidden");
        layer.removeAttribute("src");
    
        renderCloset();
    
        showToast(
          item.title + "을(를) 벗었어요."
        );
    
        return;
      }
    
    
      /* =====================================================
         새로운 옷을 입힐 때
         → 가상피팅 1회 사용
      ===================================================== */
    
      var tryOnResult = {
        success: true,
        paymentType: "free",
        showCreditPopup: false
      };
    
    
      if (typeof window.useTryOn === "function") {
    
        tryOnResult =
          window.useTryOn();
      }
    
    
      /* 무료 횟수도 없고 크레딧도 부족 */
      if (!tryOnResult.success) {
    
        renderTryOnStatus();
    
        setModalOpen(
          tryonCreditModal,
          true
        );
    
        return;
      }
    
    
      /* =====================================================
         실제 옷 입히기
      ===================================================== */
    
      state.selectedCloset[categoryId] =
        itemId;
    
    
      layer.src =
        item.layerImage ||
        item.image;
    
    
      layer.alt =
        item.title +
        " 착장 레이어";
    
    
      layer.classList.remove("hidden");
    
      layer.classList.remove(
        "layer-enter"
      );
    
      void layer.offsetWidth;
    
      layer.classList.add(
        "layer-enter"
      );
    
    
      renderCloset();
    
      renderTryOnStatus();
    
    
      /* =====================================================
         안내 메시지
      ===================================================== */
    
      if (
        tryOnResult.paymentType ===
        "credit"
      ) {
    
        showToast(
          item.title +
          "을(를) 입혀봤어요. · 남은 크레딧 " +
          tryOnResult.credits
        );
    
      } else {
    
        showToast(
          item.title +
          "을(를) 입혀봤어요. · 무료 " +
          tryOnResult.freeRemaining +
          "회 남음"
        );
      }
    
    
      /* =====================================================
         마지막 무료 1회를 사용해서
         0회가 된 순간 크레딧 안내
      ===================================================== */
    
      if (
        tryOnResult.showCreditPopup
      ) {
    
        window.setTimeout(
          function () {
    
            setModalOpen(
              tryonCreditModal,
              true
            );
    
          },
          350
        );
      }
    }

    function resetOutfit() {
      state.selectedCloset = {
        tops: null,
        outer: null,
        leggings: null,
        bottoms: null
      };
      syncClosetLayers();
      renderCloset();
      showToast("코디를 초기화했어요.");
    }

    function openClosetTitleModal(itemId) {
      var item = getClosetItem(itemId);
      if (!item || !closetTitleInput) return;

      state.editingClosetItemId = itemId;
      closetTitleInput.value = item.title;
      setModalOpen(closetTitleModal, true);

      window.setTimeout(function () {
        closetTitleInput.focus();
        closetTitleInput.select();
      }, 50);
    }

    function saveClosetTitle() {
      var itemId = state.editingClosetItemId;
      var newTitle = closetTitleInput ? closetTitleInput.value.trim() : "";

      if (!itemId || !newTitle) {
        showToast("옷 이름을 입력해주세요.");
        return;
      }

      var updated = false;
      if (typeof window.updateClosetItemTitle === "function") {
        updated = window.updateClosetItemTitle(itemId, newTitle);
      } else {
        var item = getClosetItem(itemId);
        if (item) {
          item.title = newTitle;
          updated = true;
        }
      }

      if (updated) {
        setModalOpen(closetTitleModal, false);
        state.editingClosetItemId = null;
        renderCloset();
        showToast("옷 이름을 수정했어요.");
      }
    }

    /* =====================================================
       11. 장바구니
    ===================================================== */
    function openCartConfirm(productId) {
      var product = getProduct(productId);
      if (!product) return;

      state.pendingCartProductId = product.id;
      if (cartConfirmProductName) {
        cartConfirmProductName.textContent = product.name + " · " + formatPrice(product.price);
      }
      setModalOpen(cartConfirmModal, true);
    }

    function addPendingProductToCart() {
      var productId = state.pendingCartProductId;
      var product = getProduct(productId);

      if (!product) {
        setModalOpen(cartConfirmModal, false);
        return;
      }

      var existing = state.cart.find(function (item) {
        return item.productId === productId;
      });

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ productId: productId, quantity: 1 });
      }

      state.pendingCartProductId = null;
      setModalOpen(cartConfirmModal, false);
      renderCart();
      showToast(product.name + "을(를) 장바구니에 담았어요.");
    }

    function removeCartItem(productId) {
      state.cart = state.cart.filter(function (item) {
        return item.productId !== productId;
      });
      renderCart();
      showToast("장바구니에서 삭제했어요.");
    }

    function renderCart() {
      if (!cartList) return;

      if (!state.cart.length) {
        cartList.innerHTML = `
          <div class="cart-empty">
            🛍️<br><br>
            아직 담긴 상품이 없어요.<br>
            참여런웨이와 셀러 추천 코디에서 마음에 드는 상품을 담아보세요.
          </div>
        `;
      } else {
        cartList.innerHTML = state.cart.map(function (cartItem) {
          var product = getProduct(cartItem.productId);
          if (!product) return "";

          var linePrice = Number(product.price || 0) * Number(cartItem.quantity || 1);

          return `
            <article class="cart-item">
              <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}">
              <div>
                <h4>
                  ${escapeHtml(product.name)}${cartItem.quantity > 1 ? " × " + cartItem.quantity : ""}
                </h4>
                <strong>${formatPrice(linePrice)}</strong>
              </div>
              <button
                type="button"
                class="cart-remove-button"
                data-remove-cart="${escapeHtml(product.id)}"
                aria-label="장바구니에서 삭제"
              >×</button>
            </article>
          `;
        }).join("");
      }

      var subtotal = state.cart.reduce(function (sum, cartItem) {
        var product = getProduct(cartItem.productId);
        if (!product) return sum;
        return sum + Number(product.price || 0) * Number(cartItem.quantity || 1);
      }, 0);

      var reward = Math.round(subtotal * 0.05);
      var subtotalNode = document.getElementById("cart-subtotal");
      var rewardNode = document.getElementById("cart-reward");
      var totalNode = document.getElementById("cart-total");

      if (subtotalNode) subtotalNode.textContent = formatPrice(subtotal);
      if (rewardNode) rewardNode.textContent = "최대 " + formatPrice(reward);
      if (totalNode) totalNode.textContent = formatPrice(subtotal);
    }

    /* =====================================================
       12. 전체 클릭 이벤트
    ===================================================== */
    document.addEventListener("click", function (event) {
      var goButton = event.target.closest("[data-go]");
      if (goButton) {
        var targetScreen = Number(goButton.dataset.go);
        if (targetScreen) showScreen(targetScreen);
        return;
      }

      var regionButton = event.target.closest(".region-filter[data-region]");
      if (regionButton) {
        state.selectedRegion = regionButton.dataset.region || "전체";
        document.querySelectorAll(".region-filter").forEach(function (button) {
          button.classList.toggle("active", button === regionButton);
        });
        renderStores();
        return;
      }

      var sortButton = event.target.closest(".sort-button[data-sort]");
      if (sortButton) {
        state.selectedSort = sortButton.dataset.sort || "likes";
        document.querySelectorAll(".sort-button").forEach(function (button) {
          button.classList.toggle("active", button === sortButton);
        });
        renderStores();
        return;
      }
/* 셀러 추천카드 안의 실제 착용상품 클릭 */
var storeLookProduct =
  event.target.closest("[data-store-product-id]");

if (storeLookProduct) {

  openProductDetail(
    storeLookProduct.dataset.storeProductId
  );

  return;
}
      var storeButton = event.target.closest("[data-store-id]");
      if (storeButton) {
        setSelectedStore(storeButton.dataset.storeId);
        renderShop();
        showScreen(4);
        return;
      }

      var shopProduct = event.target.closest(".shop-product-card[data-product-id]");
      if (shopProduct) {
        openProductDetail(shopProduct.dataset.productId);
        return;
      }

      var runwayProduct = event.target.closest("[data-runway-product-id]");
      if (runwayProduct) {
        openCartConfirm(runwayProduct.dataset.runwayProductId);
        return;
      }

      var closetEditButton = event.target.closest("[data-edit-closet-title]");
      if (closetEditButton) {
        event.stopPropagation();
        openClosetTitleModal(closetEditButton.dataset.editClosetTitle);
        return;
      }

      var closetWearButton = event.target.closest("[data-wear-item]");
      if (closetWearButton) {
        event.stopPropagation();
        var wearItem = getClosetItem(closetWearButton.dataset.wearItem);
        if (wearItem) applyClosetLayer(wearItem.category, wearItem.id);
        return;
      }

      var closetCard = event.target.closest(".closet-item-card[data-closet-item-id]");
      if (closetCard) {
        var closetItem = getClosetItem(closetCard.dataset.closetItemId);
        if (closetItem) applyClosetLayer(closetItem.category, closetItem.id);
        return;
      }

      var removeCartButton = event.target.closest("[data-remove-cart]");
      if (removeCartButton) {
        removeCartItem(removeCartButton.dataset.removeCart);
      }
    });

    /* =====================================================
       13. 고정 버튼 이벤트
    ===================================================== */
    var detailCartButton = document.getElementById("detail-cart-button");
    if (detailCartButton) {
      detailCartButton.addEventListener("click", function () {
        if (state.selectedProductId) openCartConfirm(state.selectedProductId);
      });
    }

    var detailTryonButton = document.getElementById("detail-tryon-button");
    if (detailTryonButton) {
      detailTryonButton.addEventListener("click", function () {
        showScreen(7);
        window.setTimeout(function () {
          showToast("내 옷장에서 원하는 옷을 눌러 실사형 모델에 입혀보세요.");
        }, 120);
      });
    }
/* =====================================================
   가상피팅 크레딧 팝업
===================================================== */

/* 나중에 하기 */
if (tryonCreditLater) {

  tryonCreditLater.addEventListener("click", function () {

    setModalOpen(
      tryonCreditModal,
      false
    );

  });
}


/* 크레딧 충전하기 */
if (tryonCreditBuy) {

  tryonCreditBuy.addEventListener("click", function () {

    if (
      typeof window.addTryOnCreditPack !== "function"
    ) {

      showToast(
        "크레딧 기능을 불러오지 못했어요."
      );

      return;
    }


    /*
       MVP에서는 실제 결제 없이
       100크레딧 충전 흐름만 시연
    */
    var status =
      window.addTryOnCreditPack();


    setModalOpen(
      tryonCreditModal,
      false
    );


    renderTryOnStatus();


    showToast(
      "100크레딧이 충전됐어요. 현재 " +
      status.credits +
      "크레딧"
    );

  });
}
/* =====================================================
   회원가입 팝업 버튼
===================================================== */


/* 네이버 간편가입 - MVP 시연 */
if (quickSignupNaver) {

  quickSignupNaver.addEventListener(
    "click",
    function () {

      showToast(
        "네이버 간편가입을 선택했어요. 아래에서 회원 유형을 선택해주세요."
      );

    }
  );
}


/* 카카오 간편가입 - MVP 시연 */
if (quickSignupKakao) {

  quickSignupKakao.addEventListener(
    "click",
    function () {

      showToast(
        "카카오 간편가입을 선택했어요. 아래에서 회원 유형을 선택해주세요."
      );

    }
  );
}


/* 개인회원 */
if (signupRoleIndividual) {

  signupRoleIndividual.addEventListener(
    "click",
    function () {

      completeSignup(
        "individual"
      );

    }
  );
}


/* 샵 파트너 */
if (signupRolePartner) {

  signupRolePartner.addEventListener(
    "click",
    function () {

      completeSignup(
        "partner"
      );

    }
  );
}


/* 닫기 */
if (signupCloseButton) {

  signupCloseButton.addEventListener(
    "click",
    closeSignupIntro
  );
}
    if (cartModalCancel) {
      cartModalCancel.addEventListener("click", function () {
        state.pendingCartProductId = null;
        setModalOpen(cartConfirmModal, false);
      });
    }

    if (cartModalConfirm) {
      cartModalConfirm.addEventListener("click", addPendingProductToCart);
    }

    if (closetTitleCancel) {
      closetTitleCancel.addEventListener("click", function () {
        state.editingClosetItemId = null;
        setModalOpen(closetTitleModal, false);
      });
    }

    if (closetTitleSave) {
      closetTitleSave.addEventListener("click", saveClosetTitle);
    }

    if (closetTitleInput) {
      closetTitleInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          saveClosetTitle();
        }
      });
    }

    if (cartConfirmModal) {
      cartConfirmModal.addEventListener("click", function (event) {
        if (event.target === cartConfirmModal) {
          state.pendingCartProductId = null;
          setModalOpen(cartConfirmModal, false);
        }
      });
    }

    if (closetTitleModal) {
      closetTitleModal.addEventListener("click", function (event) {
        if (event.target === closetTitleModal) {
          state.editingClosetItemId = null;
          setModalOpen(closetTitleModal, false);
        }
      });
    }

    var resetOutfitButton = document.getElementById("reset-outfit-button");
    if (resetOutfitButton) {
      resetOutfitButton.addEventListener("click", resetOutfit);
    }

    var closetAddPhotoButton = document.getElementById("closet-add-photo-button");
    if (closetAddPhotoButton) {
      closetAddPhotoButton.addEventListener("click", function () {
        var totalItems =
          (closet.tops || []).length +
          (closet.outer || []).length +
          (closet.leggings || []).length +
          (closet.bottoms || []).length;

        if (totalItems >= Number(closetConfig.totalFreeItems || 40)) {
          var extraStorage = document.getElementById("closet-extra-storage");
          if (extraStorage) {
            extraStorage.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          showToast("기본 40장을 모두 사용 중이에요. 아래에서 추가 저장공간을 확인해주세요.");
          return;
        }

        showToast("사진 촬영 후 AI가 카테고리와 제목을 자동 정리하는 기능으로 확장할 예정입니다.");
      });
    }

    var extraStorageButton = document.getElementById("extra-storage-button");
    if (extraStorageButton) {
      extraStorageButton.addEventListener("click", function () {
        var confirmed = window.confirm(
          "선택한 카테고리에 저장공간 10장을 추가하면 월 990원이 발생합니다.\n\n" +
          "MVP에서는 결제 없이 안내 흐름만 시연합니다."
        );

        if (confirmed) {
          showToast("저장공간 추가 신청 흐름을 확인했어요. (MVP 시연)");
        }
      });
    }

    var saveModelButton = document.getElementById("save-model-button");
    if (saveModelButton) {
      saveModelButton.addEventListener("click", function () {
        var heightInput = document.getElementById("model-height");
        var height = heightInput ? Number(heightInput.value) : 0;

        if (height && (height < 120 || height > 220)) {
          showToast("키는 120cm~220cm 사이로 입력해주세요.");
          return;
        }

        showToast("내 모델 정보를 저장했어요. MVP에서는 준비된 실사형 모델로 시연됩니다.");
        showScreen(6);
      });
    }
/* =====================================================
   샵 파트너 상품 가격 자동 계산
===================================================== */

var partnerProductName =
  document.getElementById("partner-product-name");

var partnerOriginalPrice =
  document.getElementById("partner-original-price");

var partnerDiscountRate =
  document.getElementById("partner-discount-rate");

var partnerSalePrice =
  document.getElementById("partner-sale-price");

var partnerDiscountPreview =
  document.getElementById("partner-discount-preview");


function updatePartnerSalePrice() {

  if (
    !partnerOriginalPrice ||
    !partnerDiscountRate ||
    !partnerSalePrice
  ) {
    return;
  }


  var originalPrice =
    Math.max(
      0,
      Number(partnerOriginalPrice.value || 0)
    );


  var discountRate =
    Math.max(
      0,
      Math.min(
        100,
        Number(partnerDiscountRate.value || 0)
      )
    );


  /* 0~100 범위로 자동 보정 */
  if (
    partnerDiscountRate.value !== "" &&
    Number(partnerDiscountRate.value) !== discountRate
  ) {
    partnerDiscountRate.value =
      discountRate;
  }


  var salePrice =
    Math.round(
      originalPrice *
      (100 - discountRate) /
      100
    );


  partnerSalePrice.textContent =
    formatPrice(salePrice);


  /* 안내문 */
  if (partnerDiscountPreview) {

    if (originalPrice <= 0) {

      partnerDiscountPreview.textContent =
        "정상가와 할인율을 입력하면 자동으로 계산됩니다.";

    } else if (discountRate > 0) {

      partnerDiscountPreview.textContent =
        discountRate +
        "% 할인 · 정상가 " +
        formatPrice(originalPrice) +
        " → 판매가 " +
        formatPrice(salePrice);

    } else {

      partnerDiscountPreview.textContent =
        "할인 없음 · 판매가 " +
        formatPrice(originalPrice);
    }
  }
}


/* 정상가 입력 즉시 계산 */
if (partnerOriginalPrice) {

  partnerOriginalPrice.addEventListener(
    "input",
    updatePartnerSalePrice
  );
}


/* 할인율 입력 즉시 계산 */
if (partnerDiscountRate) {

  partnerDiscountRate.addEventListener(
    "input",
    updatePartnerSalePrice
  );
}
/* =====================================================
   샵 파트너 상품 저장 / 가격 반영
===================================================== */

var partnerProductSaveButton =
  document.getElementById("partner-product-save-button");


/* MVP 샵 파트너 매장 */
function getPartnerStore() {

  return (
    getStore("cheongju-style") ||
    stores[0] ||
    null
  );
}


/* 현재 수정할 상품
   MVP에서는 파트너 매장의 첫 번째 상품 사용
*/
function getPartnerEditingProduct() {

  var store = getPartnerStore();

  if (
    !store ||
    !Array.isArray(store.lookProducts) ||
    !store.lookProducts.length
  ) {
    return null;
  }

  return store.lookProducts[0];
}


/* 상품등록 화면에 기존 정보 불러오기 */
function loadPartnerProductForm() {

  var product =
    getPartnerEditingProduct();

  if (!product) return;


  if (partnerProductName) {
    partnerProductName.value =
      product.name || "";
  }

  if (partnerOriginalPrice) {
    partnerOriginalPrice.value =
      Number(product.originalPrice || 0);
  }

  if (partnerDiscountRate) {
    partnerDiscountRate.value =
      Number(product.discountRate || 0);
  }


  updatePartnerSalePrice();
}


/* 저장된 가격정보 다시 불러오기 */
function restorePartnerProductEdit() {

  var store =
    getPartnerStore();

  var product =
    getPartnerEditingProduct();

  if (!store || !product) return;


  try {

    var saved =
      window.localStorage.getItem(
        "modu-partner-product-edit"
      );

    if (!saved) return;


    var data =
      JSON.parse(saved);


    if (
      data.storeId !== store.id ||
      data.productId !== product.id
    ) {
      return;
    }


    if (data.name) {
      product.name = data.name;
    }

    product.originalPrice =
      Number(
        data.originalPrice ||
        product.originalPrice ||
        0
      );

    product.discountRate =
      Math.max(
        0,
        Math.min(
          100,
          Number(data.discountRate || 0)
        )
      );

  } catch (error) {
    // 저장정보 오류는 무시
  }
}


/* 상품 저장 버튼 */
if (partnerProductSaveButton) {

  partnerProductSaveButton.addEventListener(
    "click",
    function () {

      var store =
        getPartnerStore();

      var product =
        getPartnerEditingProduct();


      if (!store || !product) {

        showToast(
          "수정할 상품을 찾지 못했어요."
        );

        return;
      }


      var newName =
        partnerProductName
          ? partnerProductName.value.trim()
          : "";


      var originalPrice =
        partnerOriginalPrice
          ? Number(partnerOriginalPrice.value || 0)
          : 0;


      var discountRate =
        partnerDiscountRate
          ? Number(partnerDiscountRate.value || 0)
          : 0;


      if (!newName) {

        showToast(
          "상품명을 입력해주세요."
        );

        return;
      }


      if (originalPrice <= 0) {

        showToast(
          "정상가를 입력해주세요."
        );

        return;
      }


      discountRate =
        Math.max(
          0,
          Math.min(
            100,
            discountRate
          )
        );


      /* 실제 데이터 수정 */
      product.name =
        newName;

      product.originalPrice =
        originalPrice;

      product.discountRate =
        discountRate;


      /* 새로고침 후에도 유지 */
      try {

        window.localStorage.setItem(
          "modu-partner-product-edit",
          JSON.stringify({
            storeId: store.id,
            productId: product.id,
            name: product.name,
            originalPrice:
              product.originalPrice,
            discountRate:
              product.discountRate
          })
        );

      } catch (error) {
        // 저장 실패 환경은 현재 화면에서만 반영
      }


      /* 소비자 화면 즉시 갱신 */
      renderStores();
      renderShop();

      updatePartnerSalePrice();


      showToast(
        "상품 정보가 저장됐어요. 소비자 화면에도 반영됐습니다."
      );
    }
  );
}

/* 처음 화면을 열었을 때도 계산 */
updatePartnerSalePrice();
    var sellerUploadButton = document.getElementById("seller-upload-button");
    if (sellerUploadButton) {
      sellerUploadButton.addEventListener("click", function () {
        showToast("상품 사진을 분석해 기본 정보를 정리했어요. (MVP 시연)");
        showScreen(11);
      });
    }

    var demoPaymentButton = document.getElementById("demo-payment-button");
    if (demoPaymentButton) {
      demoPaymentButton.addEventListener("click", function () {
        if (!state.cart.length) {
          showToast("장바구니에 상품을 먼저 담아주세요.");
          showScreen(14);
          return;
        }

        window.alert("주문이 완료되었습니다.\n\n현재는 모두의코디 MVP 시연 화면입니다.");
        state.cart = [];
        renderCart();
        showScreen(1);
      });
    }
/* 첫 가입을 완료하지 않았다면
   첫 화면에서 회원가입 안내 표시 */
    var signupCompleted = false;
    var signupFlowVersionOk = false;
    var savedSignupRole = getSavedUserRole();

    try {
      signupCompleted =
        window.localStorage.getItem("modu-signup-complete") === "yes";

      signupFlowVersionOk =
        window.localStorage.getItem("modu-signup-flow-version") ===
        "2026-08-25-v1";
    } catch (error) {
      signupCompleted = false;
      signupFlowVersionOk = false;
    }

    if (!signupCompleted || !savedSignupRole || !signupFlowVersionOk) {
      window.setTimeout(function () {
        openSignupIntro();
      }, 300);
    }
    /* =====================================================
       14. ESC로 모달 닫기
    ===================================================== */
    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;

      if (cartConfirmModal && !cartConfirmModal.classList.contains("hidden")) {
        state.pendingCartProductId = null;
        setModalOpen(cartConfirmModal, false);
      }

      if (closetTitleModal && !closetTitleModal.classList.contains("hidden")) {
        state.editingClosetItemId = null;
        setModalOpen(closetTitleModal, false);
      }

      if (signupIntroModal && !signupIntroModal.classList.contains("hidden")) {
        closeSignupIntro();
      }
    });

    /* =====================================================
       15. 초기화
    ===================================================== */
    restoreSelectedStore();
    restorePartnerProductEdit();
    renderStores();
    renderRunwayFeed();
    renderCloset();
    renderTryOnStatus();
    renderMyPage();
    renderCart();
    showScreen(1);
  });
})();