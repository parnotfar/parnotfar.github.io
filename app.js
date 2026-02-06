/**
 * Par Not Far Waitlist Form
 * Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
 */
(function () {
  const FORM_ID = 'YOUR_FORM_ID';
  const form = document.getElementById('waitlist-form');
  const submitBtn = document.getElementById('submit-btn');
  const messageEl = document.getElementById('form-message');

  if (!form || !FORM_ID || FORM_ID === 'YOUR_FORM_ID') {
    if (messageEl) {
      messageEl.textContent = 'Form not configured. Replace YOUR_FORM_ID in app.js with your Formspree form ID.';
      messageEl.className = 'form-message error';
    }
    return;
  }

  form.setAttribute('action', `https://formspree.io/f/${FORM_ID}`);

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = form.querySelector('#email');
    if (!email || !email.value.trim()) {
      showMessage('Please enter your email.', 'error');
      return;
    }

    if (!isValidEmail(email.value)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    setLoading(true);
    showMessage('');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      const data = await response.json();

      if (response.ok) {
        showMessage('Thanks! You\'re on the list. We\'ll be in touch.', 'success');
        form.reset();
      } else {
        const msg = data.error || 'Something went wrong. Please try again.';
        showMessage(msg, 'error');
      }
    } catch (err) {
      showMessage('Something went wrong. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  });

  function showMessage(text, type) {
    if (!messageEl) return;
    messageEl.textContent = text;
    messageEl.className = 'form-message' + (type ? ' ' + type : '');
  }

  function setLoading(loading) {
    if (submitBtn) {
      submitBtn.disabled = loading;
      submitBtn.textContent = loading ? 'Sending…' : 'Get Early Access';
    }
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
})();
