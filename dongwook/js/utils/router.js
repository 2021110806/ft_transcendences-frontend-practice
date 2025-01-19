import { renderNavbar } from '../components/navi.js';

function router() {
  const hash = window.location.hash.replace('#', '') || 'login';
  const app = document.getElementById('app');

  // 네비게이션 렌더링
  renderNavbar();

  switch (hash) {
    case 'login':
      import('../pages/login.js')
        .then((module) => module.renderLoginPage())
        .catch((err) => console.error(err));
      break;

    case 'profile':
      import('../pages/profile.js')
        .then((module) => module.renderHomePage())
        .catch((err) => console.error(err));
      break;

    default:
      app.innerHTML = `
        <div class="container my-5">
          <h2>404 - Page Not Found</h2>
          <p>해당 페이지가 없습니다.</p>
        </div>
      `;
      break;
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
