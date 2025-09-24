// simple form submit animation: disables button, shows check for success
  const form = document.getElementById('purchaseForm');
  const btn = document.getElementById('purchaseBtn');
  const btnText = document.getElementById('btnText');
  const check = document.getElementById('check');
  const tick = document.getElementById('tick');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    btn.setAttribute('disabled', 'true');
    btnText.style.opacity = '0';
    // show spinner effect (shimmer on button)
    btn.classList.add('animate-shimmer');

    // simulate network
    setTimeout(() => {
      // show checkmark
      btn.classList.remove('animate-shimmer');
      check.classList.remove('hidden');
      // animate tick draw
      tick.style.transition = 'stroke-dashoffset .6s ease .05s';
      tick.style.strokeDashoffset = '0';

      // subtle success state
      btn.style.background = 'linear-gradient(90deg, var(--primary-500), var(--accent-1))';
      btn.classList.add('cta-glow');

      setTimeout(() => {
        // reset button to original text after a moment
        check.classList.add('hidden');
        btnText.style.opacity = '1';
        btn.removeAttribute('disabled');
        btn.style.background = '';
        btn.classList.remove('cta-glow');
        tick.style.strokeDashoffset = '80';
      }, 1500);
    }, 900);
  });