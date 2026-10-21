/* Photography page: scroll-reveal for photos and a lightbox for flipping through them. */
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.ph-item'));
  if (!items.length) return;

  // ---- reveal each photo as it scrolls into view ----
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    items.forEach(function (el) { observer.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---- lightbox ----
  var box = document.querySelector('.ph-lightbox');
  if (!box) return;
  var stage = box.querySelector('.ph-lb-stage');
  var img = box.querySelector('.ph-lb-img');
  var caption = box.querySelector('.ph-lb-caption');
  var count = box.querySelector('.ph-lb-count');
  var closeBtn = box.querySelector('.ph-lb-close');

  var photos = items.map(function (el) {
    var title = el.querySelector('.ph-title');
    var location = el.querySelector('.ph-location');
    return {
      src: el.querySelector('.ph-link').getAttribute('href'),
      alt: el.querySelector('img').getAttribute('alt'),
      title: title ? title.textContent : '',
      location: location ? location.textContent : ''
    };
  });
  var current = 0;
  var lastFocus = null;

  function preload(i) {
    var p = photos[(i + photos.length) % photos.length];
    new Image().src = p.src;
  }

  var STAGE_ANIMS = ['out-left', 'out-right', 'from-left', 'from-right', 'from-none'];
  var swapTimer = null;

  function animate(name) {
    STAGE_ANIMS.forEach(function (c) { stage.classList.remove(c); });
    stage.style.opacity = '';
    void stage.offsetWidth; // restart the animation
    stage.classList.add(name);
  }

  // Put photo p on the stage; resolves once it is decoded and ready to animate in.
  function render(p) {
    img.src = p.src;
    img.alt = p.alt;
    caption.textContent = p.title;
    if (p.location) {
      var loc = document.createElement('span');
      loc.textContent = (p.title ? ' ' : '') + p.location;
      caption.appendChild(loc);
    }
    count.textContent = (current + 1) + ' / ' + photos.length;
    return (img.decode ? img.decode() : Promise.resolve()).catch(function () {});
  }

  // direction: 1 = next, -1 = previous, 0 = just opened
  function show(i, direction) {
    current = (i + photos.length) % photos.length;
    var p = photos[current];
    clearTimeout(swapTimer);
    preload(current + 1);
    preload(current - 1);

    if (!direction || reduceMotion) {
      render(p).then(function () { if (photos[current] === p) animate('from-none'); });
      return;
    }
    // slide the current photo out (unless it is already on its way out), then bring the next one in
    if (!stage.classList.contains('out-left') && !stage.classList.contains('out-right')) {
      animate(direction > 0 ? 'out-left' : 'out-right');
    }
    swapTimer = setTimeout(function () {
      render(p).then(function () {
        if (photos[current] === p) animate(direction > 0 ? 'from-right' : 'from-left');
      });
    }, 180);
  }

  function open(i) {
    lastFocus = document.activeElement;
    stage.style.opacity = '0'; // hidden until the photo is decoded
    box.hidden = false;
    document.documentElement.classList.add('ph-lb-open');
    show(i, 0);
    closeBtn.focus();
  }

  function close() {
    box.hidden = true;
    document.documentElement.classList.remove('ph-lb-open');
    if (lastFocus) lastFocus.focus();
  }

  items.forEach(function (el, i) {
    el.querySelector('.ph-link').addEventListener('click', function (e) {
      e.preventDefault();
      open(i);
    });
  });
  closeBtn.addEventListener('click', close);
  box.querySelector('.ph-lb-prev').addEventListener('click', function () { show(current - 1, -1); });
  box.querySelector('.ph-lb-next').addEventListener('click', function () { show(current + 1, 1); });
  box.addEventListener('click', function (e) { if (e.target === box) close(); });

  document.addEventListener('keydown', function (e) {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowRight') show(current + 1, 1);
    else if (e.key === 'ArrowLeft') show(current - 1, -1);
  });

  // swipe on touch screens
  var startX = null, startY = null;
  box.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  box.addEventListener('touchend', function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    var dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    startX = startY = null;
  });
})();
