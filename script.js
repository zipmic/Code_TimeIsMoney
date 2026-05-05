// ── Constants ────────────────────────────────────────────────────────────────

// Each entry: [ISO 4217 code, display name, BCP 47 locale, ISO 3166-1 alpha-2 country code]
const CURRENCY_LIST = [
  ['AED', 'UAE Dirham',                          'ar-AE',  'AE'],
  ['AFN', 'Afghan Afghani',                      'fa-AF',  'AF'],
  ['ALL', 'Albanian Lek',                        'sq-AL',  'AL'],
  ['AMD', 'Armenian Dram',                       'hy-AM',  'AM'],
  ['ANG', 'Netherlands Antillean Guilder',       'nl-CW',  'CW'],
  ['AOA', 'Angolan Kwanza',                      'pt-AO',  'AO'],
  ['ARS', 'Argentine Peso',                      'es-AR',  'AR'],
  ['AUD', 'Australian Dollar',                   'en-AU',  'AU'],
  ['AWG', 'Aruban Florin',                       'nl-AW',  'AW'],
  ['AZN', 'Azerbaijani Manat',                   'az-AZ',  'AZ'],
  ['BAM', 'Bosnia-Herzegovina Mark',             'bs-BA',  'BA'],
  ['BBD', 'Barbadian Dollar',                    'en-BB',  'BB'],
  ['BDT', 'Bangladeshi Taka',                    'bn-BD',  'BD'],
  ['BGN', 'Bulgarian Lev',                       'bg-BG',  'BG'],
  ['BHD', 'Bahraini Dinar',                      'ar-BH',  'BH'],
  ['BIF', 'Burundian Franc',                     'fr-BI',  'BI'],
  ['BMD', 'Bermudian Dollar',                    'en-BM',  'BM'],
  ['BND', 'Brunei Dollar',                       'ms-BN',  'BN'],
  ['BOB', 'Bolivian Boliviano',                  'es-BO',  'BO'],
  ['BRL', 'Brazilian Real',                      'pt-BR',  'BR'],
  ['BSD', 'Bahamian Dollar',                     'en-BS',  'BS'],
  ['BTN', 'Bhutanese Ngultrum',                  'dz-BT',  'BT'],
  ['BWP', 'Botswanan Pula',                      'en-BW',  'BW'],
  ['BYN', 'Belarusian Ruble',                    'be-BY',  'BY'],
  ['BZD', 'Belize Dollar',                       'en-BZ',  'BZ'],
  ['CAD', 'Canadian Dollar',                     'en-CA',  'CA'],
  ['CDF', 'Congolese Franc',                     'fr-CD',  'CD'],
  ['CHF', 'Swiss Franc',                         'de-CH',  'CH'],
  ['CLP', 'Chilean Peso',                        'es-CL',  'CL'],
  ['CNY', 'Chinese Yuan',                        'zh-CN',  'CN'],
  ['COP', 'Colombian Peso',                      'es-CO',  'CO'],
  ['CRC', 'Costa Rican Colón',                   'es-CR',  'CR'],
  ['CUP', 'Cuban Peso',                          'es-CU',  'CU'],
  ['CVE', 'Cape Verdean Escudo',                 'pt-CV',  'CV'],
  ['CZK', 'Czech Koruna',                        'cs-CZ',  'CZ'],
  ['DJF', 'Djiboutian Franc',                    'fr-DJ',  'DJ'],
  ['DKK', 'Danish Krone',                        'da-DK',  'DK'],
  ['DOP', 'Dominican Peso',                      'es-DO',  'DO'],
  ['DZD', 'Algerian Dinar',                      'ar-DZ',  'DZ'],
  ['EGP', 'Egyptian Pound',                      'ar-EG',  'EG'],
  ['ERN', 'Eritrean Nakfa',                      'ti-ER',  'ER'],
  ['ETB', 'Ethiopian Birr',                      'am-ET',  'ET'],
  ['EUR', 'Euro',                                'de-DE',  'EU'],
  ['FJD', 'Fijian Dollar',                       'en-FJ',  'FJ'],
  ['FKP', 'Falkland Islands Pound',              'en-FK',  'FK'],
  ['GBP', 'British Pound',                       'en-GB',  'GB'],
  ['GEL', 'Georgian Lari',                       'ka-GE',  'GE'],
  ['GHS', 'Ghanaian Cedi',                       'en-GH',  'GH'],
  ['GIP', 'Gibraltar Pound',                     'en-GI',  'GI'],
  ['GMD', 'Gambian Dalasi',                      'en-GM',  'GM'],
  ['GNF', 'Guinean Franc',                       'fr-GN',  'GN'],
  ['GTQ', 'Guatemalan Quetzal',                  'es-GT',  'GT'],
  ['GYD', 'Guyanese Dollar',                     'en-GY',  'GY'],
  ['HKD', 'Hong Kong Dollar',                    'zh-HK',  'HK'],
  ['HNL', 'Honduran Lempira',                    'es-HN',  'HN'],
  ['HTG', 'Haitian Gourde',                      'fr-HT',  'HT'],
  ['HUF', 'Hungarian Forint',                    'hu-HU',  'HU'],
  ['IDR', 'Indonesian Rupiah',                   'id-ID',  'ID'],
  ['ILS', 'Israeli New Shekel',                  'he-IL',  'IL'],
  ['INR', 'Indian Rupee',                        'en-IN',  'IN'],
  ['IQD', 'Iraqi Dinar',                         'ar-IQ',  'IQ'],
  ['IRR', 'Iranian Rial',                        'fa-IR',  'IR'],
  ['ISK', 'Icelandic Króna',                     'is-IS',  'IS'],
  ['JMD', 'Jamaican Dollar',                     'en-JM',  'JM'],
  ['JOD', 'Jordanian Dinar',                     'ar-JO',  'JO'],
  ['JPY', 'Japanese Yen',                        'ja-JP',  'JP'],
  ['KES', 'Kenyan Shilling',                     'sw-KE',  'KE'],
  ['KGS', 'Kyrgyzstani Som',                     'ky-KG',  'KG'],
  ['KHR', 'Cambodian Riel',                      'km-KH',  'KH'],
  ['KMF', 'Comorian Franc',                      'ar-KM',  'KM'],
  ['KRW', 'South Korean Won',                    'ko-KR',  'KR'],
  ['KWD', 'Kuwaiti Dinar',                       'ar-KW',  'KW'],
  ['KYD', 'Cayman Islands Dollar',               'en-KY',  'KY'],
  ['KZT', 'Kazakhstani Tenge',                   'kk-KZ',  'KZ'],
  ['LAK', 'Laotian Kip',                         'lo-LA',  'LA'],
  ['LBP', 'Lebanese Pound',                      'ar-LB',  'LB'],
  ['LKR', 'Sri Lankan Rupee',                    'si-LK',  'LK'],
  ['LRD', 'Liberian Dollar',                     'en-LR',  'LR'],
  ['LSL', 'Lesotho Loti',                        'st-LS',  'LS'],
  ['LYD', 'Libyan Dinar',                        'ar-LY',  'LY'],
  ['MAD', 'Moroccan Dirham',                     'ar-MA',  'MA'],
  ['MDL', 'Moldovan Leu',                        'ro-MD',  'MD'],
  ['MGA', 'Malagasy Ariary',                     'mg-MG',  'MG'],
  ['MKD', 'Macedonian Denar',                    'mk-MK',  'MK'],
  ['MMK', 'Myanmar Kyat',                        'my-MM',  'MM'],
  ['MNT', 'Mongolian Tögrög',                    'mn-MN',  'MN'],
  ['MOP', 'Macanese Pataca',                     'zh-MO',  'MO'],
  ['MRU', 'Mauritanian Ouguiya',                 'ar-MR',  'MR'],
  ['MUR', 'Mauritian Rupee',                     'en-MU',  'MU'],
  ['MVR', 'Maldivian Rufiyaa',                   'dv-MV',  'MV'],
  ['MWK', 'Malawian Kwacha',                     'en-MW',  'MW'],
  ['MXN', 'Mexican Peso',                        'es-MX',  'MX'],
  ['MYR', 'Malaysian Ringgit',                   'ms-MY',  'MY'],
  ['MZN', 'Mozambican Metical',                  'pt-MZ',  'MZ'],
  ['NAD', 'Namibian Dollar',                     'en-NA',  'NA'],
  ['NGN', 'Nigerian Naira',                      'en-NG',  'NG'],
  ['NIO', 'Nicaraguan Córdoba',                  'es-NI',  'NI'],
  ['NOK', 'Norwegian Krone',                     'nb-NO',  'NO'],
  ['NPR', 'Nepalese Rupee',                      'ne-NP',  'NP'],
  ['NZD', 'New Zealand Dollar',                  'en-NZ',  'NZ'],
  ['OMR', 'Omani Rial',                          'ar-OM',  'OM'],
  ['PAB', 'Panamanian Balboa',                   'es-PA',  'PA'],
  ['PEN', 'Peruvian Sol',                        'es-PE',  'PE'],
  ['PGK', 'Papua New Guinean Kina',              'en-PG',  'PG'],
  ['PHP', 'Philippine Peso',                     'fil-PH', 'PH'],
  ['PKR', 'Pakistani Rupee',                     'ur-PK',  'PK'],
  ['PLN', 'Polish Złoty',                        'pl-PL',  'PL'],
  ['PYG', 'Paraguayan Guaraní',                  'es-PY',  'PY'],
  ['QAR', 'Qatari Riyal',                        'ar-QA',  'QA'],
  ['RON', 'Romanian Leu',                        'ro-RO',  'RO'],
  ['RSD', 'Serbian Dinar',                       'sr-RS',  'RS'],
  ['RUB', 'Russian Ruble',                       'ru-RU',  'RU'],
  ['RWF', 'Rwandan Franc',                       'rw-RW',  'RW'],
  ['SAR', 'Saudi Riyal',                         'ar-SA',  'SA'],
  ['SBD', 'Solomon Islands Dollar',              'en-SB',  'SB'],
  ['SCR', 'Seychellois Rupee',                   'en-SC',  'SC'],
  ['SDG', 'Sudanese Pound',                      'ar-SD',  'SD'],
  ['SEK', 'Swedish Krona',                       'sv-SE',  'SE'],
  ['SGD', 'Singapore Dollar',                    'en-SG',  'SG'],
  ['SHP', 'Saint Helena Pound',                  'en-SH',  'SH'],
  ['SLE', 'Sierra Leonean Leone',                'en-SL',  'SL'],
  ['SOS', 'Somali Shilling',                     'so-SO',  'SO'],
  ['SRD', 'Surinamese Dollar',                   'nl-SR',  'SR'],
  ['STN', 'São Tomé & Príncipe Dobra',           'pt-ST',  'ST'],
  ['SYP', 'Syrian Pound',                        'ar-SY',  'SY'],
  ['SZL', 'Swazi Lilangeni',                     'en-SZ',  'SZ'],
  ['THB', 'Thai Baht',                           'th-TH',  'TH'],
  ['TJS', 'Tajikistani Somoni',                  'tg-TJ',  'TJ'],
  ['TMT', 'Turkmenistani Manat',                 'tk-TM',  'TM'],
  ['TND', 'Tunisian Dinar',                      'ar-TN',  'TN'],
  ['TOP', 'Tongan Paʻanga',                      'to-TO',  'TO'],
  ['TRY', 'Turkish Lira',                        'tr-TR',  'TR'],
  ['TTD', 'Trinidad & Tobago Dollar',            'en-TT',  'TT'],
  ['TWD', 'New Taiwan Dollar',                   'zh-TW',  'TW'],
  ['TZS', 'Tanzanian Shilling',                  'sw-TZ',  'TZ'],
  ['UAH', 'Ukrainian Hryvnia',                   'uk-UA',  'UA'],
  ['UGX', 'Ugandan Shilling',                    'en-UG',  'UG'],
  ['USD', 'US Dollar',                           'en-US',  'US'],
  ['UYU', 'Uruguayan Peso',                      'es-UY',  'UY'],
  ['UZS', 'Uzbekistani Som',                     'uz-UZ',  'UZ'],
  ['VES', 'Venezuelan Bolívar',                  'es-VE',  'VE'],
  ['VND', 'Vietnamese Đồng',                     'vi-VN',  'VN'],
  ['VUV', 'Vanuatu Vatu',                        'bi-VU',  'VU'],
  ['WST', 'Samoan Tala',                         'en-WS',  'WS'],
  ['XAF', 'Central African CFA Franc',           'fr-CM',  'CM'],
  ['XCD', 'East Caribbean Dollar',               'en-AG',  'AG'],
  ['XOF', 'West African CFA Franc',              'fr-SN',  'SN'],
  ['XPF', 'CFP Franc',                           'fr-PF',  'PF'],
  ['YER', 'Yemeni Rial',                         'ar-YE',  'YE'],
  ['ZAR', 'South African Rand',                  'en-ZA',  'ZA'],
  ['ZMW', 'Zambian Kwacha',                      'en-ZM',  'ZM'],
];

