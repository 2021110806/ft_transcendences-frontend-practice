// setting.js

function renderSettings() {
    const container = document.createElement('div');
    container.className = 'container py-5';
  
    container.innerHTML = `
          <!-- Username Section -->
          <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" placeholder="Enter your username">
          </div>
  
          <!-- Password Section -->
          <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter your password">
          </div>
  
          <!-- Language Section -->
          <div class="mb-3">
              <label for="language" class="form-label">Language</label>
              <select class="form-select" id="language">
                  <option value="korean">Korean</option>
                  <option value="english">English</option>
                  <!-- Add more languages as needed -->
              </select>
          </div>
  
          <!-- Buttons Section -->
          <button class="btn btn-purple w-100 mb-2">Change data</button>
          <button class="btn btn-outline-primary w-100 mb-2">Log out</button>
          <button class="btn btn-danger w-100">Delete account</button>
    `;
  
    return container;
  }
  
  window.renderSettings = renderSettings;
  