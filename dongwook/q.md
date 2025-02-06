Q1. index.html 에서 `<script src="./scripts/components/Navbar.js" defer></script>` 스크립트를 defer로 로드하는 이유와 개념

Q2. navbar.js에서
``` javascript
// public/scripts/components/Navbar.js
(function() {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `
    <nav>
      <div>
        <div>
          <img src="./static/logo.png" alt="Logo">
          <a href="/profile" class="nav-link" data-link>Profile</a>
          <a href="/gameplay" class="nav-link" data-link>GamePlay</a>
        </div>
      </div>
    </nav>
  `;
})();
``` 
위 표현이 잘 이해가지 않음. 이름 없는 함수인 것인지? 이걸 export 안해도 되는 것인지?