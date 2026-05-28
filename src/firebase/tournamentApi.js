import { db } from "./firebase.js";

import {
  doc,
  setDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

const TOURNAMENT_ID = "main-tournament";

/**
 * Save tournament to Firestore
 */
export async function saveTournament(tournament) {
  const ref = doc(db, "tournaments", TOURNAMENT_ID);

  await setDoc(ref, tournament);
}

/**
 * Load tournament from Firestore
 */
export async function loadTournament() {
  const ref = doc(db, "tournaments", TOURNAMENT_ID);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
}
