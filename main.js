document.addEventListener('DOMContentLoaded', () => {


  /* ===============================
     SCROLL SUAVE
  =============================== */
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });


  /* ===============================
     SECCIÓN ACTIVA POR SCROLL
  =============================== */
  const sections = document.querySelectorAll('.section');

  function setActiveSection() {
    let scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.classList[1]; // about, skills, etc

      if (scrollPosition >= top && scrollPosition < top + height) {
        section.classList.add('active-section');
      } else {
        section.classList.remove('active-section');
      }
    });
  }

  setActiveSection();
  document.addEventListener('scroll', setActiveSection, { passive: true });
  window.addEventListener('resize', setActiveSection);


  /* ===============================
     TOGGLE "SOBRE MÍ"
  =============================== */
  const aboutSection = document.querySelector('.about');

  if (aboutSection) {
    aboutSection.addEventListener('click', () => {
      aboutSection.classList.toggle('expanded');
    });
  }


  /* ===============================
     ANIMACIÓN AL APARECER
  =============================== */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
