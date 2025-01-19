export function renderPage(container, content) {
  container.innerHTML = "";
  container.appendChild(content);
}

export function createElement(tag, className, content = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (content) element.innerHTML = content;
  return element;
}
