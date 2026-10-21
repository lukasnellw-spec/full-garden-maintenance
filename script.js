const form = document.querySelector('#quote-form');
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => { form.elements.service.value = link.dataset.service; }));
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  document.querySelector('#message').value = `Hello, my name is ${data.get('name')}. I would like a garden service quote.\nArea: ${data.get('area')}\nService: ${data.get('service')}\nFrequency: ${data.get('frequency')}\nDetails: ${data.get('details') || 'To be discussed'}`;
  document.querySelector('#whatsapp').href = 'https://wa.me/27793199854?text=' + encodeURIComponent(document.querySelector('#message').value);
  document.querySelector('#result').hidden = false;
  document.querySelector('#status').textContent = 'Request prepared. Open WhatsApp, review the message, then press Send.';
});
document.querySelector('#copy').addEventListener('click', async () => {
  const field = document.querySelector('#message');
  try { await navigator.clipboard.writeText(field.value); document.querySelector('#status').textContent = 'Copied. Your request has not been sent.'; }
  catch { field.focus(); field.select(); document.querySelector('#status').textContent = 'Select the message and press Ctrl+C to copy.'; }
});
