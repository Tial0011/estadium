import { Navbar } from "./navbar.js";
import { Footer } from "./footer.js";

export function PageLayout(content) {
  return `
    ${Navbar()}

    <main class="app-content">
      ${content}
    </main>

    ${Footer()}
  `;
}
