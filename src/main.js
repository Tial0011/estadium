import { mountApp } from "./core/app.js";

import { state } from "./core/state.js";

const root = document.getElementById("app");

/**
 * Start application
 */
async function start() {
  await state.init();

  mountApp(root);
}

start();
