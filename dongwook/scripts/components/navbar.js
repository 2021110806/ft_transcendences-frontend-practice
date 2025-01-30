// navbar.js
const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <nav>
    <div>
      <div>
        <!-- 절대 경로 /static/Logo.png -->
        <img src="/static/Logo.png" alt="Logo">
        <a href="/profile" class="nav-link">Profile</a>
        <a href="/game/option" class="nav-link">GamePlay</a>
      </div>
    </div>
  </nav>
`;

function updateActiveLink() {
  const currentHash = window.location.hash;
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === currentHash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

updateActiveLink();
