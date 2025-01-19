import { createElement } from "../utils.js";

export function HomePage() {
    const container = createElement("div", "text-center");
    const heading = createElement("h1", "", "Welcome to the Home Page");

    container.appendChild(heading);

    return container;
}
