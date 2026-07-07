// Artifact filter buttons
document.addEventListener('DOMContentLoaded', function () {
  var filterButtons = document.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('.artifact-card');

      filterButtons.forEach(function (button) {
          button.addEventListener('click', function () {
                filterButtons.forEach(function (b) {
                        b.classList.remove('active');
                              });
                                    button.classList.add('active');

                                          var filter = button.getAttribute('data-filter');

                                                cards.forEach(function (card) {
                                                        var status = card.getAttribute('data-status');
                                                                if (filter === 'all' || filter === status) {
                                                                          card.style.display = '';
                                                                                  } else {
                                                                                            card.style.display = 'none';
                                                                                                    }
                                                                                                          });
                                                                                                              });
                                                                                                                });
                                                                                                                
                                                                                                                  // Simple scroll-reveal animation for sections
                                                                                                                    var sections = document.querySelectorAll('.section');
                                                                                                                      var observer = new IntersectionObserver(function (entries) {
                                                                                                                          entries.forEach(function (entry) {
                                                                                                                                if (entry.isIntersecting) {
                                                                                                                                        entry.target.style.opacity = '1';
                                                                                                                                                entry.target.style.transform = 'translateY(0)';
                                                                                                                                                      }
                                                                                                                                                          });
                                                                                                                                                            }, { threshold: 0.1 });
                                                                                                                                                            
                                                                                                                                                              sections.forEach(function (section) {
                                                                                                                                                                  section.style.opacity = '0';
                                                                                                                                                                      section.style.transform = 'translateY(20px)';
                                                                                                                                                                          section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                                                                                                                                                                              observer.observe(section);
                                                                                                                                                                                });
                                                                                                                                                                                });
                                                                                                                                                                                
