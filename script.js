// small shared JS: mobile nav, year, form mock
(function(){
  document.getElementById('yr')?.textContent = new Date().getFullYear();
  document.getElementById('yr2')?.textContent = new Date().getFullYear();
  document.getElementById('yr3')?.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if(navList) navList.style.display = expanded ? 'none' : 'flex';
    });
  }

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const msg = document.getElementById('formMessage');
      const fm = new FormData(form);
      const name = fm.get('name')?.toString().trim();
      const email = fm.get('email')?.toString().trim();
      if(!name || !email){ msg.textContent = 'Please enter name and email.'; return; }
      msg.textContent = 'Sending...';
      setTimeout(()=>{ msg.textContent = 'Thanks! We will contact you within 24–48 hours.'; form.reset(); }, 800);
    });
  }
})();
