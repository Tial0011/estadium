import { Navbar } from "./navbar.js";

export function PageLayout(content) {
  return `
    ${Navbar()}

    <main class="app-content">
      ${content}
    </main>
  `;
}
