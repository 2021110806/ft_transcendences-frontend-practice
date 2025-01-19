// login.js

export function renderLoginPage() {
    const app = document.getElementById('app');
  
    // 로그인 페이지 HTML 구성 (부트스트랩 카드 이용)
    app.innerHTML = `
      <div class="overlay d-flex align-items-center justify-content-center" 
           style="min-height: 80vh; background-color: rgba(0,0,0,0.2)">
        <div class="card login-card p-4" style="max-width: 400px; width: 100%">
          <h3 class="text-center mb-4">Sign in</h3>
          <form id="loginForm">
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input 
                type="email" 
                class="form-control" 
                id="email" 
                placeholder="example@example.com" 
                required 
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input 
                type="password" 
                class="form-control" 
                id="password" 
                placeholder="******" 
                required 
              />
            </div>
            <button type="submit" class="btn btn-primary w-100 mb-2">
              Sign in
            </button>
            <div class="text-center">
              <span>or</span>
            </div>
            <button type="button" class="btn btn-secondary w-100 mb-3">
              Continue with 42
            </button>
            <div class="text-center">
              <a href="#signup">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    `;
  
    // 폼 이벤트 바인딩
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
  
      console.log('Login attempt:', email, password);
      alert(`로그인 시도: ${email}`);
      // 여기에 실제 로그인 로직(서버 통신 등)을 추가
    });
  }
  