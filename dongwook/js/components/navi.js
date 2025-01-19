  export function renderNavbar() {
  const navbar = document.getElementById('navbar');
  
  // // 로그인 여부 확인 (예: localStorage에서 토큰 확인)
  // const isLoggedIn = Boolean(localStorage.getItem('token'));

  // navbar.innerHTML = `
  //   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  //     <div class="container-fluid">
  //       <a class="navbar-brand" href="#home">MyApp</a>
  //       ${isLoggedIn ? `
  //         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
  //           <span class="navbar-toggler-icon"></span>
  //         </button>
  //         <div class="collapse navbar-collapse" id="navbarNav">
  //           <ul class="navbar-nav ms-auto">
  //             <li class="nav-item">
  //               <a class="nav-link" href="#profile">Profile</a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="#logout">Logout</a>
  //             </li>
  //           </ul>
  //         </div>
  //       ` : ''}
  //     </div>
  //   </nav>
  // `;
  navbar.innerHTML = `
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MyApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#login">Login</a>
        </li>
      </ul>
    </div>
  </div>
`;
}

// DOM 로드 시 네비게이션 바 렌더링
document.addEventListener('DOMContentLoaded', renderNavbar);
