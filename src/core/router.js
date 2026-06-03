import { HomePage } from "../pages/home.js";
import { RegisterPage } from "../pages/register.js";
import { GroupsPage } from "../pages/groups.js";
import { MatchesPage } from "../pages/matches.js";
import { AdminPage } from "../pages/admin.js";
import { PageLayout } from "../components/layout/pageLayout.js";
const routes = {};

let appRoot = null;

/**
 * Register route
 */
export function registerRoute(path, page) {
  routes[path] = page;
}

/**
 * Get current URL hash path
 */
export function getCurrentPath() {
  return window.location.hash.replace("#", "") || "/";
}

/**
 * Render active route
 */
export function renderRoute() {
  if (!appRoot) return;

  const path = getCurrentPath();

  const page = routes[path];

  if (!page) {
    appRoot.innerHTML = `
      <section class="container">
        <h1 class="page-title">404</h1>
        <p class="page-subtitle">
          Page not found.
        </p>
      </section>
    `;
    return;
  }

  appRoot.innerHTML = PageLayout(page());
}

/**
 * Initialize router
 */
export function initializeRouter(root) {
  appRoot = root;

  window.addEventListener("hashchange", renderRoute);

  renderRoute();
}

/**
 * Force rerender current page
 */
export function rerender() {
  renderRoute();
}
registerRoute("/", HomePage);

registerRoute("/register", RegisterPage);

registerRoute("/groups", GroupsPage);

registerRoute("/matches", MatchesPage);

registerRoute("/admin", AdminPage);
