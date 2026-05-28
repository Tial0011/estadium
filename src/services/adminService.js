import { state } from "../core/state.js";
import { processMatch } from "../utils/matchEngine.js";

/**
 * Check if fixture already exists
 */
function matchAlreadyPlayed(matches, homeTeam, awayTeam) {
  return matches.find((match) => {
    return (
      (match.homeTeam === homeTeam && match.awayTeam === awayTeam) ||
      (match.homeTeam === awayTeam && match.awayTeam === homeTeam)
    );
  });
}

/**
 * Submit group-stage match
 */
export function submitGroupMatch({
  group,
  homeTeam,
  awayTeam,
  homeGoals,
  awayGoals,
}) {
  if (!homeTeam || !awayTeam) {
    throw new Error("Both teams required.");
  }

  if (homeTeam === awayTeam) {
    throw new Error("A team cannot play itself.");
  }

  const parsedHomeGoals = Number(homeGoals);
  const parsedAwayGoals = Number(awayGoals);

  if (Number.isNaN(parsedHomeGoals) || Number.isNaN(parsedAwayGoals)) {
    throw new Error("Invalid score.");
  }

  state.update((tournament) => {
    const groupTeams = tournament.groups[group];

    const home = groupTeams.find((team) => team.name === homeTeam);

    const away = groupTeams.find((team) => team.name === awayTeam);

    if (!home || !away) {
      throw new Error("Teams must belong to selected group.");
    }

    const alreadyPlayed = matchAlreadyPlayed(
      tournament.matches,
      homeTeam,
      awayTeam,
    );

    if (alreadyPlayed) {
      throw new Error("Fixture already played.");
    }

    processMatch(home, away, parsedHomeGoals, parsedAwayGoals);

    tournament.matches.push({
      id: crypto.randomUUID(),

      group,

      homeTeam,
      awayTeam,

      homeGoals: parsedHomeGoals,
      awayGoals: parsedAwayGoals,

      playedAt: Date.now(),
    });
  });
}
