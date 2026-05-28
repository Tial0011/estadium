const GROUPS = ["A", "B", "C", "D"];

/**
 * Create empty team stats
 */
function createStats() {
  return {
    wins: 0,
    draws: 0,
    losses: 0,

    goalsFor: 0,
    goalsAgainst: 0,
  };
}

/**
 * Create tournament state
 */
export function createTournament() {
  return {
    teams: [],

    groups: {
      A: [],
      B: [],
      C: [],
      D: [],
    },

    matches: [],
  };
}

/**
 * Assign next group automatically
 */
function getNextGroup(totalTeams) {
  return GROUPS[totalTeams % GROUPS.length];
}

/**
 * Create team object
 */
function createTeam(name, group) {
  return {
    id: crypto.randomUUID(),

    name,

    group,

    ...createStats(),
  };
}

/**
 * Register new team
 */
export function addTeam(tournament, teamName) {
  const cleanName = teamName.trim();

  if (!cleanName) {
    throw new Error("Team name required.");
  }

  const exists = tournament.teams.find(
    (team) => team.name.toLowerCase() === cleanName.toLowerCase(),
  );

  if (exists) {
    throw new Error("Team already exists.");
  }

  if (tournament.teams.length >= 16) {
    throw new Error("Tournament full.");
  }

  const group = getNextGroup(tournament.teams.length);

  const team = createTeam(cleanName, group);

  tournament.teams.push(team);

  tournament.groups[group].push(team);

  return team;
}
