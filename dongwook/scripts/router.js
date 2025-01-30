// router.js

import { getGameOptionPage, setupGameOptionEvents } from './pages/game/option.js';
import { getGamePlayersPage, setupGamePlayersEvents } from './pages/game/players.js';

// ✅ 1) 모든 라우트를 '객체' 형태로 선언
const pages = {
  "/": {
    render: () => `
      <h1>Login Page</h1>
      <p>Welcome to the login page.</p>
    `
  },
  "/game/option": {
    render: getGameOptionPage,
    setupEvents: setupGameOptionEvents
  },
  "/game/players": {
    render: getGamePlayersPage,
    setupEvents: setupGamePlayersEvents
  },
  "/profile": {
    render: () => `
      <h1>Profile Page</h1>
      <p>Manage your profile information.</p>
    `
  }
};

// 라우팅 메인 함수
function router() {
  // 현재 브라우저 주소 경로
  const path = window.location.pathname;
  // pages에서 해당 경로가 없으면 "/" (메인 페이지)로 대체
  const page = pages[path] || pages["/"];

  // 메인 컨테이너
  const app = document.getElementById("app");

  // 객체 형태이므로 page.render() 호출
  app.innerHTML = page.render();

  // setupEvents가 있으면 실행
  if (page.setupEvents) {
    page.setupEvents();
  }
}

// ✅ 2) navigateTo를 전역(window) 함수로 등록하여 순환참조 제거
function _navigateTo(url) {
  window.history.pushState({}, "", url);
  router();
}
window.navigateTo = _navigateTo;

// 뒤로 가기/앞으로 가기 시 라우터 재실행
window.addEventListener("popstate", router);

// 첫 로딩 시 라우터 실행
window.addEventListener("DOMContentLoaded", router);
