(function () {
  var overlay = document.createElement("div");
  overlay.className = "img-lightbox-overlay";
  var img = document.createElement("img");
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || "";
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".doc-frame img").forEach(function (el) {
    el.addEventListener("click", function () {
      open(el.src, el.alt);
    });
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
})();

// PDF modal — scroll lock helpers
var _modalScrollY = 0;
var _modalCount = 0;

function _lockScroll() {
  if (_modalCount++ > 0) return;
  _modalScrollY = window.scrollY || window.pageYOffset || 0;
  document.body.style.position = "fixed";
  document.body.style.top = -_modalScrollY + "px";
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.overflow = "hidden";
}

function _unlockScroll() {
  if (--_modalCount > 0) return;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.overflow = "";
  window.scrollTo(0, _modalScrollY);
}

window.openModal = function (id, e) {
  var el = document.getElementById(id);
  var modalH = 720;
  var vp = window.visualViewport;
  // When body is fixed (scroll already locked by a parent modal),
  // visualViewport.pageTop returns 0 — use the saved offset instead
  var vpTop =
    document.body.style.position === "fixed"
      ? _modalScrollY
      : vp
        ? vp.pageTop
        : window.scrollY || 0;
  var vpH = vp ? Math.min(vp.height, 900) : Math.min(window.innerHeight, 900);
  var top = Math.max(0, Math.round(vpTop + (vpH - modalH) / 2));
  el.style.top = top + "px";
  el.style.height = modalH + "px";
  el.classList.add("open");
  _lockScroll();
};
window.closeModal = function (id) {
  var el = document.getElementById(id);
  el.classList.remove("open");
  el.style.top = "";
  el.style.height = "";
  _unlockScroll();
};
document.querySelectorAll(".pdf-modal-overlay").forEach(function (el) {
  el.addEventListener("click", function (e) {
    if (e.target === el) window.closeModal(el.id);
  });
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".pdf-modal-overlay.open").forEach(function (el) {
      window.closeModal(el.id);
    });
  }
});

// Equal-height nav cards
(function () {
  function equalize() {
    document.querySelectorAll(".nav-grid").forEach(function (grid) {
      var cards = grid.querySelectorAll(".nav-card");
      cards.forEach(function (c) {
        c.style.height = "";
      });
      var max = 0;
      cards.forEach(function (c) {
        max = Math.max(max, c.offsetHeight);
      });
      cards.forEach(function (c) {
        c.style.height = max + "px";
      });
    });
  }
  // Run after layout is fully computed
  setTimeout(equalize, 0);
  window.addEventListener("load", equalize);
  window.addEventListener("resize", equalize);
})();

// Annual report status toggle

function arShow(button, state) {
  var wrap = button.closest(".ar-wrap");
  if (!wrap) return;

  wrap.querySelector(".ar-panel-default").style.display = "none";
  wrap.querySelector(".ar-panel-no").style.display =
    state === "no" ? "block" : "none";
  wrap.querySelector(".ar-panel-yes").style.display =
    state === "yes" ? "block" : "none";

  var btnNo = wrap.querySelector(".ar-btn-no");
  var btnYes = wrap.querySelector(".ar-btn-yes");
  if (btnNo)
    btnNo.className = "ar-btn ar-btn-no" + (state === "no" ? " active-no" : "");
  if (btnYes)
    btnYes.className =
      "ar-btn ar-btn-yes" + (state === "yes" ? " active-yes" : "");
}
