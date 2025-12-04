// UI improvements: mobile nav, active link highlight, lightbox, form mock, smooth scroll
(function () {
  // set year(s)
  document.getElementById('yr')?.textContent = new Date().getFullYear();
  document.getElementById('yr2')?.textContent = new Date().getFullYear();
  document.getElementById('yr3')?.textContent = new Date().getFullYear();

  // mobile nav toggle
  const toggle = document.querySelectorAll('.nav-toggle');
  const navList = document.getElementById('nav-list');
  document.querySelectorAll('.nav-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (navList) navList.style.display = expanded ? 'none' : 'flex';
    });
  });

  // active nav link based on current URL
  const links = document.querySelectorAll('.nav-link');
  links.forEach(a => {
    if (location.pathname.endsWith(a.getAttribute('href'))) {
      a.classList.add('active');
    }
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // gallery lightbox (simple)
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lbClose = document.querySelector('.lightbox-close');
  document.querySelectorAll('.photo-grid img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
    // keyboard accessibility
    img.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') img.click();
    });
  });
  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }
  lbClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.getAttribute('aria-hidden') === 'false') closeLightbox();
  });

  // contact form mock submit + simple validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.getElementById('formMessage');
      const fd = new FormData(form);
      const name = (fd.get('name') || '').toString().trim();
      const email = (fd.get('email') || '').toString().trim();
      if (!name || !email) { msg.textContent = 'Please enter name and a valid email.'; return; }
      msg.textContent = 'Sending...';
      setTimeout(() => {
        msg.textContent = 'Thanks — we will contact you within 24–48 hours.';
        form.reset();
      }, 900);
    });
  }
})();
