import { createTournament } from "../services/tournamentService.js";

import { rerender } from "./router.js";

import { saveTournament, loadTournament } from "../firebase/tournamentApi.js";

class StateManager {
  constructor() {
    this.tournament = createTournament();

    this.listeners = [];

    this.initialized = false;
  }

  /**
   * Initialize cloud state
   */
  async init() {
    if (this.initialized) {
      return;
    }

    try {
      const cloudData = await loadTournament();

      if (cloudData) {
        this.tournament = cloudData;
      }
    } catch (error) {
      console.error("Failed to load tournament:", error);
    }

    this.initialized = true;

    this.notify();
  }

  /**
   * Get state
   */
  getState() {
    return this.tournament;
  }

  /**
   * Subscribe
   */
  subscribe(callback) {
    this.listeners.push(callback);
  }

  /**
   * Notify listeners
   */
  notify() {
    this.listeners.forEach((listener) => {
      listener(this.tournament);
    });

    rerender();
  }

  /**
   * Reset tournament
   */
  async reset() {
    this.tournament = createTournament();

    await saveTournament(this.tournament);

    this.notify();
  }

  /**
   * Safe update
   */
  async update(updaterFn) {
    updaterFn(this.tournament);

    try {
      await saveTournament(this.tournament);
    } catch (error) {
      console.error("Failed to save tournament:", error);
    }

    this.notify();
  }
}

export const state = new StateManager();
