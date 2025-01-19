import { renderPage } from "./utils.js";
import { HomePage } from "./pages/home.js";
import { LoginPage } from "./pages/login.js";
import { SignupPage } from "./pages/signup.js";

const routes = {
    "/": HomePage,
    "/login": LoginPage,
    "/signup": SignupPage,
};

export function router() {
    const appDiv = document.getElementById("app");

    const render = () => {
        const path = window.location.pathname;
        const PageComponent = routes[path] || HomePage;
        renderPage(appDiv, PageComponent());
    };

    window.addEventListener("popstate", render);

    document.body.addEventListener("click", (event) => {
        if (event.target.tagName === "A" && event.target.getAttribute("href")) {
            event.preventDefault();
            const href = event.target.getAttribute("href");
            window.history.pushState({}, "", href);
            render();
        }
    });

    render();
}
