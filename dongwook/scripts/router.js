// public/scripts/router.js
import { createProfilePage } from './pages/profile/profile.js';
import { getGameOptionPage } from './pages/game/gameOption.js';
import { getPingPongGamePage } from './pages/game/pingpong.js';

// 라우트 테이블
const routes = {
  '/': () => `<h1>Welcome</h1><p>Select a page from the menu.</p>`,
  '/profile': () => createProfilePage().outerHTML,
  '/gameplay': () => getGameOptionPage(),
  '/pingpong': () => getPingPongGamePage(),
};

// 라우터 함수
export function router() {
  const path = window.location.pathname;
  const app = document.getElementById('app');

  // 매칭 안 되면 홈('/')으로
  const pageFn = routes[path] || routes['/'];
  const pageOutput = typeof pageFn === 'function' ? pageFn() : pageFn;

  if (typeof pageOutput === 'string') {
    app.innerHTML = pageOutput;
  } else {
    app.replaceChildren(pageOutput);
  }
}

// 페이지 이동
export function navigateTo(url) {
  history.pushState({}, "", url);
  router();
}

// 라우터 초기화
export function initRouter() {
  // 1) popstate로 뒤로가기/앞으로가기 감지
  window.addEventListener('popstate', router);

  // 2) a[data-link] 클릭 가로채기
  document.addEventListener('click', e => {
    const link = e.target.closest('a[data-link]');
    if (!link) return;
    e.preventDefault();
    navigateTo(link.getAttribute('href'));
  });

  // 3) 페이지 최초 로드 시 라우터 실행
  router();
}
