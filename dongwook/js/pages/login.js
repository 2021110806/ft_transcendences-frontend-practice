export function renderLoginPage() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="overlay d-flex align-items-center justify-content-center" 
         style="min-height: 100vh; background-image: url('../assets/images/background.png'); background-size: cover; background-position: center;">
      <div class="card login-card p-4" style="max-width: 400px; width: 100%; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);">
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

  // Form 이벤트 추가
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    console.log(`Login attempt: ${email}, ${password}`);
  });
}
