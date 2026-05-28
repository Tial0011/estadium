/**
 * Apply match result to teams
 */
export function processMatch(homeTeam, awayTeam, homeGoals, awayGoals) {
  // Goals
  homeTeam.goalsFor += homeGoals;
  homeTeam.goalsAgainst += awayGoals;

  awayTeam.goalsFor += awayGoals;
  awayTeam.goalsAgainst += homeGoals;

  // Win / Draw / Loss
  if (homeGoals > awayGoals) {
    homeTeam.wins += 1;
    awayTeam.losses += 1;
  } else if (awayGoals > homeGoals) {
    awayTeam.wins += 1;
    homeTeam.losses += 1;
  } else {
    homeTeam.draws += 1;
    awayTeam.draws += 1;
  }
}
