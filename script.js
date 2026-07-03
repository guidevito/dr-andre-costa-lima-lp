document.getElementById('year').textContent = new Date().getFullYear();

function track(eventName, params = {}) {
  if (typeof window.gtag === 'function') window.gtag('event', eventName, params);
  if (typeof window.fbq === 'function') window.fbq('trackCustom', eventName, params);
}

document.querySelectorAll('.track-whatsapp').forEach((link) => link.addEventListener('click', () => track('whatsapp_click', { location: link.closest('section,header')?.id || 'page' })));
document.querySelectorAll('.track-phone').forEach((link) => link.addEventListener('click', () => track('phone_click')));
