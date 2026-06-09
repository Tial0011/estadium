import { state } from "../core/state.js";
import { sortStandings } from "../utils/standings.js";
import { Card } from "../components/ui/card.js";

function renderGroupTable(groupName, teams) {
  const sorted = sortStandings(teams);

  return Card(`
    <h2 class="group-title">
      Group ${groupName}
    </h2>

    <table class="table">

      <thead>
        <tr>
          <th>Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
      </thead>

      <tbody>
        ${
          sorted.length === 0
            ? `
              <tr>
                <td colspan="9" class="empty">
                  No teams yet
                </td>
              </tr>
            `
            : sorted
                .map((team) => {
                  const played = team.wins + team.draws + team.losses;

                  const gd = team.goalsFor - team.goalsAgainst;

                  const pts = team.wins * 3 + team.draws;

                  return `
                    <tr>
                      <td>${team.name}</td>
                      <td>${played}</td>
                      <td>${team.wins}</td>
                      <td>${team.draws}</td>
                      <td>${team.losses}</td>
                      <td>${team.goalsFor}</td>
                      <td>${team.goalsAgainst}</td>
                      <td>${gd}</td>
                      <td class="pts">${pts}</td>
                    </tr>
                  `;
                })
                .join("")
        }
      </tbody>

    </table>
  `);
}

export function GroupsPage() {
  const tournament = state.getState();

  const groups = tournament.groups;

  return `
    <main class="page groups-page">

      <section class="container">

        <h1 class="page-title">
          Group Stage
        </h1>

        <p class="page-subtitle">
          Live standings update from tournament state
        </p>

        <div class="groups-grid">

          ${Object.keys(groups)
            .map((group) => renderGroupTable(group, groups[group]))
            .join("")}

        </div>

      </section>

    </main>
  `;
}
