import { createElement } from "../utils.js";

export function SignupPage() {
    const container = createElement("div", "signup-page");
    const formContainer = createElement("div", "signup-container");
    const heading = createElement("h1", "signup-heading", "Sign Up");
    const form = createElement("form", "mt-3");
    form.innerHTML = `
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter your username">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter your password">
        </div>
        <button type="submit" class="btn signup-btn">Register</button>
    `;
    const backLink = createElement("a", "btn btn-link mt-3", "Go Back");
    backLink.href = "/";

    formContainer.appendChild(heading);
    formContainer.appendChild(form);
    formContainer.appendChild(backLink);
    container.appendChild(formContainer);

    return container;
}