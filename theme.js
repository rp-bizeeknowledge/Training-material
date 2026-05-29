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

// PDF modal
window.openModal = function (id, e) {
  var el = document.getElementById(id);
  var modalH = 720;
  var vp = window.visualViewport;
  var vpTop = vp ? vp.pageTop : (window.scrollY || 0);
  var vpH = vp ? Math.min(vp.height, 900) : Math.min(window.innerHeight, 900);
  var top = Math.max(0, Math.round(vpTop + (vpH - modalH) / 2));
  el.style.top = top + "px";
  el.style.height = modalH + "px";
  el.classList.add("open");

  el._scrollLock = function (ev) {
    var body = el.querySelector(".pdf-modal-body");
    if (body && body.contains(ev.target)) {
      var atTop = body.scrollTop <= 0 && ev.deltaY < 0;
      var atBottom = body.scrollTop + body.clientHeight >= body.scrollHeight - 1 && ev.deltaY > 0;
      if (!atTop && !atBottom) return;
    }
    ev.preventDefault();
  };
  document.addEventListener("wheel", el._scrollLock, { passive: false });
  document.addEventListener("touchmove", el._scrollLock, { passive: false });
};
window.closeModal = function (id) {
  var el = document.getElementById(id);
  el.classList.remove("open");
  el.style.top = "";
  el.style.height = "";
  if (el._scrollLock) {
    document.removeEventListener("wheel", el._scrollLock);
    document.removeEventListener("touchmove", el._scrollLock);
    delete el._scrollLock;
  }
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
      cards.forEach(function (c) { c.style.height = ""; });
      var max = 0;
      cards.forEach(function (c) { max = Math.max(max, c.offsetHeight); });
      cards.forEach(function (c) { c.style.height = max + "px"; });
    });
  }
  // Run after layout is fully computed
  setTimeout(equalize, 0);
  window.addEventListener("load", equalize);
  window.addEventListener("resize", equalize);
})();

function arShow(state) {
  document.getElementById("ar-panel-default").style.display = "none";
  document.getElementById("ar-panel-no").style.display =
    state === "no" ? "block" : "none";
  document.getElementById("ar-panel-yes").style.display =
    state === "yes" ? "block" : "none";
  document.getElementById("ar-btn-no").className =
    "ar-btn" + (state === "no" ? " active-no" : "");
  document.getElementById("ar-btn-yes").className =
    "ar-btn" + (state === "yes" ? " active-yes" : "");
}
