/**
 * Fetches and caches Steam player summary, recently played games, and owned games using the Steam Web API.
 * Utilizes environment variables for API key and Steam ID, and provides functions to access the cached data.
 * Implements error handling to ensure that failures in fetching data do not break the application.
 * Caches the data in memory to avoid redundant API calls and improve performance.
 */
const KEY = import.meta.env.STEAM_API_KEY;
const STEAM_ID = import.meta.env.STEAM_ID_64;

export interface SteamPlayer {
  personaname: string;
  avatarfull: string;
  personastate: number;
}

export interface SteamGame {
  appid: number;
  name: string;
  playtime_forever: number;
  playtime_2weeks?: number;
  img_icon_url: string;
}

interface SteamData {
  player: SteamPlayer | null;
  recentGames: SteamGame[];
  ownedGames: SteamGame[];
}

let cache: SteamData | null = null;
let initPromise: Promise<SteamData> | null = null;

async function fetchPlayerSummary(): Promise<SteamPlayer | null> {
  try {
    const res = await fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${KEY}&steamids=${STEAM_ID}`,
    );
    const data = await res.json();
    return data.response.players[0] ?? null;
  } catch (err) {
    console.error("Failed to fetch player summary:", err);
    return null;
  }
}

async function fetchRecentGames(): Promise<SteamGame[]> {
  try {
    const res = await fetch(
      `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${KEY}&steamid=${STEAM_ID}`,
    );
    const data = await res.json();
    return data.response.games ?? [];
  } catch (err) {
    console.error("Failed to fetch recently played games:", err);
    return [];
  }
}

async function fetchOwnedGames(): Promise<SteamGame[]> {
  try {
    const res = await fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${KEY}&steamid=${STEAM_ID}&include_appinfo=true`,
    );
    const data = await res.json();
    return data.response.games ?? [];
  } catch (err) {
    console.error("Failed to fetch owned games:", err);
    return [];
  }
}

export async function initSteamData(): Promise<SteamData> {
  if (cache) return cache;
  if (initPromise) return initPromise; // guards against concurrent callers

  initPromise = Promise.all([
    fetchPlayerSummary(),
    fetchRecentGames(),
    fetchOwnedGames(),
  ]).then(([player, recentGames, ownedGames]) => {
    cache = { player, recentGames, ownedGames };
    return cache;
  });

  return initPromise;
}

export function getPlayerSummary(): SteamPlayer | null {
  return cache?.player ?? null;
}

export function getRecentGames(): SteamGame[] {
  return cache?.recentGames ?? [];
}

export function getOwnedGames(): SteamGame[] {
  return cache?.ownedGames ?? [];
}

export function steamDataIsAvailable(): boolean {
    return cache !== null;
}
