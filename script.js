// ===== 명언 데이터 =====
const quotes = [
  { text: "삶이 있는 한 희망은 있다.", author: "키케로" },
  { text: "산다는 것, 그것은 치열한 전투이다.", author: "로맹 롤랑" },
  { text: "하루에 3시간을 걸으면 7년 후에 지구를 한 바퀴 돌 수 있다.", author: "사무엘 존슨" },
  { text: "피할 수 없으면 즐겨라.", author: "로버트 엘리엇" },
  { text: "행복은 습관이다. 그것을 몸에 지니라.", author: "허버드" },
  { text: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.", author: "헬렌 켈러" },
  { text: "언제나 현재에 집중할 수 있다면 행복할 것이다.", author: "파울로 코엘료" },
  { text: "진정으로 웃으려면 고통을 참아야 하며, 나아가 고통을 즐길 줄 알아야 한다.", author: "찰리 채플린" },
  { text: "성공의 비결은 단 한 가지, 잘 할 수 있는 일에 광적으로 집중하는 것이다.", author: "톰 모나건" },
  { text: "작은 기회로부터 종종 위대한 업적이 시작된다.", author: "데모스테네스" },
  { text: "나는 내가 더 노력할수록 운이 더 좋아진다는 것을 발견했다.", author: "토마스 제퍼슨" },
  { text: "우리가 두려워해야 할 것은 두려움 그 자체뿐이다.", author: "프랭클린 루스벨트" },
  { text: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 당신 말이 맞다.", author: "헨리 포드" },
  { text: "천 리 길도 한 걸음부터 시작된다.", author: "노자" },
  { text: "미래는 현재 우리가 무엇을 하는가에 달려 있다.", author: "마하트마 간디" },
  { text: "오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한 걸음 더 진보한다.", author: "아이작 뉴턴" },
  { text: "세상에서 가장 용기 있는 행동은 스스로 생각하는 것이다. 그리고 그것을 큰 소리로 말하는 것이다.", author: "코코 샤넬" },
  { text: "변화하지 않으면 성장할 수 없고, 성장하지 않으면 진정으로 살고 있는 것이 아니다.", author: "게일 시히" },
  { text: "성공이란 열정을 잃지 않고 실패에서 실패로 걸어가는 것이다.", author: "윈스턴 처칠" },
  { text: "인생에서 가장 큰 영광은 넘어지지 않는 것이 아니라, 넘어질 때마다 일어서는 것이다.", author: "넬슨 만델라" },
];

// ===== 날씨 아이콘 매핑 (WMO 코드) =====
const weatherIcons = {
  0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️',
  45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌧️',
  56: '🌨️', 57: '🌨️',
  61: '🌧️', 63: '🌧️', 65: '🌧️',
  66: '🌨️', 67: '🌨️',
  71: '🌨️', 73: '❄️', 75: '❄️',
  77: '❄️',
  80: '🌦️', 81: '🌧️', 82: '⛈️',
  85: '🌨️', 86: '🌨️',
  95: '⛈️', 96: '⛈️', 99: '⛈️',
};

const weatherDesc = {
  0: '맑음', 1: '대체로 맑음', 2: '구름 조금', 3: '흐림',
  45: '안개', 48: '안개',
  51: '가벼운 이슬비', 53: '이슬비', 55: '강한 이슬비',
  56: '가벼운 진눈깨비', 57: '진눈깨비',
  61: '가벼운 비', 63: '비', 65: '강한 비',
  66: '가벼운 빗방울', 67: '강한 빗방울',
  71: '가벼운 눈', 73: '눈', 75: '폭설',
  77: '눈 알갱이',
  80: '소나기', 81: '강한 소나기', 82: '매우 강한 소나기',
  85: '가벼운 눈보라', 86: '눈보라',
  95: '뇌우', 96: '우박 뇌우', 99: '강한 우박 뇌우',
};

// ===== 시간/날짜 업데이트 =====
function updateDateTime() {
  const now = new Date();
  const timeEl = document.getElementById('current-time');
  const dateEl = document.getElementById('current-date');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeEl.textContent = `${hours}:${minutes}`;

  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  dateEl.textContent = now.toLocaleDateString('ko-KR', options);
}

// ===== 구글 검색 =====
function performSearch(event) {
  event.preventDefault();
  const query = document.getElementById('search-input').value.trim();
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
}

function handleSearchInput() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');
  if (input.value.length > 0) {
    clearBtn.classList.add('visible');
  } else {
    clearBtn.classList.remove('visible');
  }
}

function clearSearch() {
  const input = document.getElementById('search-input');
  input.value = '';
  input.focus();
  document.getElementById('search-clear').classList.remove('visible');
}

function luckySearch() {
  const query = document.getElementById('search-input').value.trim();
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`, '_blank');
  } else {
    window.open('https://doodles.google/', '_blank');
  }
}

// ===== 날씨 데이터 가져오기 (Open-Meteo API, 무료/키 불필요) =====
async function fetchWeather(lat, lon, cityName, cardId) {
  const card = document.getElementById(cardId);

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia/Seoul`;
    const response = await fetch(url);

    if (!response.ok) throw new Error('API 응답 오류');

    const data = await response.json();
    const current = data.current;

    const weatherCode = current.weather_code;
    const icon = weatherIcons[weatherCode] || '🌡️';
    const desc = weatherDesc[weatherCode] || '알 수 없음';
    const temp = Math.round(current.temperature_2m);
    const humidity = current.relative_humidity_2m;
    const wind = current.wind_speed_10m;

    card.innerHTML = `
      <div class="weather-header">
        <span class="weather-city">${cityName}</span>
        <span class="weather-icon">${icon}</span>
      </div>
      <div class="weather-body">
        <span class="weather-temp">${temp}<span class="unit">°C</span></span>
        <span class="weather-desc">${desc}</span>
      </div>
      <div class="weather-details">
        <span class="weather-detail">
          <span class="weather-detail-icon">💧</span> ${humidity}%
        </span>
        <span class="weather-detail">
          <span class="weather-detail-icon">🌬️</span> ${wind}km/h
        </span>
      </div>
    `;
  } catch (error) {
    card.innerHTML = `
      <div class="weather-header">
        <span class="weather-city">${cityName}</span>
        <span class="weather-icon">⚠️</span>
      </div>
      <div class="weather-error">날씨 정보를 불러올 수 없습니다.</div>
    `;
    console.error(`${cityName} 날씨 로드 실패:`, error);
  }
}

function loadWeather() {
  // 서울: 37.5665, 126.9780 | 제주: 33.4996, 126.5312
  fetchWeather(37.5665, 126.9780, '서울', 'weather-seoul');
  fetchWeather(33.4996, 126.5312, '제주', 'weather-jeju');
}

// ===== 명언 =====
let currentQuoteIndex = -1;

function showRandomQuote() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === currentQuoteIndex && quotes.length > 1);
  currentQuoteIndex = newIndex;

  const quote = quotes[currentQuoteIndex];
  const textEl = document.getElementById('quote-text');
  const authorEl = document.getElementById('quote-author');

  textEl.style.opacity = '0';
  authorEl.style.opacity = '0';

  setTimeout(() => {
    textEl.textContent = `"${quote.text}"`;
    authorEl.textContent = quote.author;
    textEl.style.opacity = '1';
    authorEl.style.opacity = '1';
  }, 300);
}

// ===== 초기화 =====
document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  loadWeather();
  showRandomQuote();
});
