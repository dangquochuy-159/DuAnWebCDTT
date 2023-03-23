var DT_THEME = {
  strings: {
    addToWishList: "Add to wishlist",
    viewMyWishList: "View wishlist",
    addToCart: "Add to Cart",
    emptyCart: "No Products Added",
    soldOut: "Sold Out",
    inStock: "In stock",
    unavailable: "Unavailable",
    available: "Available",
    addToCompareList: "Add To Compare List",
    viewMyCompareList: "View My Compare List",
    minCompareProductNav:
      "Need one more product to navigate to compare form here",
    minCompareProduct: "Not allowed to add more than 4 product to compare",
    continueShopping: "Continue shopping",
  },
  moneyFormat: "${{amount}}",
  cartGoalPrice: "10",
  freeEligible: "Yahoo! you got free shipping!",
  freeOnly: "Only",
  freeNotEligible: "away! for shipping",
};

document.documentElement.className = document.documentElement.className.replace(
  "no-js",
  "js"
);
if (Shopify.designMode) {
  document.documentElement.classList.add("shopify-design-mode");
}

(function () {
  var scripts = [
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.f77e77eea5e86d849262.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/checkout-web-packages-packages_checkout-react-html_src_hooks_title_ts.latest.en.3457953d3abd1b694aa5.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/vendors-node_modules_shopify_verdict_build_esm_runtimes_browser_index_mts_js.latest.en.aa3f47b1fb7e892fe777.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app_components_AddressForm_AddressForm_tsx-app_components_Step_Step_tsx-app_utilities_receipt-4dad45.latest.en.38a2f2dbc14865254375.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information.latest.en.407a589e6c5fc2083a9c.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/checkout-web-ui-packages_checkout-web-ui_src_styles_global_css_ts-packages_checkout-web-ui_sr-591a0f.latest.en.f81d25deaced725279e4.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/vendors-node_modules_bugsnag_js_browser_notifier_js-node_modules_shopify_checkout-telemetry-a-38c8d5.latest.en.fe6d829d0bb9015ddc02.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/checkout-web-packages-packages_card-fields-react_src_hook_ts-packages_checkout-graphql_src_in-92a386.latest.en.07cb5684be03f5165383.js",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.5abf4c37e217c153f799.js",
  ];
  var styles = [
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/checkout-web-ui-packages_checkout-web-ui_src_styles_global_css_ts-packages_checkout-web-ui_sr-591a0f.latest.en.bbcce05158951dc751f9.css",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/vendors-node_modules_bugsnag_js_browser_notifier_js-node_modules_shopify_checkout-telemetry-a-38c8d5.latest.en.309c1efd4202d001160f.css",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.7f862f1f2eca46cbffb9.css",
    "https://cdn.shopify.com/shopifycloud/checkout-web/assets/Information.latest.en.da7479041a34c9463c32.css",
  ];

  function prefetch(url, as, callback) {
    var link = document.createElement("link");
    if (link.relList.supports("prefetch")) {
      link.rel = "prefetch";
      link.fetchPriority = "low";
      link.as = as;
      link.href = url;
      link.onload = link.onerror = callback;
      document.head.appendChild(link);
    } else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onloadend = callback;
      xhr.send();
    }
  }

  function prefetchAssets() {
    var resources = [].concat(
      scripts.map(function (url) {
        return [url, "script"];
      }),
      styles.map(function (url) {
        return [url, "style"];
      })
    );
    var index = 0;
    (function next() {
      var res = resources[index++];
      if (res) prefetch(res[0], res[1], next);
    })();
  }

  addEventListener("load", prefetchAssets);
})();

var Shopify = Shopify || {};
Shopify.shop = "dt-booksque.myshopify.com";
Shopify.locale = "en";
Shopify.currency = { active: "USD", rate: "1.0" };
Shopify.country = "US";
Shopify.theme = {
  name: "Booksque-theme-checked",
  id: 123533525127,
  theme_store_id: null,
  role: "main",
};
Shopify.theme.handle = "null";
Shopify.theme.style = { id: null, handle: null };
Shopify.cdnHost = "cdn.shopify.com";
Shopify.routes = Shopify.routes || {};
Shopify.routes.root = "/";

