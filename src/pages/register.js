import { state } from "../core/state.js";
import { addTeam } from "../services/tournamentService.js";

export function RegisterPage() {
  setTimeout(() => {
    const form = document.getElementById("register-form");

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const input = document.getElementById("teamName");
      const name = input.value.trim();

      if (!name) return;

      state.update((tournament) => {
        addTeam(tournament, name);
      });

      input.value = "";

      alert("Team registered successfully!");
    });
  }, 0);

  return `
    <main class="page register-page">

      <section class="container">

        <h1 class="page-title">Register Team</h1>

        <p class="page-subtitle">
          Join the E-STADIUM tournament. 16 teams only.
        </p>

        <form id="register-form" class="form">

          <label>
            Team Name
            <input id="teamName" type="text" placeholder="Enter team name" />
          </label>

          <button type="submit" class="btn btn--primary">
            Register
          </button>

        </form>

      </section>

    </main>
  `;
}
