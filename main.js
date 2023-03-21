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
