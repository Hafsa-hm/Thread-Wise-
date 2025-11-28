// Basic interactivity: mobile nav and contact form demo
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => btn.addEventListener('click', () => {
    const nav = btn.parentElement.querySelector('.nav');
    if(!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.background = 'rgba(255,255,255,0.97)';
    nav.style.padding = '12px';
    nav.style.borderRadius = '12px';
    nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
  }));
});

// Simple contact form placeholder
function handleContact(e){
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();
  if(!name || !email || !message){
    alert('Please complete all fields');
    return;
  }
  // prototype behaviour
  alert('Thanks, ' + name + '! This is a prototype. Your message would be sent in a live site.');
  document.querySelector('#contactForm').reset();
}

// expose handler globally
window.handleContact = handleContact;