!(function (o) {
  function n() {
    var o = [];
    function n() {
      o.push(Array.prototype.slice.apply(arguments));
    }
    return (n.q = o), n;
  }
  var t = (o.Shopify = o.Shopify || {});
  (t.loadFeatures = n()), (t.autoloadFeatures = n());
})(window);

(function () {
  function asyncLoad() {
    var urls = [
      "//productreviews.shopifycdn.com/embed/loader.js?shop=dt-booksque.myshopify.com",
    ];
    for (var i = 0; i < urls.length; i++) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = urls[i];
      var x = document.getElementsByTagName("script")[0];
      x.parentNode.insertBefore(s, x);
    }
  }
  if (window.attachEvent) {
    window.attachEvent("onload", asyncLoad);
  } else {
    window.addEventListener("load", asyncLoad, false);
  }
})();

!(function (o) {
  o.addEventListener("DOMContentLoaded", function () {
    (window.Shopify = window.Shopify || {}),
      (window.Shopify.recaptchaV3 = window.Shopify.recaptchaV3 || {
        siteKey: "6LcCR2cUAAAAANS1Gpq_mDIJ2pQuJphsSQaUEuc9",
      });
    var t = [
      'form[action*="/contact"] input[name="form_type"][value="contact"]',
      'form[action*="/comments"] input[name="form_type"][value="new_comment"]',
      'form[action*="/account"] input[name="form_type"][value="customer_login"]',
      'form[action*="/account"] input[name="form_type"][value="recover_customer_password"]',
      'form[action*="/account"] input[name="form_type"][value="create_customer"]',
      'form[action*="/contact"] input[name="form_type"][value="customer"]',
    ].join(",");
    function n(e) {
      e = e.target;
      null == e ||
        (null !=
          (e = (function e(t, n) {
            if (null == t.parentElement) return null;
            if ("FORM" != t.parentElement.tagName) return e(t.parentElement, n);
            for (var o = t.parentElement.action, r = 0; r < n.length; r++)
              if (-1 !== o.indexOf(n[r])) return t.parentElement;
            return null;
          })(e, ["/contact", "/comments", "/account"])) &&
          null != e.querySelector(t) &&
          ((e = o.createElement("script")).setAttribute(
            "src",
            "https://cdn.shopify.com/shopifycloud/storefront-recaptcha-v3/v0.6/index.js"
          ),
          o.body.appendChild(e),
          o.removeEventListener("focus", n, !0),
          o.removeEventListener("change", n, !0),
          o.removeEventListener("click", n, !0)));
    }
    o.addEventListener("click", n, !0),
      o.addEventListener("change", n, !0),
      o.addEventListener("focus", n, !0);
  });
})(document);

window.performance &&
  window.performance.mark &&
  window.performance.mark("shopify.content_for_header.end");

window.ShopifyAnalytics = window.ShopifyAnalytics || {};
window.ShopifyAnalytics.meta = window.ShopifyAnalytics.meta || {};
window.ShopifyAnalytics.meta.currency = "USD";
var meta = { page: { pageType: "home" } };
for (var attr in meta) {
  window.ShopifyAnalytics.meta[attr] = meta[attr];
}
window.ShopifyAnalytics.merchantGoogleAnalytics = function () {};

