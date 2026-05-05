// ── Constants ────────────────────────────────────────────────────────────────

const CURRENCIES = {
  USD: { locale: 'en-US',  currency: 'USD' },
  EUR: { locale: 'de-DE',  currency: 'EUR' },
  GBP: { locale: 'en-GB',  currency: 'GBP' },
  JPY: { locale: 'ja-JP',  currency: 'JPY' },
  CAD: { locale: 'en-CA',  currency: 'CAD' },
  AUD: { locale: 'en-AU',  currency: 'AUD' },
  CHF: { locale: 'de-CH',  currency: 'CHF' },
};

const state = {
  hourlyWage: 0,
  numPeople:  0,
  currency:   'USD',
  startTime:  null,
  elapsedMs:  0,
  running:    false,
  rateMode:   'second',
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function pad(n) {
  return String(n).padStart(2, '0');
}

function formatTime(ms) {
  const total = Math.floor(ms / 1000);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  const d = Math.floor((ms % 1000) / 100);
  return `${pad(h)}:${pad(m)}:${pad(s)}.${d}`;
}

function formatCurrency(amount) {
  const { locale, currency } = CURRENCIES[state.currency];
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}

function calcCost(ms) {
  return (state.hourlyWage / 3600) * (ms / 1000) * state.numPeople;
}

function formatRate() {
  const perSecond = (state.hourlyWage / 3600) * state.numPeople;
  if (state.rateMode === 'second') {
    return `${formatCurrency(perSecond)} / sec  ·  click to switch`;
  }
  return `${formatCurrency(perSecond * 3600)} / hr  ·  click to switch`;
}

// ── Money animation (fully isolated) ─────────────────────────────────────────

const SYMBOLS = ['$', '💵', '💰', '💸', '🤑'];

const MoneyAnimation = {
  _intervalId: null,

  start() {
    this._spawn();
    this._intervalId = setInterval(() => this._spawn(), 380);
  },

  stop() {
    clearInterval(this._intervalId);
    document.getElementById('money-stage').innerHTML = '';
  },

  _spawn() {
    const el = document.createElement('span');
    el.className = 'money-item';
    el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

    const size  = 14 + Math.random() * 34;
    const left  = Math.random() * 100;
    const dur   = 5 + Math.random() * 7;
    const rotS  = ((Math.random() - 0.5) * 50).toFixed(1) + 'deg';
    const rotE  = ((Math.random() - 0.5) * 50).toFixed(1) + 'deg';

    el.style.cssText = [
      `left: ${left}%`,
      `font-size: ${size}px`,
      `animation-duration: ${dur}s`,
      `--rot-start: ${rotS}`,
      `--rot-end: ${rotE}`,
    ].join(';');

    document.getElementById('money-stage').appendChild(el);
    el.addEventListener('animationend', () => el.remove(), { once: true });
  },
};

// ── Timer engine ──────────────────────────────────────────────────────────────

let _rafId = null;

function tick() {
  if (!state.running) return;
  state.elapsedMs = Date.now() - state.startTime;
  document.getElementById('elapsed-display').textContent = formatTime(state.elapsedMs);
  document.getElementById('cost-display').textContent    = formatCurrency(calcCost(state.elapsedMs));
  _rafId = requestAnimationFrame(tick);
}

function startTimer() {
  state.startTime = Date.now() - state.elapsedMs;
  state.running   = true;
  _rafId = requestAnimationFrame(tick);
}

function stopTimer() {
  state.running = false;
  cancelAnimationFrame(_rafId);
}

function resetState() {
  stopTimer();
  state.elapsedMs = 0;
  state.startTime = null;
  state.rateMode  = 'second';
}

// ── UI controller ─────────────────────────────────────────────────────────────

function showScreen(name) {
  document.getElementById('screen-setup').classList.toggle('active', name === 'setup');
  document.getElementById('screen-timer').classList.toggle('active', name === 'timer');
}

function updateRateDisplay() {
  document.getElementById('rate-toggle').textContent = formatRate();
}

function validateForm() {
  const wage   = parseFloat(document.getElementById('wage').value);
  const people = parseInt(document.getElementById('people').value, 10);

  if (!document.getElementById('wage').value.trim() || isNaN(wage) || wage <= 0) {
    return 'Please enter a valid hourly wage greater than zero.';
  }
  if (!document.getElementById('people').value.trim() || isNaN(people) || people < 1) {
    return 'Number of people must be at least 1.';
  }
  if (!Number.isInteger(people)) {
    return 'Number of people must be a whole number.';
  }
  return null;
}

document.getElementById('setup-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const error = validateForm();
  document.getElementById('form-error').textContent = error ?? '';
  if (error) return;

  state.hourlyWage = parseFloat(document.getElementById('wage').value);
  state.numPeople  = parseInt(document.getElementById('people').value, 10);
  state.currency   = document.getElementById('currency').value;
  state.elapsedMs  = 0;
  state.rateMode   = 'second';

  document.getElementById('elapsed-display').textContent = formatTime(0);
  document.getElementById('cost-display').textContent    = formatCurrency(0);
  updateRateDisplay();

  showScreen('timer');
  startTimer();
});

document.getElementById('rate-toggle').addEventListener('click', () => {
  state.rateMode = state.rateMode === 'second' ? 'hour' : 'second';
  updateRateDisplay();
});

document.getElementById('reset-btn').addEventListener('click', () => {
  resetState();
  document.getElementById('form-error').textContent = '';
  showScreen('setup');
});

// ── Init ──────────────────────────────────────────────────────────────────────

MoneyAnimation.start();
showScreen('setup');
