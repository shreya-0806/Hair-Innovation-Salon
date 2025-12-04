// Small shared JS for all pages
const setYears = ()=>{
const y = new Date().getFullYear();
document.getElementById('year')?.textContent = y;
document.getElementById('year-2')?.textContent = y;
document.getElementById('year-3')?.textContent = y;
};
setYears();


// Contact form handling (client-side mock)
const form = document.getElementById('contactForm');
if(form){
form.addEventListener('submit', async (e)=>{
e.preventDefault();
const msg = document.getElementById('formMessage');
const fm = new FormData(form);
const name = fm.get('name')?.toString().trim();
const email = fm.get('email')?.toString().trim();
if(!name || !email){ msg.textContent = 'Please fill required fields.'; return; }
msg.textContent = 'Sending...';
// Simulate network
setTimeout(()=>{ msg.textContent = 'Thanks! We will contact you within 24–48 hours.'; form.reset(); }, 800);
});
}