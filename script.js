// Portfolio interactions
document.addEventListener('DOMContentLoaded', function () {
  // Project filtering
  var filters = document.querySelectorAll('.filter');
  var cards = document.querySelectorAll('.project-card');

  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      cards.forEach(function (card) {
        var cat = card.getAttribute('data-cat');
        if (f === 'all' || cat === f) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Active nav link on scroll
  var sections = document.querySelectorAll('.section');
  var navLinks = document.querySelectorAll('.topnav a');

  function onScroll() {
    var pos = window.scrollY + 120;
    var current = '';
    sections.forEach(function (sec) {
      if (sec.offsetTop <= pos) { current = sec.getAttribute('id'); }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});
