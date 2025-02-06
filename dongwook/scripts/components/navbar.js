// public/scripts/components/Navbar.js
export function renderNavbar() {
  const navbarEl = document.getElementById('navbar');
  navbarEl.innerHTML = `
    <nav>
      <div>
        <div>
          <img src="./static/logo.png" alt="Logo" style="height:16px;">
          <a href="/profile" class="nav-link" data-link>Profile</a>
          <a href="/gameplay" class="nav-link" data-link>GamePlay</a>
        </div>
      </div>
    </nav>
  `;
}
