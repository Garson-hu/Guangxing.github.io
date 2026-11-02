/* Blog: remembers the 中 / EN choice, filters the index by category, builds the table of contents on posts. */
(function () {
  // ---- remember the language picked with the 中 / EN switch; index pages follow it ----
  document.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a[data-lang]') : null;
    if (!link) return;
    try { localStorage.setItem('blog-lang', link.getAttribute('data-lang')); } catch (err) {}
  });

  // ---- index: filter posts by category; the choice lives in the URL hash (#research) ----
  var filter = document.querySelector('.bl-filter');
  if (filter) {
    var buttons = Array.prototype.slice.call(filter.querySelectorAll('button'));
    var cats = buttons.map(function (b) { return b.getAttribute('data-cat'); });
    var years = Array.prototype.slice.call(document.querySelectorAll('.bl-year'));
    var none = document.querySelector('.bl-filter-empty');

    var apply = function (cat) {
      if (cats.indexOf(cat) < 0) cat = '';
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-cat') === cat ? 'true' : 'false');
      });
      var shown = 0;
      years.forEach(function (year) {
        var left = 0;
        Array.prototype.forEach.call(year.querySelectorAll('.bl-item'), function (item) {
          var match = !cat || item.getAttribute('data-cat') === cat;
          item.hidden = !match;
          if (match) left++;
        });
        year.hidden = !left;
        shown += left;
      });
      if (none) none.hidden = shown > 0;
    };

    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        var cat = b.getAttribute('data-cat');
        apply(cat);
        history.replaceState(null, '', cat ? '#' + cat : location.pathname + location.search);
      });
    });
    window.addEventListener('hashchange', function () { apply(location.hash.slice(1)); });
    apply(location.hash.slice(1));
  }

  // ---- post: table of contents from the h2 / h3 headings, highlighting the section being read ----
  var content = document.querySelector('.bl-content');
  var toc = document.querySelector('.bl-toc');
  if (!content || !toc || content.getAttribute('data-toc') === 'off') return;
  var heads = Array.prototype.slice.call(content.querySelectorAll('h2[id], h3[id]'));
  if (heads.length < 3) return;

  var list = toc.querySelector('ol');
  var links = heads.map(function (h) {
    var li = document.createElement('li');
    li.className = 'bl-toc-' + h.tagName.toLowerCase();
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
    return a;
  });
  toc.hidden = false;

  var ticking = false;
  function update() {
    ticking = false;
    var current = -1;
    for (var i = 0; i < heads.length; i++) {
      if (heads[i].getBoundingClientRect().top < 120) current = i;
      else break;
    }
    links.forEach(function (a, j) { a.classList.toggle('is-active', j === current); });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  update();
})();
