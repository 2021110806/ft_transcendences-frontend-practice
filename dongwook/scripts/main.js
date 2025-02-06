import { renderNavbar } from "./components/navbar.js";
import { router } from "./router.js";

// 네비게이션 바 렌더링
renderNavbar();

// SPA 라우터 실행
window.addEventListener("load", router);
window.addEventListener("popstate", router);
