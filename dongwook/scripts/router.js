function router() {
    const hash = window.location.hash;
    const app = document.getElementById('app');
  
    switch (hash) {
      case '#login':
        app.innerHTML = '<h1>Login Page</h1><p>Welcome to the login page.</p>';
        break;
      case '#signup':
        app.innerHTML = '<h1>Signup Page</h1><p>Sign up to create an account.</p>';
        break;
      case '#game':
        app.innerHTML = '<h1>Game Page</h1><p>Start your game journey!</p>';
        break;
      case '#profile':
        app.innerHTML = '<h1>Profile Page</h1><p>Manage your profile information.</p>';
        break;
      default:
        app.innerHTML = '<h1>Welcome</h1><p>Select a page from the menu.</p>';
    }
  }
  
  // Event listener for hash changes
  window.addEventListener('hashchange', router);
  
  // Initial call
  router();
  