// home.js

export function renderHomePage() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container my-5 text-center">
        <h1>Welcome to Home</h1>
        <p>이 곳은 메인 화면 예시입니다.</p>
        <a href="#login" class="btn btn-primary">로그인 하러 가기</a>
      </div>
    `;
  }
  