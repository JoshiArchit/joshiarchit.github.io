import 'dotenv/config';
const key = process.env.STEAM_API_KEY;
const steamId = process.env.STEAM_ID_64;

const res = await fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${key}&steamids=${steamId}`);
const data = await res.json();
console.log(data.response.players[0]);