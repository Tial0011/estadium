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

  appRoot.innerHTML = page();
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
