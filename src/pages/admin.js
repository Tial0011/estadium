import { state } from "../core/state.js";
import { submitGroupMatch } from "../services/adminService.js";

function renderTeamOptions(teams) {
  return teams
    .map(
      (team) => `
    <option value="${team.name}">
      ${team.name}
    </option>
  `,
    )
    .join("");
}

export function AdminPage() {
  const tournament = state.getState();

  const selectedGroup = "A";

  const groupTeams = tournament.groups[selectedGroup];

  setTimeout(() => {
    const form = document.getElementById("match-form");

    if (!form || form.dataset.bound === "true") {
      return;
    }

    form.dataset.bound = "true";

    const groupSelect = document.getElementById("group");

    const homeSelect = document.getElementById("homeTeam");

    const awaySelect = document.getElementById("awayTeam");

    /**
     * Update team dropdowns
     */
    function updateTeamSelectors() {
      const group = groupSelect.value;

      const teams = tournament.groups[group];

      const options = `
        <option value="">Select Team</option>
        ${renderTeamOptions(teams)}
      `;

      homeSelect.innerHTML = options;

      awaySelect.innerHTML = options;
    }

    updateTeamSelectors();

    groupSelect.addEventListener("change", updateTeamSelectors);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const payload = {
        group: groupSelect.value,

        homeTeam: homeSelect.value,

        awayTeam: awaySelect.value,

        homeGoals: document.getElementById("homeGoals").value,

        awayGoals: document.getElementById("awayGoals").value,
      };

      try {
        submitGroupMatch(payload);

        alert("Match submitted successfully.");

        form.reset();

        updateTeamSelectors();
      } catch (error) {
        alert(error.message);
      }
    });
  }, 0);

  return `
    <main class="page admin-page">

      <section class="container">

        <h1 class="page-title">
          Admin Panel
        </h1>

        <p class="page-subtitle">
          Submit live tournament match results
        </p>

        <form id="match-form" class="form">

          <label>
            Group

            <select id="group">

              <option value="A">Group A</option>

              <option value="B">Group B</option>

              <option value="C">Group C</option>

              <option value="D">Group D</option>

            </select>

          </label>

          <label>
            Home Team

            <select id="homeTeam"></select>

          </label>

          <label>
            Away Team

            <select id="awayTeam"></select>

          </label>

          <div class="score-grid">

            <label>
              Home Goals

              <input
                id="homeGoals"
                type="number"
                min="0"
                placeholder="0"
              />

            </label>

            <label>
              Away Goals

              <input
                id="awayGoals"
                type="number"
                min="0"
                placeholder="0"
              />

            </label>

          </div>

          <button
            type="submit"
            class="btn btn--primary"
          >
            Submit Match
          </button>

        </form>

      </section>

    </main>
  `;
}
