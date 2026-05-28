(function () {
  var overlay = document.createElement('div');
  overlay.className = 'img-lightbox-overlay';
  var img = document.createElement('img');
  overlay.appendChild(img);
  document.body.appendChild(overlay);

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.doc-frame img').forEach(function (el) {
    el.addEventListener('click', function () { open(el.src, el.alt); });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();

// PDF modal
window.openModal = function (id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
};
window.closeModal = function (id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
};
document.querySelectorAll('.pdf-modal-overlay').forEach(function (el) {
  el.addEventListener('click', function (e) {
    if (e.target === el) window.closeModal(el.id);
  });
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.pdf-modal-overlay.open').forEach(function (el) {
      window.closeModal(el.id);
    });
  }
});
