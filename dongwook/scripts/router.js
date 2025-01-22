// 각 페이지 컴포넌트 정의
const pages = {
  login: () => `
    <h1>Login Page</h1>
    <p>Welcome to the login page.</p>
  `,
  signup: () => `
    <h1>Signup Page</h1>
    <p>Sign up to create an account.</p>
  `,
  game: () => `
    <h1>Game Page</h1>
    <p>Start your game journey!</p>
  `,
  profile: () => `
    <h1>Profile Page</h1>
    <p>Manage your profile information.</p>
  `,
  default: () => `
    <h1>Welcome</h1>
    <p>Select a page from the menu.</p>
  `
};

// 라우터 함수
function router() {
  const hash = window.location.hash.slice(1); // '#' 제거
  const app = document.getElementById('app');

  // 해당 해시에 맞는 페이지 렌더링 (없으면 기본 페이지)
  const renderPage = pages[hash] || pages.default;
  app.innerHTML = renderPage();
}

// 이벤트 리스너 등록
window.addEventListener('hashchange', router);

// 초기 라우팅 호출
router();
