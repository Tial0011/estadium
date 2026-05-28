/**
 * Calculate match points for a team
 */
export function calculatePoints(team) {
  return team.wins * 3 + team.draws;
}

/**
 * Goal difference
 */
export function calculateGoalDifference(team) {
  return team.goalsFor - team.goalsAgainst;
}

/**
 * Matches played
 */
export function calculatePlayed(team) {
  return team.wins + team.draws + team.losses;
}

/**
 * Sort teams in a group table
 */
export function sortStandings(teams = []) {
  return [...teams].sort((a, b) => {
    const pointsA = calculatePoints(a);
    const pointsB = calculatePoints(b);

    if (pointsB !== pointsA) return pointsB - pointsA;

    const gdA = calculateGoalDifference(a);
    const gdB = calculateGoalDifference(b);

    if (gdB !== gdA) return gdB - gdA;

    return b.goalsFor - a.goalsFor;
  });
}

/**
 * Create default team stats object
 */
export function createTeamStats(name) {
  return {
    name,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
  };
}