jQuery(document).ready(function ($) {
  "use strict";
  // Mobile Menu
  if ($(window).width() <= 1400) {
    var phrases = [];
    $("ul.secondary__nav").each(function () {
      var phrase = "";
      phrase += $(this).html();
      $(phrase).insertAfter("ul.dt-desktop-menu > li:last-child");
    });

    // Move Nav as Mobile Nav
    $("nav.dt-sc-flex-space-between").each(function () {
      var d = $(this).data("menu"),
        c = $(this)
          .find('ul[data-menu="' + d + '"]')
          .clone()
          .removeClass("dt-nav"),
        m = $("body").find('.mobile-menu[data-menu="' + d + '"]');
      // To Remove animation classes
      $("[data-animation]", c).each(function (ix, ele) {
        var $classes = $(ele).attr("class"),
          $animation = $(ele).attr("data-animation");

        $classes = $classes.replace($animation, "");
        $(ele).attr("class", $classes);
      });

      c.prependTo(m);
    });

    mobileTrigger();

    // Closing Mobile Nav
    $("li.close-nav").on("click", function (event) {
      closeMobNav();
    });

    $("body > .mobile-menu-overlay").on("click", function (event) {
      closeMobNav();
    });

    // Sub Menu in Mobile Menu
    $(".menu-item-has-children > a").on("click", function (event) {
      if ($("body").hasClass("nav-is-visible")) {
        event.preventDefault();
        var a = $(this).clone();
        $(this).next(".sub-menu-block").find(".see-all").html(a);
      }

      var selected = $(this);
      if (selected.next("div.sub-menu-block").hasClass("is-hidden")) {
        selected
          .addClass("selected")
          .next("div.sub-menu-block")
          .removeClass("is-hidden");
      } else {
        selected
          .removeClass("selected")
          .next("div.sub-menu-block")
          .addClass("is-hidden");
      }
    });

    // Go Back in Mobile Menu
    $(".go-back").on("click", function () {
      //$(this).parent('div.sub-menu-block').addClass('is-hidden');
      $(this).closest(".sub-menu-block").addClass("is-hidden");
    });
  }

  // Desktop Menu
  if ($(window).width() >= 1401) {
    jQuery(".menu-item-has-children > a")
      .mouseenter(function (e) {
        var selected = $(this);
        if (selected.next("div.sub-menu-block").hasClass("is-hidden")) {
          selected
            .addClass("selected")
            .next("div.sub-menu-block")
            .removeClass("is-hidden");
        } else {
          selected
            .removeClass("selected")
            .next("div.sub-menu-block")
            .addClass("is-hidden");
        }
        thumbGallerySwiper();
        megaSwiper();

        e.preventDefault();
      })
      .mouseleave(function (e) {
        var selected = $(this);
        if (selected.next("div.sub-menu-block").hasClass("is-hidden")) {
          selected
            .addClass("selected")
            .next("div.sub-menu-block")
            .removeClass("is-hidden");
        } else {
          selected
            .removeClass("selected")
            .next("div.sub-menu-block")
            .addClass("is-hidden");
        }
        e.preventDefault();
      });

    function megaMenu() {
      if ($("#header .container-fluid").length) {
        var parentRow = $("#header .container-fluid > .row");
        var parentLeft = parseInt(
          parentRow.css("marginLeft").replace("px", "")
        );
      } else {
        var parentRow = $("#header .container .row");
        var parentLeft = parseInt(parentRow.offset().left);
      }
      var parentWidth = parentRow.width();

      $("#header .dt-sc-header-logo-sec .dt-nav li:not(.close-nav)").each(
        function () {
          var thisItem = $(this);
          if (thisItem.hasClass("has-mega-menu")) {
            var thisItemLeft = thisItem.find("a").offset().left;
            var menuLeft = parseInt(thisItemLeft - parentLeft);
            thisItem.find(".sub-menu-block").css("width", parentWidth);
            thisItem.find(".sub-menu-block").css("left", -menuLeft);
          }
        }
      );

      $("#header .sticky-header-active .dt-nav li:not(.close-nav)").each(
        function () {
          var thisItem = $(this);
          if (thisItem.hasClass("has-mega-menu")) {
            var thisItemLeft = thisItem.find("a").offset().left;
            var menuLeft = parseInt(thisItemLeft - parentLeft);
            thisItem.find(".sub-menu-block").css("width", parentWidth);
            thisItem.find(".sub-menu-block").css("left", -menuLeft);
          }
        }
      );

      window.setTimeout(function () {
        $(window).trigger("resize");
      }, 800);
    }

    var megaMenuResize = false;
    $(window).bind("resize", function () {
      if (!megaMenuResize) {
        megaMenu();
        megaMenuResize = true;
      }
    });
    megaMenu();
  }

  // Header Sticky
});

// TRIGGER MENU FOR BOTH CASES

function mobileTrigger() {
  $(".menu-trigger").on("click", function (event) {
    $("body").find(".mobile-menu").addClass("nav-is-visible");
    $("body").find(".mobile-menu-overlay").addClass("is-visible");
    $("body").addClass("nav-is-visible");
    $("ul.dt-sc-list-inline.dt-desktop-menu:nth-child(2)").remove();
  });
  $("#sticky-header-active .button_container").click(function () {
    $("#sticky-header-active .button_container").toggleClass("active");
    $("#sticky-header-active .full-menu-overlay").toggleClass("open");
  });
}