// Build lookup map from the list
const CURRENCIES = Object.fromEntries(
  CURRENCY_LIST.map(([code, , locale]) => [code, { locale, currency: code }])
);

// Converts an ISO 3166-1 alpha-2 code to its flag emoji (e.g. 'DK' → '🇩🇰')
function flagEmoji(cc) {
  return [...cc].map(c => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65)).join('');
}

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

const COST_FONT_MAX = 3.8; // rem — starting size JS scales down from
const COST_FONT_MIN = 0.7; // rem — never go smaller than this

// Off-screen canvas used purely for text measurement — avoids relying on flex layout state
const _measureCtx = document.createElement('canvas').getContext('2d');

function fitCostText() {
  const el = document.getElementById('cost-display');
  const text = el.textContent;
  if (!text) return;

  // Measure available width from the card itself, not the element (which can flex-expand)
  const card = document.getElementById('screen-timer');
  const cardStyle = getComputedStyle(card);
  const availableWidth = card.clientWidth
    - parseFloat(cardStyle.paddingLeft)
    - parseFloat(cardStyle.paddingRight);

  const rootPx = parseFloat(getComputedStyle(document.documentElement).fontSize);
  _measureCtx.font = `700 ${COST_FONT_MAX * rootPx}px "Courier New", Courier, monospace`;
  const textWidth = _measureCtx.measureText(text).width;

  let fontSize = COST_FONT_MAX;
  if (textWidth > availableWidth) {
    fontSize = Math.max(COST_FONT_MIN, COST_FONT_MAX * (availableWidth / textWidth) * 0.96);
  }
  el.style.fontSize = fontSize + 'rem';
}

let _rafId = null;
let _lastCostLen = 0;

function tick() {
  if (!state.running) return;
  state.elapsedMs = Date.now() - state.startTime;
  document.getElementById('elapsed-display').textContent = formatTime(state.elapsedMs);
  const formatted = formatCurrency(calcCost(state.elapsedMs));
  document.getElementById('cost-display').textContent = formatted;
  // Only re-measure when the string length changes (new digit added)
  if (formatted.length !== _lastCostLen) {
    _lastCostLen = formatted.length;
    fitCostText();
  }
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

  _lastCostLen = 0;
  document.getElementById('elapsed-display').textContent = formatTime(0);
  document.getElementById('cost-display').textContent    = formatCurrency(0);
  updateRateDisplay();

  showScreen('timer');
  fitCostText();
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
  CURRENCY_LIST.forEach(([code, name, , cc]) => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = `${flagEmoji(cc)} ${code} — ${name}`;
    if (code === 'USD') opt.selected = true;
    sel.appendChild(opt);
  });
})();

window.addEventListener('resize', () => {
  if (state.running || state.elapsedMs > 0) fitCostText();
});

MoneyAnimation.start();
showScreen('setup');
