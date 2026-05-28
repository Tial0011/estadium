import { state } from "../core/state.js";

function formatDate(timestamp) {
  const date = new Date(timestamp);

  return date.toLocaleString();
}

function renderMatch(match) {
  return `
    <div class="match-card">

      <div class="match-card__top">

        <span class="match-group">
          Group ${match.group}
        </span>

        <span class="match-date">
          ${formatDate(match.playedAt)}
        </span>

      </div>

      <div class="match-score">

        <div class="match-team">
          ${match.homeTeam}
        </div>

        <div class="match-result">
          ${match.homeGoals} - ${match.awayGoals}
        </div>

        <div class="match-team">
          ${match.awayTeam}
        </div>

      </div>

    </div>
  `;
}

export function MatchesPage() {
  const tournament = state.getState();

  const matches = [...tournament.matches].reverse();

  return `
    <main class="page matches-page">

      <section class="container">

        <h1 class="page-title">
          Match History
        </h1>

        <p class="page-subtitle">
          Recent tournament fixtures and results
        </p>

        <div class="matches-list">

          ${
            matches.length === 0
              ? `
                <div class="empty-state">
                  No matches played yet.
                </div>
              `
              : matches.map(renderMatch).join("")
          }

        </div>

      </section>

    </main>
  `;
}