function closeMobNav() {
  $("body").removeClass("nav-is-visible");
  $(".mobile-menu-overlay").removeClass("is-visible");
  $(".mobile-menu").removeClass("nav-is-visible");
  $(".menu-item-has-children a").removeClass("selected");
  $(".menu-item-has-children div.sub-menu-block").addClass("is-hidden");
}

$(window).on("resize", function () {
  mobileTrigger();
  closeMobNav();
});

$(window).on("load", function () {
  mobileTrigger();
  closeMobNav();
});

$(function () {
  if ($(window).width() >= 1401) {
    $(".tabs-nav a").click(function () {
      $(".tabs-nav li").removeClass("active");
      $(this).parent().addClass("active");
      let currentTab = $(this).attr("href");
      $(".tabs-content li.dt-sc-menu-tabs").hide();
      $(currentTab).show();
      return false;
    });
  }
  if ($(window).width() <= 1400) {
    $(".mobileTabs .tabs  li").each(function () {
      $(this).click(function () {
        $(this).next("div").slideToggle(0);
      });
    });
  }
});

$(document).ready(function () {
  $(".dT_ProductProactiveSearch .search-box input[type=text]")
    .focus(function () {
      $(this)
        .parents(".dT_ProductProactiveSearch")
        .addClass("show-search-tags");
      initSearchSwiper();
      thumbGallerySwiper();
    })
    .blur(function () {});

  $(".form-control").on("keyup", function () {
    if ($(this).val().length > 0) {
      $(this)
        .parents(".dT_ProductProactiveSearch")
        .removeClass("show-search-tags");
    }
  });
  $(".search-overlay").on("click", function () {
    $(".dT_TopStickySearchCloseBtn ").trigger("click");
  });

  $(".dt-wishlist-cnt")
    .filter(function () {
      return $(this).text().trim() === "0";
    })
    .addClass("hidden");
});

$(document).ready(function () {
  $(".gridPlay").each(function (index) {
    $(this).on("click", function () {
      $(this).css("display", "none");
      $(this).next(".gridPause").css("display", "flex");
      $(this).closest(".dt-sc-grid-banner").find("video").trigger("play");
    });
  });
  $(".gridPause").each(function (index) {
    $(this).on("click", function () {
      $(this).css("display", "none");
      $(this).prev(".gridPlay").css("display", "flex");
      $(this).closest(".dt-sc-grid-banner").find("video").trigger("pause");
    });
  });
});

$(document).ready(function () {
  $("#toggle").click(function () {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
  });

  var onSelectedValue = $(".custom-select select option:selected").text();
  $(".site-header__links .select-box__input").each(function (index) {
    if ($(this).data("value") == onSelectedValue) {
      $(this).prop("checked", true);
    }
  });

  $(".select-box__current input[type='radio']").click(function (e) {
    var currencyPicked = $(
      ".select-box__current input[type='radio']:checked"
    ).val();
    $("form[id=currency_form] .custom-select select option").each(function () {
      if ($(this).val() == currencyPicked) {
        $(this).attr("selected", true);
        var result = $(this)
          .parents(".site-header__links")
          .find(".select-box__input")
          .data("value");
        $("#currency_form").submit();
      } else {
        $(this).attr("selected", false);
      }
    });
  });
});

$(document).ready(function () {
  $(".gridPlay").each(function (index) {
    $(this).on("click", function () {
      $(this).css("display", "none");
      $(this).next(".gridPause").css("display", "flex");
      $(this).closest(".dt-sc-grid-banner").find("video").trigger("play");
    });
  });
  $(".gridPause").each(function (index) {
    $(this).on("click", function () {
      $(this).css("display", "none");
      $(this).prev(".gridPlay").css("display", "flex");
      $(this).closest(".dt-sc-grid-banner").find("video").trigger("pause");
    });
  });
});

