// ── Constants ────────────────────────────────────────────────────────────────

// Each entry: [ISO 4217 code, display name, BCP 47 locale]
const CURRENCY_LIST = [
  ['AED', 'UAE Dirham',                          'ar-AE'],
  ['AFN', 'Afghan Afghani',                      'fa-AF'],
  ['ALL', 'Albanian Lek',                        'sq-AL'],
  ['AMD', 'Armenian Dram',                       'hy-AM'],
  ['ANG', 'Netherlands Antillean Guilder',       'nl-CW'],
  ['AOA', 'Angolan Kwanza',                      'pt-AO'],
  ['ARS', 'Argentine Peso',                      'es-AR'],
  ['AUD', 'Australian Dollar',                   'en-AU'],
  ['AWG', 'Aruban Florin',                       'nl-AW'],
  ['AZN', 'Azerbaijani Manat',                   'az-AZ'],
  ['BAM', 'Bosnia-Herzegovina Mark',             'bs-BA'],
  ['BBD', 'Barbadian Dollar',                    'en-BB'],
  ['BDT', 'Bangladeshi Taka',                    'bn-BD'],
  ['BGN', 'Bulgarian Lev',                       'bg-BG'],
  ['BHD', 'Bahraini Dinar',                      'ar-BH'],
  ['BIF', 'Burundian Franc',                     'fr-BI'],
  ['BMD', 'Bermudian Dollar',                    'en-BM'],
  ['BND', 'Brunei Dollar',                       'ms-BN'],
  ['BOB', 'Bolivian Boliviano',                  'es-BO'],
  ['BRL', 'Brazilian Real',                      'pt-BR'],
  ['BSD', 'Bahamian Dollar',                     'en-BS'],
  ['BTN', 'Bhutanese Ngultrum',                  'dz-BT'],
  ['BWP', 'Botswanan Pula',                      'en-BW'],
  ['BYN', 'Belarusian Ruble',                    'be-BY'],
  ['BZD', 'Belize Dollar',                       'en-BZ'],
  ['CAD', 'Canadian Dollar',                     'en-CA'],
  ['CDF', 'Congolese Franc',                     'fr-CD'],
  ['CHF', 'Swiss Franc',                         'de-CH'],
  ['CLP', 'Chilean Peso',                        'es-CL'],
  ['CNY', 'Chinese Yuan',                        'zh-CN'],
  ['COP', 'Colombian Peso',                      'es-CO'],
  ['CRC', 'Costa Rican Colón',                   'es-CR'],
  ['CUP', 'Cuban Peso',                          'es-CU'],
  ['CVE', 'Cape Verdean Escudo',                 'pt-CV'],
  ['CZK', 'Czech Koruna',                        'cs-CZ'],
  ['DJF', 'Djiboutian Franc',                    'fr-DJ'],
  ['DKK', 'Danish Krone',                        'da-DK'],
  ['DOP', 'Dominican Peso',                      'es-DO'],
  ['DZD', 'Algerian Dinar',                      'ar-DZ'],
  ['EGP', 'Egyptian Pound',                      'ar-EG'],
  ['ERN', 'Eritrean Nakfa',                      'ti-ER'],
  ['ETB', 'Ethiopian Birr',                      'am-ET'],
  ['EUR', 'Euro',                                'de-DE'],
  ['FJD', 'Fijian Dollar',                       'en-FJ'],
  ['FKP', 'Falkland Islands Pound',              'en-FK'],
  ['GBP', 'British Pound',                       'en-GB'],
  ['GEL', 'Georgian Lari',                       'ka-GE'],
  ['GHS', 'Ghanaian Cedi',                       'en-GH'],
  ['GIP', 'Gibraltar Pound',                     'en-GI'],
  ['GMD', 'Gambian Dalasi',                      'en-GM'],
  ['GNF', 'Guinean Franc',                       'fr-GN'],
  ['GTQ', 'Guatemalan Quetzal',                  'es-GT'],
  ['GYD', 'Guyanese Dollar',                     'en-GY'],
  ['HKD', 'Hong Kong Dollar',                    'zh-HK'],
  ['HNL', 'Honduran Lempira',                    'es-HN'],
  ['HTG', 'Haitian Gourde',                      'fr-HT'],
  ['HUF', 'Hungarian Forint',                    'hu-HU'],
  ['IDR', 'Indonesian Rupiah',                   'id-ID'],
  ['ILS', 'Israeli New Shekel',                  'he-IL'],
  ['INR', 'Indian Rupee',                        'en-IN'],
  ['IQD', 'Iraqi Dinar',                         'ar-IQ'],
  ['IRR', 'Iranian Rial',                        'fa-IR'],
  ['ISK', 'Icelandic Króna',                     'is-IS'],
  ['JMD', 'Jamaican Dollar',                     'en-JM'],
  ['JOD', 'Jordanian Dinar',                     'ar-JO'],
  ['JPY', 'Japanese Yen',                        'ja-JP'],
  ['KES', 'Kenyan Shilling',                     'sw-KE'],
  ['KGS', 'Kyrgyzstani Som',                     'ky-KG'],
  ['KHR', 'Cambodian Riel',                      'km-KH'],
  ['KMF', 'Comorian Franc',                      'ar-KM'],
  ['KRW', 'South Korean Won',                    'ko-KR'],
  ['KWD', 'Kuwaiti Dinar',                       'ar-KW'],
  ['KYD', 'Cayman Islands Dollar',               'en-KY'],
  ['KZT', 'Kazakhstani Tenge',                   'kk-KZ'],
  ['LAK', 'Laotian Kip',                         'lo-LA'],
  ['LBP', 'Lebanese Pound',                      'ar-LB'],
  ['LKR', 'Sri Lankan Rupee',                    'si-LK'],
  ['LRD', 'Liberian Dollar',                     'en-LR'],
  ['LSL', 'Lesotho Loti',                        'st-LS'],
  ['LYD', 'Libyan Dinar',                        'ar-LY'],
  ['MAD', 'Moroccan Dirham',                     'ar-MA'],
  ['MDL', 'Moldovan Leu',                        'ro-MD'],
  ['MGA', 'Malagasy Ariary',                     'mg-MG'],
  ['MKD', 'Macedonian Denar',                    'mk-MK'],
  ['MMK', 'Myanmar Kyat',                        'my-MM'],
  ['MNT', 'Mongolian Tögrög',                    'mn-MN'],
  ['MOP', 'Macanese Pataca',                     'zh-MO'],
  ['MRU', 'Mauritanian Ouguiya',                 'ar-MR'],
  ['MUR', 'Mauritian Rupee',                     'en-MU'],
  ['MVR', 'Maldivian Rufiyaa',                   'dv-MV'],
  ['MWK', 'Malawian Kwacha',                     'en-MW'],
  ['MXN', 'Mexican Peso',                        'es-MX'],
  ['MYR', 'Malaysian Ringgit',                   'ms-MY'],
  ['MZN', 'Mozambican Metical',                  'pt-MZ'],
  ['NAD', 'Namibian Dollar',                     'en-NA'],
  ['NGN', 'Nigerian Naira',                      'en-NG'],
  ['NIO', 'Nicaraguan Córdoba',                  'es-NI'],
  ['NOK', 'Norwegian Krone',                     'nb-NO'],
  ['NPR', 'Nepalese Rupee',                      'ne-NP'],
  ['NZD', 'New Zealand Dollar',                  'en-NZ'],
  ['OMR', 'Omani Rial',                          'ar-OM'],
  ['PAB', 'Panamanian Balboa',                   'es-PA'],
  ['PEN', 'Peruvian Sol',                        'es-PE'],
  ['PGK', 'Papua New Guinean Kina',              'en-PG'],
  ['PHP', 'Philippine Peso',                     'fil-PH'],
  ['PKR', 'Pakistani Rupee',                     'ur-PK'],
  ['PLN', 'Polish Złoty',                        'pl-PL'],
  ['PYG', 'Paraguayan Guaraní',                  'es-PY'],
  ['QAR', 'Qatari Riyal',                        'ar-QA'],
  ['RON', 'Romanian Leu',                        'ro-RO'],
  ['RSD', 'Serbian Dinar',                       'sr-RS'],
  ['RUB', 'Russian Ruble',                       'ru-RU'],
  ['RWF', 'Rwandan Franc',                       'rw-RW'],
  ['SAR', 'Saudi Riyal',                         'ar-SA'],
  ['SBD', 'Solomon Islands Dollar',              'en-SB'],
  ['SCR', 'Seychellois Rupee',                   'en-SC'],
  ['SDG', 'Sudanese Pound',                      'ar-SD'],
  ['SEK', 'Swedish Krona',                       'sv-SE'],
  ['SGD', 'Singapore Dollar',                    'en-SG'],
  ['SHP', 'Saint Helena Pound',                  'en-SH'],
  ['SLE', 'Sierra Leonean Leone',                'en-SL'],
  ['SOS', 'Somali Shilling',                     'so-SO'],
  ['SRD', 'Surinamese Dollar',                   'nl-SR'],
  ['STN', 'São Tomé & Príncipe Dobra',           'pt-ST'],
  ['SYP', 'Syrian Pound',                        'ar-SY'],
  ['SZL', 'Swazi Lilangeni',                     'en-SZ'],
  ['THB', 'Thai Baht',                           'th-TH'],
  ['TJS', 'Tajikistani Somoni',                  'tg-TJ'],
  ['TMT', 'Turkmenistani Manat',                 'tk-TM'],
  ['TND', 'Tunisian Dinar',                      'ar-TN'],
  ['TOP', 'Tongan Paʻanga',                      'to-TO'],
  ['TRY', 'Turkish Lira',                        'tr-TR'],
  ['TTD', 'Trinidad & Tobago Dollar',            'en-TT'],
  ['TWD', 'New Taiwan Dollar',                   'zh-TW'],
  ['TZS', 'Tanzanian Shilling',                  'sw-TZ'],
  ['UAH', 'Ukrainian Hryvnia',                   'uk-UA'],
  ['UGX', 'Ugandan Shilling',                    'en-UG'],
  ['USD', 'US Dollar',                           'en-US'],
  ['UYU', 'Uruguayan Peso',                      'es-UY'],
  ['UZS', 'Uzbekistani Som',                     'uz-UZ'],
  ['VES', 'Venezuelan Bolívar',                  'es-VE'],
  ['VND', 'Vietnamese Đồng',                     'vi-VN'],
  ['VUV', 'Vanuatu Vatu',                        'bi-VU'],
  ['WST', 'Samoan Tala',                         'en-WS'],
  ['XAF', 'Central African CFA Franc',           'fr-CM'],
  ['XCD', 'East Caribbean Dollar',               'en-AG'],
  ['XOF', 'West African CFA Franc',              'fr-SN'],
  ['XPF', 'CFP Franc',                           'fr-PF'],
  ['YER', 'Yemeni Rial',                         'ar-YE'],
  ['ZAR', 'South African Rand',                  'en-ZA'],
  ['ZMW', 'Zambian Kwacha',                      'en-ZM'],
];

// Build lookup map from the list
const CURRENCIES = Object.fromEntries(
  CURRENCY_LIST.map(([code, , locale]) => [code, { locale, currency: code }])
);

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

(function populateCurrencySelect() {
  const sel = document.getElementById('currency');
  CURRENCY_LIST.forEach(([code, name]) => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = `${code} — ${name}`;
    if (code === 'USD') opt.selected = true;
    sel.appendChild(opt);
  });
})();

MoneyAnimation.start();
showScreen('setup');
