import { initializeRouter, registerRoute } from "./router.js";

import { HomePage } from "../pages/home.js";
import { RegisterPage } from "../pages/register.js";
import { GroupsPage } from "../pages/groups.js";
import { AdminPage } from "../pages/admin.js";
import { MatchesPage } from "../pages/matches.js";

/**
 * Register all routes
 */
function setupRoutes() {
  registerRoute("/", HomePage);

  registerRoute("/register", RegisterPage);

  registerRoute("/groups", GroupsPage);

  registerRoute("/admin", AdminPage);

  registerRoute("/matches", MatchesPage);
}

/**
 * App shell
 */
export function App() {
  setupRoutes();

  return `
    <div id="app-shell"></div>
  `;
}

/**
 * Mount application
 */
export function mountApp(root) {
  root.innerHTML = App();

  const shell = document.getElementById("app-shell");

  initializeRouter(shell);
}