$(window).on("load", function () {
  $(".btn.play").each(function (index) {
    $(this).on("click", function () {
      $(this).css("display", "none");
      $(this).next(".btn.pause").css("display", "flex");
      if ($(this).parents(".video-cover").hasClass("swiper-slide-active")) {
        $(this).parents(".video-cover").find("video").trigger("play");
      }
    });
  });

  $(".btn.pause").each(function (index) {
    $(this).on("click", function () {
      $(this).css("display", "none");
      $(this).prev(".btn.play").css("display", "flex");
      if ($(this).parents(".video-cover").hasClass("swiper-slide-active")) {
        $(this).parents(".video-cover").find("video").trigger("pause");
      }
    });
  });

  $(".swiper-button-next, .swiper-button-prev").on("click", function () {
    $(this).parents(".dt-sc-swiper-slider").find("video").trigger("pause");
    $(this)
      .parents(".dt-sc-swiper-slider")
      .find(".btn.pause")
      .css("display", "none");
    $(this)
      .parents(".dt-sc-swiper-slider")
      .find(".btn.play")
      .css("display", "flex");
  });
});

$(document).ready(function () {
  $(".gridPlay").each(function (index) {
    $(this).on("click", function () {
      $(this).css("display", "none");
      $(this).next(".gridPause").css("display", "flex");
      $(this).closest(".dt-sc-grid-banner").find("video").trigger("play");
    });
  });
  $(".gridPause").each(function (index) {
    $(this).on("click", function () {
      $(this).css("display", "none");
      $(this).prev(".gridPlay").css("display", "flex");
      $(this).closest(".dt-sc-grid-banner").find("video").trigger("pause");
    });
  });
});

jQuery(function ($) {
  ajaxCart.init({
    formSelector: "[data-product-form]",
    cartContainer: "#CartContainer",
    addToCartSelector: ".dT_AddToCart",
    cartCountSelector: ".CartCount",
    cartCostSelector: ".CartCost",
    moneyFormat: "${{amount}}",
  });
});

jQuery("body").on("ajaxCart.afterCartLoad", function (evt, cart) {
  theme.RightDrawer.open();
});

jQuery("body").on("ajaxCart.afterCartLoad", function (evt, cart) {
  $(".modal-note-trigger1").on("click", function (e) {
    e.preventDefault();
    $(".modal-note1").toggleClass("is-visible");
    $(".modal-note1").slideToggle("slow");
  });
});

window.addEventListener("DOMContentLoaded", () => {
  var delay = 1000;
  $newsletter_container = $("#dt-sc-newsletter-container");

  jQuery(document).ready(function ($) {
    if (getCookie("NewsletterCookie") == "") {
      setTimeout(function () {
        showNewsletterPopup();
      }, delay);
    } else {
      $newsletter_container.css("display", "none");
    }

    $(
      ".dt-sc-close-window, .dt-sc-newsletter-container .dt-sc-newsletter-container-overlay"
    ).click(function (e) {
      $newsletter_container.css("opacity", "0");
      $newsletter_container.css("visibility", "hidden");
      $newsletter_container.css("pointer-events", "none");
      $("body").css("overflow-y", "auto");
      $("body").css("height", "auto");
      e.preventDefault();
      setCookie("NewsletterCookie", "cookie-has-been-set", 1);
    });

    function showNewsletterPopup(e) {
      $newsletter_container.css("display", "block");
      $newsletter_container.css("opacity", "1");
      $newsletter_container.css("visibility", "visible");
      $("body").css("overflow-y", "hidden");
      $("body").css("height", "100vh");
    }

    $(".newsletter-success button").on("click", function () {
      window.location.replace("https://dt-booksque.myshopify.com");
    });

    $(".contact-form").on("submit", function () {
      setCookie("NewsletterCookie", "cookie-has-been-set", 1);
    });
  });

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = jQuery.trim(ca[i]);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }
});

if ($.cookie("dT_suggested-cookie") == "closed") {
  $(".customer-who-purchased").remove();
}

$(".dT_close").bind("click", function () {
  $(".customer-who-purchased").remove();
  $.cookie("dT_suggested-cookie", "closed", { expires: 1, path: "/" });
});

var elements = $(".customer-who-purchased li");
var init_element = 0;
var i = 0;
elements.removeClass("active");
function fadeInRandomElement() {
  if (i % 2 == 0) {
    var currentItem = elements.eq(init_element);
    currentItem.addClass("active");
    setTimeout(function () {
      currentItem.removeClass("active");
    }, 4000);

    init_element++;
    if (elements.length == init_element) {
      init_element = 0;
    }
  }
  i++;
}

setInterval(function () {
  fadeInRandomElement();
}, 3000);
